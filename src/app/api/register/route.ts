import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getGoogleSheets, getGoogleDrive, SPREADSHEET_ID, SHEET_NAME, DRIVE_FOLDER_ID } from '@/lib/google';
import { Readable } from 'stream';

// Generate unique ID
function generateId(): string {
  return `ALU-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Helper function to get MIME type from base64
function getMimeType(base64: string): string {
  const match = base64.match(/^data:(image\/\w+);base64,/);
  return match ? match[1] : 'image/jpeg';
}

// Helper function to get file extension from base64
function getExtension(base64: string): string {
  const match = base64.match(/^data:image\/(\w+);base64,/);
  return match ? match[1] : 'jpg';
}

// Upload image to Google Drive and return public URL
async function uploadToGoogleDrive(
  imageBase64: string,
  fileName: string
): Promise<string> {
  const drive = getGoogleDrive();
  
  // Convert base64 to buffer
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
  const imageBuffer = Buffer.from(base64Data, 'base64');
  const mimeType = getMimeType(imageBase64);

  // Create a readable stream from buffer
  const stream = Readable.from(imageBuffer);

  // First, get the Shared Drive ID from the folder
  let driveId: string | undefined;
  if (DRIVE_FOLDER_ID) {
    try {
      const folderInfo = await drive.files.get({
        fileId: DRIVE_FOLDER_ID,
        fields: 'driveId',
        supportsAllDrives: true,
      });
      driveId = folderInfo.data.driveId || undefined;
      console.log('Found Shared Drive ID:', driveId);
    } catch (e) {
      console.log('Could not get driveId:', e);
    }
  }

  // Upload file to Google Drive (Shared Drive)
  const fileMetadata = {
    name: fileName,
    parents: DRIVE_FOLDER_ID ? [DRIVE_FOLDER_ID] : undefined,
  };

  const media = {
    mimeType,
    body: stream,
  };

  const createParams = {
    requestBody: fileMetadata,
    media: media,
    fields: 'id, webViewLink, webContentLink',
    supportsAllDrives: true,
  };

  // If it's a Shared Drive, we need to specify supportsAllDrives
  // The driveId is not needed in files.create when parents is specified
  console.log('Uploading to folder:', DRIVE_FOLDER_ID, 'with driveId:', driveId);

  const file = await drive.files.create(createParams);

  const fileId = file.data.id;
  console.log('File uploaded successfully, ID:', fileId);

  // Return the direct image URL for embedding
  // Using the thumbnail link format which works better for displaying images
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const {
      fullName,
      batchYear,
      briefProfile,
      practiceArea,
      linkedinUrl,
      email,
      phone,
      imageBase64,
    } = formData;

    // Validate required fields
    if (!fullName || !batchYear || !briefProfile || !practiceArea || !imageBase64) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique ID for the member
    const memberId = generateId();
    const timestamp = new Date().toISOString();
    console.log('Processing registration:', memberId);
    
    // Upload image to Google Drive
    let imageUrl = '';
    try {
      const extension = getExtension(imageBase64);
      const fileName = `${memberId}.${extension}`;
      imageUrl = await uploadToGoogleDrive(imageBase64, fileName);
      console.log('Image uploaded successfully:', imageUrl);
    } catch (uploadError) {
      console.error('Image upload error:', uploadError);
      // Continue without image URL if upload fails
      imageUrl = '';
    }

    // Add data to Google Sheets
    const sheets = getGoogleSheets();

    // Check if the sheet exists, if not create headers
    try {
      const sheetInfo = await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
      });

      const sheetExists = sheetInfo.data.sheets?.some(
        (sheet) => sheet.properties?.title === SHEET_NAME
      );

      if (!sheetExists) {
        console.log('Sheet does not exist, creating:', SHEET_NAME);
        // Create the sheet
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: SPREADSHEET_ID,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: SHEET_NAME,
                  },
                },
              },
            ],
          },
        });

        // Add headers
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!A1:K1`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [
              [
                'ID',
                'Full Name',
                'Batch Year',
                'Brief Profile',
                'Practice Area',
                'LinkedIn URL',
                'Email',
                'Phone',
                'Image URL',
                'Registered At',
                'Status',
              ],
            ],
          },
        });
      }
    } catch (sheetError) {
      console.error('Error checking/creating sheet:', sheetError);
      throw sheetError;
    }

    // Append the new member data
    console.log('Appending data to sheet:', SHEET_NAME);
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:K`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            memberId,
            fullName,
            batchYear,
            briefProfile,
            practiceArea,
            linkedinUrl || '',
            email || '',
            phone || '',
            imageUrl,
            timestamp,
            'approved', // Default status
          ],
        ],
      },
    });
    
    console.log('Data appended successfully:', appendResponse.data);

    // Invalidate the alumni data cache
    revalidatePath('/api/alumni');

    return NextResponse.json({
      success: true,
      data: {
        id: memberId,
        fullName,
        batchYear,
        imageUrl,
      },
      message: 'Registration successful! Welcome to the alumni network.',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      },
      { status: 500 }
    );
  }
}

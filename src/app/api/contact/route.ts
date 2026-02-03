import { NextRequest, NextResponse } from 'next/server';
import { getGoogleSheets, SPREADSHEET_ID } from '@/lib/google';

const CONTACT_SHEET_NAME = 'Contact';

// Initialize the Contact sheet with headers if it doesn't exist
async function initializeContactSheet() {
  const sheets = getGoogleSheets();
  
  try {
    // Check if the sheet exists by trying to read it
    await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${CONTACT_SHEET_NAME}!A1`,
    });
  } catch (error) {
    // Sheet doesn't exist, create it
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    // Add the new sheet
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: CONTACT_SHEET_NAME,
              },
            },
          },
        ],
      },
    });

    // Add headers to the new sheet
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `${CONTACT_SHEET_NAME}!A1:F1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          ['Name', 'Email', 'Category', 'Subject', 'Message', 'Submitted At'],
        ],
      },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, category, subject, message } = body;

    // Validate required fields
    if (!name || !email || !category || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize the sheet if needed
    await initializeContactSheet();

    const sheets = getGoogleSheets();
    const timestamp = new Date().toISOString();

    // Append the contact data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${CONTACT_SHEET_NAME}!A:F`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [name, email, category, subject, message, timestamp],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      updates: response.data.updates,
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const sheets = getGoogleSheets();

    // Fetch all contact data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${CONTACT_SHEET_NAME}!A:F`,
    });

    const rows = response.data.values || [];

    if (rows.length <= 1) {
      // No data (only headers or empty)
      return NextResponse.json({
        success: true,
        data: [],
        total: 0,
      });
    }

    // Skip header row and map data
    const contacts = rows.slice(1).map((row) => ({
      name: row[0] || '',
      email: row[1] || '',
      category: row[2] || '',
      subject: row[3] || '',
      message: row[4] || '',
      submittedAt: row[5] || '',
    }));

    return NextResponse.json({
      success: true,
      data: contacts,
      total: contacts.length,
    });
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact data' },
      { status: 500 }
    );
  }
}

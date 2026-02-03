import { NextRequest, NextResponse } from 'next/server';
import { getGoogleSheets, SPREADSHEET_ID, SHEET_NAME } from '@/lib/google';
import { AlumniMember } from '@/types/alumni';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'approved';
    const search = searchParams.get('search') || '';
    const practiceArea = searchParams.get('practiceArea') || '';
    const batchYear = searchParams.get('batchYear') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    const sheets = getGoogleSheets();

    // Fetch all data from the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:K`,
    });

    const rows = response.data.values || [];

    if (rows.length <= 1) {
      // No data (only headers or empty)
      return NextResponse.json({
        success: true,
        data: {
          members: [],
          total: 0,
          page,
          totalPages: 0,
        },
      });
    }

    // Skip header row and map data
    const allMembers: AlumniMember[] = rows.slice(1).map((row) => ({
      id: row[0] || '',
      fullName: row[1] || '',
      batchYear: row[2] || '',
      briefProfile: row[3] || '',
      practiceArea: row[4] || '',
      linkedinUrl: row[5] || '',
      email: row[6] || '',
      phone: row[7] || '',
      imageUrl: row[8] || '',
      registeredAt: row[9] || '',
      status: (row[10] as 'pending' | 'approved' | 'rejected') || 'pending',
    }));

    // Filter by status
    let filteredMembers = allMembers.filter((member) => member.status === status);

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredMembers = filteredMembers.filter(
        (member) =>
          member.fullName.toLowerCase().includes(searchLower) ||
          member.practiceArea.toLowerCase().includes(searchLower) ||
          member.briefProfile.toLowerCase().includes(searchLower)
      );
    }

    // Apply practice area filter
    if (practiceArea && practiceArea !== 'All Areas') {
      filteredMembers = filteredMembers.filter(
        (member) => member.practiceArea === practiceArea
      );
    }

    // Apply batch year filter
    if (batchYear && batchYear !== 'All Years') {
      if (batchYear.endsWith('s')) {
        // Decade filter like "2020s", "2010s"
        const decadeStart = parseInt(batchYear.slice(0, 4));
        const decadeEnd = decadeStart + 9;
        filteredMembers = filteredMembers.filter((member) => {
          const year = parseInt(member.batchYear);
          return year >= decadeStart && year <= decadeEnd;
        });
      } else {
        filteredMembers = filteredMembers.filter(
          (member) => member.batchYear === batchYear
        );
      }
    }

    // Sort by registration date (newest first)
    filteredMembers.sort(
      (a, b) =>
        new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime()
    );

    // Calculate pagination
    const total = filteredMembers.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const paginatedMembers = filteredMembers.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      success: true,
      data: {
        members: paginatedMembers,
        total,
        page,
        totalPages,
      },
    });
  } catch (error) {
    console.error('Error fetching alumni:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch alumni',
      },
      { status: 500 }
    );
  }
}

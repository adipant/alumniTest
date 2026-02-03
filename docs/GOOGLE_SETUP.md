# Alumni Registration System - Google Integration Setup

This document explains how to set up the Google Sheets and Google Drive integration for the alumni registration system.

## Overview

When a new user registers:

1. Their profile photo is uploaded to a Google Drive folder
2. Their details (name, batch year, practice area, etc.) are stored in a Google Sheet
3. The image URL from Google Drive is linked to their record in the Sheet
4. New registrations appear on the `/directory` page automatically

## Prerequisites

- A Google Cloud Platform account
- Access to Google Cloud Console
- A Google Sheets document
- A Google Drive folder

## Setup Instructions

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your **Project ID**

### Step 2: Enable Required APIs

1. In Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for and enable:
   - **Google Sheets API**
   - **Google Drive API**

### Step 3: Create a Service Account

1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Enter a name (e.g., "alumni-registration")
4. Click **Create and Continue**
5. Skip the optional steps and click **Done**
6. Click on the service account you just created
7. Go to **Keys** tab
8. Click **Add Key** > **Create new key**
9. Choose **JSON** format
10. Download the JSON file - this contains your credentials

### Step 4: Set Up Google Sheets

1. Create a new Google Spreadsheet
2. Share it with the service account email (found in the JSON file as `client_email`)
3. Give it **Editor** access
4. Note the Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```

### Step 5: Set Up Google Drive Folder

1. Create a new folder in Google Drive for storing profile photos
2. Share it with the service account email
3. Give it **Editor** access
4. Note the Folder ID from the URL:
   ```
   https://drive.google.com/drive/folders/FOLDER_ID
   ```

### Step 6: Configure Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# From the downloaded JSON key file
GOOGLE_PROJECT_ID=your-project-id
GOOGLE_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=123456789012345678901
GOOGLE_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/...

# Your Spreadsheet and Folder IDs
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id
GOOGLE_DRIVE_FOLDER_ID=your-drive-folder-id
```

**Important:** The `GOOGLE_PRIVATE_KEY` should be enclosed in quotes and newlines should be represented as `\n`.

## Data Structure

### Google Sheets Columns

The system automatically creates the following columns in a sheet named "Alumni":

| Column        | Description                             |
| ------------- | --------------------------------------- |
| ID            | Unique member ID (ALU-timestamp-random) |
| Full Name     | Member's full name                      |
| Batch Year    | Graduation year                         |
| Brief Profile | Bio/description                         |
| Practice Area | Area of practice/expertise              |
| LinkedIn URL  | LinkedIn profile URL                    |
| Email         | Contact email                           |
| Phone         | Contact phone                           |
| Image URL     | Google Drive public image link          |
| Registered At | ISO timestamp                           |
| Status        | approved/pending/rejected               |

### Google Drive

Profile photos are stored in the specified folder with naming convention:

```
{MEMBER_ID}_{FULL_NAME}.{extension}
```

## API Endpoints

### POST /api/register

Registers a new alumni member.

**Request Body:**

```json
{
  "fullName": "John Doe",
  "batchYear": "2015",
  "briefProfile": "A brief description...",
  "practiceArea": "Corporate Law",
  "linkedinUrl": "https://linkedin.com/in/johndoe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "imageBase64": "data:image/jpeg;base64,..."
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "ALU-1234567890-abc123",
    "fullName": "John Doe",
    "batchYear": "2015",
    "imageUrl": "https://drive.google.com/uc?export=view&id=..."
  },
  "message": "Registration successful!"
}
```

### GET /api/alumni

Fetches alumni members with optional filters.

**Query Parameters:**

- `status` - Filter by status (default: "approved")
- `search` - Search by name, practice area, or profile
- `practiceArea` - Filter by practice area
- `batchYear` - Filter by batch year (e.g., "2015" or "2010s")
- `page` - Page number (default: 1)
- `limit` - Results per page (default: 12)

**Response:**

```json
{
  "success": true,
  "data": {
    "members": [...],
    "total": 100,
    "page": 1,
    "totalPages": 9
  }
}
```

## Troubleshooting

### "Permission denied" errors

- Make sure the service account has Editor access to both the Spreadsheet and Drive folder
- Verify the Spreadsheet ID and Folder ID are correct

### Images not loading

- Check that the Drive folder is shared with the service account
- The system makes images publicly viewable automatically

### Environment variables not working

- Ensure `.env.local` is in the project root
- Restart the development server after changes
- Check that the private key is properly formatted with `\n` for newlines

## Security Notes

- Never commit `.env.local` to version control
- Keep your service account JSON key secure
- Consider implementing admin approval workflow by setting default status to "pending"
- The images are made publicly accessible for display on the website

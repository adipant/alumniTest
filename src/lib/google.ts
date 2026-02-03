import { google } from 'googleapis';

// Initialize Google Auth with service account credentials
const getGoogleAuth = () => {
  const credentials = {
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.GOOGLE_CERT_URL,
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
    ],
  });

  return auth;
};

// Google Sheets instance
export const getGoogleSheets = () => {
  const auth = getGoogleAuth();
  return google.sheets({ version: 'v4', auth });
};

// Google Drive instance
export const getGoogleDrive = () => {
  const auth = getGoogleAuth();
  return google.drive({ version: 'v3', auth });
};

// Configuration
export const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || '';
export const DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || '';
export const SHEET_NAME = 'Alumni';

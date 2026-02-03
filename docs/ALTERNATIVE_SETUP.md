# Alternative Setup: Without Service Account Keys

If you cannot create service account keys due to organization policies, here are alternative approaches:

## Option 1: Use OAuth 2.0 (Development Only)

For local development, you can use OAuth 2.0 instead of a service account:

### Setup Steps:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Choose **Web application**
6. Add authorized redirect URIs:
   - `http://localhost:3000`
7. Download the OAuth client JSON

### Update the code:

This requires a different authentication flow, but you'll need to implement OAuth in your app which is complex.

## Option 2: Create Project Under Personal Account (Recommended)

The easiest solution is to create a separate Google Cloud project under a **personal Gmail account**:

1. **Sign out** of your organization Google account
2. **Sign in** with a personal Gmail account (create one if needed)
3. Go to https://console.cloud.google.com/
4. Create a new project (it will NOT be under an organization)
5. This personal project won't have the key creation restriction
6. Follow the normal setup steps from `GOOGLE_SETUP.md`

## Option 3: Use Google Apps Script as Middleware

Create a Google Apps Script that acts as an API:

1. Create a Google Apps Script project
2. Deploy it as a web app
3. Your Next.js app calls the Apps Script API
4. Apps Script directly accesses Sheets/Drive (no service account needed)

### Example Apps Script:

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  // Access spreadsheet
  const sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();

  // Add data
  sheet.appendRow([
    data.id,
    data.fullName,
    data.batchYear,
    // ... more fields
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  const sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
  const data = sheet.getDataRange().getValues();

  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      data: data,
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}
```

Then in your Next.js app, replace the Google API calls with HTTP requests to your Apps Script web app URL.

## Option 4: Request Organization Policy Exception

Contact your Google Cloud organization administrator and request an exception for:

**Constraint:** `iam.disableServiceAccountKeyCreation`

**Reason:** Development project requiring service account authentication for Google Sheets/Drive API

They can either:

- Disable the constraint for your specific project
- Grant you the role that bypasses this constraint
- Create the service account key for you

## Option 5: Use Firebase (If Available)

If your organization allows Firebase:

1. Set up Firebase in your project
2. Use Firebase Admin SDK
3. Firebase can authenticate to Google services without explicit keys when deployed

---

## Recommended Approach

**For immediate development:** Create a new project under a personal Google account (Option 2)

**For production:** Work with your organization's security team to either:

- Get proper service account keys with approval
- Set up Workload Identity Federation
- Use an alternative architecture that doesn't require direct API access

Would you like detailed instructions for any of these options?

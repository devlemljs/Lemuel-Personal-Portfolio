/**
 * Google Apps Script to handle Feedback Form submissions
 * 
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1mZS72sDMWUltBUDxLX1yENJn89oOM5jzVXaw-p0Gv8Q/edit
 * 2. Go to Extensions > App Script
 * 3. Paste this code into the editor
 * 4. Click 'Deploy' > 'New Deployment'
 * 5. Select type 'Web App'
 * 6. Set 'Execute as' to 'Me'
 * 7. Set 'Who has access' to 'Anyone'
 * 8. Click 'Deploy' and copy the Web App URL
 * 9. Paste the URL into the SCRIPT_URL variable in src/components/FeedbackForm.tsx
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1mZS72sDMWUltBUDxLX1yENJn89oOM5jzVXaw-p0Gv8Q/edit').getSheets()[0];
    
    // Extract data from the request
    const name = e.parameter.name || 'Unknown';
    const feedback = e.parameter.feedback || '';
    const allowUsage = e.parameter.allowUsage || 'No';
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    
    // Append row to the sheet
    sheet.appendRow([timestamp, name, feedback, allowUsage]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function
function test() {
  const mockEvent = {
    parameter: {
      name: 'Test User',
      feedback: 'This is a test feedback',
      allowUsage: 'Yes',
      timestamp: new Date().toISOString()
    }
  };
  doPost(mockEvent);
}

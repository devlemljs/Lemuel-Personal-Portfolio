# Google Sheets Feedback Integration Setup

Follow these steps to connect your portfolio's feedback form to your Google Sheet.

## 1. Prepare Your Google Sheet
1.  Open your Google Sheet: [https://docs.google.com/spreadsheets/d/1mZS72sDMWUltBUDxLX1yENJn89oOM5jzVXaw-p0Gv8Q/edit](https://docs.google.com/spreadsheets/d/1mZS72sDMWUltBUDxLX1yENJn89oOM5jzVXaw-p0Gv8Q/edit)
2.  Add headers to the first row (optional but recommended):
    *   **Column A:** Timestamp
    *   **Column B:** Name
    *   **Column C:** Feedback
    *   **Column D:** Allow Usage

## 2. Set Up Google Apps Script
1.  In your Google Sheet, go to **Extensions** > **Apps Script**.
2.  Delete any existing code and paste the content from `GOOGLE_APPS_SCRIPT.js`.
3.  Click the **Save** icon (diskette) and name it "Feedback Form Handler".

## 3. Deploy as a Web App
1.  Click the **Deploy** button (top right) > **New deployment**.
2.  Select **Type**: `Web App`.
3.  **Description**: "Feedback Form API".
4.  **Execute as**: `Me`.
5.  **Who has access**: `Anyone`.
6.  Click **Deploy**.
7.  Copy the **Web App URL** (it should look like `https://script.google.com/macros/s/AKfycb.../exec`).

## 4. Update Your Portfolio Code
1.  Open `src/components/FeedbackForm.tsx`.
2.  Find the `SCRIPT_URL` constant (around line 18).
3.  Replace the placeholder URL with your copied **Web App URL**.

## 5. Test the Form
1.  Open your portfolio and go to the **Feedback / Recommendation** section.
2.  Click the box to open the modal.
3.  Fill in the details and click **Submit Feedback**.
4.  Check your Google Sheet for the new entry!

### Note on CORS
The form uses `mode: 'no-cors'` as requested. This means:
*   The browser will send the request to Google's servers.
*   The browser will **not** be able to read the response from the server (it will be an "opaque" response).
*   The `submitStatus` will show "success" if the fetch call itself doesn't throw an error.
*   This is the simplest way to bypass CORS issues with Google Apps Script without complex proxying.

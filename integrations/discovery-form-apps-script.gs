/**
 * Better Call Bot — Discovery form → Google Sheet
 *
 * Receives submissions from https://www.bettercallbot.com/discovery/ and appends
 * one row per brief to the "BCB Discovery Submissions" sheet. Also emails the
 * sheet owner a copy of the Markdown brief.
 *
 * Setup (one time, ~2 minutes):
 *  1. Open the sheet:
 *     https://docs.google.com/spreadsheets/d/1L_YSkQEnyPhcyB_B8zYmUDZJrNJ3aknvKUkXFmpzhaM/edit
 *  2. Extensions → Apps Script. Delete the sample code and paste this whole file. Save.
 *  3. Deploy → New deployment → gear icon → Web app.
 *       Execute as: Me      Who has access: Anyone
 *     Click Deploy and approve the permissions prompt.
 *  4. Copy the Web app URL (ends in /exec) and paste it into SUBMIT_URL in
 *     public/discovery/index.html, then push to main.
 *
 * If you edit this script later: Deploy → Manage deployments → edit → Version: New version,
 * so the same URL keeps working.
 */

const NOTIFY_BY_EMAIL = true;

const HEADERS = [
  'Submitted At', 'Business', 'Type', 'Contact', 'WhatsApp', 'Email', 'Website',
  'Channels', 'Daily Volume', 'Trial Goals', 'Trial Start', 'Brief (Markdown)', 'Raw Answers (JSON)',
];

// Google Sheets caps a cell at 50,000 characters.
const CELL_MAX = 49000;
const clip = (s) => String(s == null ? '' : s).slice(0, CELL_MAX);

// Values starting with = + - @ would be run as formulas; prefix them so they stay text.
const safe = (s) => {
  const v = clip(s);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      new Date(d.submittedAt || Date.now()),
      safe(d.biz_name), safe(d.biz_type), safe(d.contact), safe(d.phone), safe(d.email),
      safe(d.website), safe(d.channels), safe(d.volume), safe(d.goals), safe(d.start),
      safe(d.brief), clip(JSON.stringify(d.answers || {})),
    ]);

    if (NOTIFY_BY_EMAIL) {
      MailApp.sendEmail({
        to: Session.getEffectiveUser().getEmail(),
        subject: 'New BCB discovery brief: ' + (d.biz_name || 'Unnamed business'),
        body: (d.brief || '') + '\n\n—\nAll submissions: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the /exec URL in a browser to check the deployment is live.
function doGet() {
  return ContentService.createTextOutput('BCB discovery endpoint is live.');
}

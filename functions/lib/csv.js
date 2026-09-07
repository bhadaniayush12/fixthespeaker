/**
 * Shared helpers for subscriber storage and CSV export.
 */

/** KV key prefix for per-subscriber records: `sub:<lowercased email>` */
export const SUBSCRIBER_PREFIX = 'sub:';

/** Legacy single-blob key used before the per-key refactor. Read-only now. */
export const LEGACY_CSV_KEY = 'subscribers_csv';

export const CSV_COLUMNS = ['Date', 'Time', 'Name', 'Email', 'Country', 'IP', 'UserAgent'];
export const CSV_HEADER = CSV_COLUMNS.join(',') + '\n';

/** Builds the KV key for a subscriber. Emails are normalized to lowercase. */
export function subscriberKey(email) {
  return SUBSCRIBER_PREFIX + String(email).trim().toLowerCase();
}

/**
 * Escapes a field for safe CSV representation (Excel compatible).
 * Neutralizes formula injection (=, +, -, @, tab, CR) and quotes the value.
 */
export function escapeCSV(field) {
  if (field === null || field === undefined) return '""';
  let str = String(field).trim();
  if (/^[=+\-@\t\r]/.test(str)) {
    str = "'" + str;
  }
  return `"${str.replace(/"/g, '""')}"`;
}

/** Serializes a stored subscriber record to one CSV row (no trailing newline). */
export function recordToCsvRow(record) {
  return [
    record.date,
    record.time,
    record.name,
    record.email,
    record.country,
    record.ip,
    record.userAgent,
  ]
    .map(escapeCSV)
    .join(',');
}

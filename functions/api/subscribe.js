/**
 * Cloudflare Pages Function: /api/subscribe
 * Captures email newsletter submissions and appends them to a Cloudflare KV-stored CSV file.
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const CSV_HEADER = 'Date,Time,Name,Email,Country,IP,UserAgent\n';

/**
 * Escapes a field for safe CSV representation (Excel compatible).
 * Prevents CSV Injection and handles commas, quotes, and newlines.
 */
function escapeCSV(field) {
  if (field === null || field === undefined) return '""';
  let str = String(field).trim();
  // Neutralize CSV formula injection (=, +, -, @)
  if (/^[=+\-@]/.test(str)) {
    str = "'" + str;
  }
  return `"${str.replace(/"/g, '""')}"`;
}

/**
 * Handles CORS Preflight
 */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

/**
 * Handles Subscription POST
 */
export async function onRequestPost({ request, env }) {
  try {
    let name = '';
    let email = '';
    let gotcha = '';
    let formLoadedAt = 0;

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json().catch(() => ({}));
      name = (body.name || '').trim();
      email = (body.email || '').trim();
      gotcha = (body._gotcha || '').trim();
      formLoadedAt = Number(body.formLoadedAt) || 0;
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      name = (formData.get('name') || '').toString().trim();
      email = (formData.get('email') || '').toString().trim();
      gotcha = (formData.get('_gotcha') || '').toString().trim();
      formLoadedAt = Number(formData.get('formLoadedAt')) || 0;
    } else {
      return new Response(
        JSON.stringify({ success: false, error: 'Unsupported Content-Type. Please send JSON.' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    // 1. Honeypot check: If the hidden input is filled by a spam bot, fail silently with fake success
    if (gotcha) {
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed!' }),
        { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    // 2. Timing validation: Bots submit forms in < 3 seconds
    const now = Date.now();
    if (formLoadedAt > 0 && now - formLoadedAt < 3000) {
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed!' }),
        { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    // 3. Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address.' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    // 4. Verify KV binding
    if (!env.SUBSCRIBERS) {
      console.error('Missing SUBSCRIBERS KV namespace binding in Cloudflare.');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Storage is not configured. Please bind the SUBSCRIBERS KV namespace.',
        }),
        { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    // 5. Build CSV record
    const dateObj = new Date();
    const dateStr = dateObj.toISOString().slice(0, 10);
    const timeStr = dateObj.toISOString().slice(11, 19);
    const ip = request.headers.get('cf-connecting-ip') || 'unknown';
    const country = request.cf?.country || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const newRecord = [
      escapeCSV(dateStr),
      escapeCSV(timeStr),
      escapeCSV(name || 'Subscriber'),
      escapeCSV(email),
      escapeCSV(country),
      escapeCSV(ip),
      escapeCSV(userAgent),
    ].join(',') + '\n';

    // 6. Retrieve existing CSV string from Cloudflare KV and append
    const existingCSV = (await env.SUBSCRIBERS.get('subscribers_csv')) || CSV_HEADER;
    
    // Check if email is already subscribed to avoid duplicate lines
    if (existingCSV.includes(`"${email.toLowerCase()}"`) || existingCSV.includes(`"${email}"`)) {
      return new Response(
        JSON.stringify({ success: true, message: 'You are already subscribed!' }),
        { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      );
    }

    const updatedCSV = existingCSV.endsWith('\n') ? existingCSV + newRecord : existingCSV + '\n' + newRecord;

    // 7. Save back to KV
    await env.SUBSCRIBERS.put('subscribers_csv', updatedCSV);

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed!' }),
      { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Subscription error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error. Please try again later.' }),
      { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    );
  }
}

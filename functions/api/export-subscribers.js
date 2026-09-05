/**
 * Cloudflare Pages Function: /api/export-subscribers
 * Protected admin endpoint to download the full CSV file of newsletter subscribers.
 * 
 * Usage:
 * 1. Via Browser: https://fixthespeaker.com/api/export-subscribers?key=YOUR_SECRET_KEY
 * 2. Via cURL: curl -H "x-admin-key: YOUR_SECRET_KEY" https://fixthespeaker.com/api/export-subscribers -o subscribers.csv
 */

const CSV_HEADER = 'Date,Time,Name,Email,Country,IP,UserAgent\n';

export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const keyParam = url.searchParams.get('key');
    const keyHeader = request.headers.get('x-admin-key');
    const providedKey = keyParam || keyHeader;

    const expectedKey = env.ADMIN_API_KEY;

    // 1. Validate that the ADMIN_API_KEY is configured in Cloudflare
    if (!expectedKey) {
      return new Response(
        JSON.stringify({
          error: 'ADMIN_API_KEY is not configured in Cloudflare environment variables.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Constant-time or direct string verification of admin secret key
    if (!providedKey || providedKey !== expectedKey) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized. Invalid or missing secret admin key.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Verify KV binding
    if (!env.SUBSCRIBERS) {
      return new Response(
        JSON.stringify({ error: 'SUBSCRIBERS KV namespace binding is missing.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Fetch CSV string from KV
    const csvContent = (await env.SUBSCRIBERS.get('subscribers_csv')) || CSV_HEADER;

    const today = new Date().toISOString().slice(0, 10);
    const filename = `subscribers_export_${today}.csv`;

    // 5. Return CSV stream with download headers (Excel and UTF-8 compatible)
    // Prepend UTF-8 BOM (\uFEFF) so Microsoft Excel opens special characters seamlessly
    const bom = '\uFEFF';
    const finalCSV = csvContent.startsWith(bom) ? csvContent : bom + csvContent;

    return new Response(finalCSV, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (err) {
    console.error('Export error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to export subscribers CSV.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

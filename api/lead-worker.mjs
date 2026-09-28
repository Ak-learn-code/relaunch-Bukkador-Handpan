const fields = ['company', 'name', 'email', 'phone', 'eventType', 'date', 'location', 'guests', 'duration', 'budget', 'message'];
const allowedTypes = new Set(['Corporate Event', 'Firmenfeier', 'Gala / Empfang', 'Messe', 'Hochzeit', 'Eventagentur', 'Sonstiges']);

function reply(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': origin, Vary: 'Origin', 'Cache-Control': 'no-store' },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (!env.ALLOWED_ORIGIN || origin !== env.ALLOWED_ORIGIN) return new Response('Forbidden', { status: 403 });
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' } });
    if (request.method !== 'POST') return reply({ error: 'Method not allowed' }, 405, origin);
    if (!request.headers.get('Content-Type')?.includes('application/json')) return reply({ error: 'JSON required' }, 415, origin);
    if (Number(request.headers.get('Content-Length') || 0) > 20000) return reply({ error: 'Request too large' }, 413, origin);
    let input;
    try { input = await request.json(); } catch { return reply({ error: 'Invalid JSON' }, 400, origin); }
    if (!input || typeof input !== 'object' || Array.isArray(input)) return reply({ error: 'Invalid payload' }, 400, origin);
    if (input.website) return reply({ ok: true }, 201, origin);
    const lead = Object.fromEntries(fields.map((key) => [key, typeof input[key] === 'string' ? input[key].trim().slice(0, key === 'message' ? 3000 : 240) : '']));
    if (!lead.name || !lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || !allowedTypes.has(lead.eventType) || !lead.location) return reply({ error: 'Required fields are missing or invalid' }, 422, origin);
    if (!env.LEADS || !env.RESEND_API_KEY || !env.FROM_EMAIL || !env.TO_EMAIL) return reply({ error: 'Service not configured' }, 503, origin);
    const id = crypto.randomUUID();
    const record = { ...lead, id, createdAt: new Date().toISOString() };
    await env.LEADS.put(`lead:${id}`, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 30 });
    const lines = fields.map((key) => `${key}: ${lead[key] || '—'}`).join('\n');
    try {
      const sent = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: env.FROM_EMAIL, to: [env.TO_EMAIL], reply_to: lead.email, subject: `Bukkador Event-Anfrage · ${lead.eventType}`, text: `${lines}\n\nLead-ID: ${id}` }),
      });
      if (!sent.ok) throw new Error(`Mail delivery failed: ${sent.status}`);
      await env.LEADS.put(`lead:${id}`, JSON.stringify({ ...record, notification: 'sent' }), { expirationTtl: 60 * 60 * 24 * 30 });
    } catch (error) {
      console.error('Lead saved, notification failed', id, error);
      return reply({ error: 'Delivery unavailable' }, 503, origin);
    }
    return reply({ ok: true, id }, 201, origin);
  },
};

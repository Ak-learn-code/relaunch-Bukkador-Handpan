import test from 'node:test';
import assert from 'node:assert/strict';
import worker from './lead-worker.mjs';

const origin = 'https://ak-learn-code.github.io';
const lead = { name: 'Example Person', email: 'person@example.org', eventType: 'Corporate Event', location: 'Mannheim', date: '2026-11-10', budget: '2.000–4.000 €', website: '' };
const request = (body, method = 'POST', requestOrigin = origin) => new Request('https://example.workers.dev/', { method, headers: { Origin: requestOrigin, 'Content-Type': 'application/json' }, body: method === 'POST' ? JSON.stringify(body) : undefined });
const environment = (saved) => ({ ALLOWED_ORIGIN: origin, RESEND_API_KEY: 'test', FROM_EMAIL: 'test@example.org', TO_EMAIL: 'info@example.org', LEADS: { put: async (key, value) => saved.push({ key, value: JSON.parse(value) }) } });

test('rejects requests from another origin', async () => {
  const response = await worker.fetch(request(lead, 'POST', 'https://other.example'), environment([]));
  assert.equal(response.status, 403);
});

test('validates required lead fields before storing', async () => {
  const saved = [];
  const response = await worker.fetch(request({ ...lead, email: 'invalid' }), environment(saved));
  assert.equal(response.status, 422);
  assert.equal(saved.length, 0);
});

test('stores a valid lead and sends notification', async () => {
  const saved = [];
  const previous = globalThis.fetch;
  globalThis.fetch = async (_url, options) => {
    const body = JSON.parse(options.body);
    assert.equal(body.reply_to, lead.email);
    assert.match(body.text, /Mannheim/);
    return new Response('{}', { status: 200 });
  };
  try {
    const response = await worker.fetch(request(lead), environment(saved));
    assert.equal(response.status, 201);
    assert.equal(saved.length, 2);
    assert.equal(saved.at(-1).value.notification, 'sent');
  } finally { globalThis.fetch = previous; }
});

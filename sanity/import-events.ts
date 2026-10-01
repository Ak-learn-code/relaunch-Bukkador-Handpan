import { createClient } from '@sanity/client';
import { eventSeedDocuments } from './seed-events';

const projectId = process.env.SANITY_PROJECT_ID;
const token = process.env.SANITY_WRITE_TOKEN;
const dataset = process.env.SANITY_DATASET || 'production';
if (!projectId || !token) throw new Error('SANITY_PROJECT_ID und SANITY_WRITE_TOKEN werden für den Terminimport benötigt.');

const client = createClient({ projectId, dataset, apiVersion: '2026-03-01', token, useCdn: false });
await Promise.all(eventSeedDocuments.map((document) => client.createOrReplace(document)));
console.log(`${eventSeedDocuments.length} Termine in Sanity importiert.`);

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
  name: 'bukkador',
  title: 'Bukkador Handpan',
  projectId:
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.PUBLIC_SANITY_PROJECT_ID ||
    'pjb256bq',
  dataset:
    process.env.SANITY_STUDIO_DATASET ||
    process.env.PUBLIC_SANITY_DATASET ||
    'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});

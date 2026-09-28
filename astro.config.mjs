import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bukkador-handpan.de',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
});

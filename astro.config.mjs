import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ak-learn-code.github.io',
  base: '/relaunch-Bukkador-Handpan',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain before deploying.
  site: 'https://zionwebcraft.co.il',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'he', locales: { he: 'he-IL' } },
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

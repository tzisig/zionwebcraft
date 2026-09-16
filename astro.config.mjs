// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zionwebcraft.com',
  // /landing-page-design was merged into /services/landing-page. The redirect
  // lives in public/_redirects so the host answers with a real 301: a static
  // page at that path would shadow the rule and only meta-refresh.
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

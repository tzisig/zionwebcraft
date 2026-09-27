// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

/**
 * While site.indexing is false the site is live but invisible to search:
 * every page carries a noindex meta tag, and this adds the matching
 * X-Robots-Tag header so non-HTML files are covered too.
 *
 * It also shouts on every build, because the classic launch failure is a
 * site that stays noindexed for months after it was ready.
 *
 * @returns {import('astro').AstroIntegration}
 */
function privateLaunchGuard() {
  return {
    name: 'private-launch-guard',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        if (site.indexing) {
          logger.info('indexing is ON: pages are open to search engines.');
          return;
        }

        const headers = new URL('_headers', dir);
        const extra = '\n# Private launch: remove by setting site.indexing = true.\n/*\n  X-Robots-Tag: noindex, nofollow\n';
        fs.appendFileSync(headers, extra, 'utf8');

        const line = '='.repeat(64);
        logger.warn(
          `\n${line}\n` +
            '  THE SITE IS BUILT AS NOINDEX. Search engines will ignore it.\n' +
            '  Every page carries noindex, nofollow, and so does the header.\n' +
            "  When the Go Live gate is clear: set indexing: true in\n" +
            '  src/config/site.ts, rebuild, and redeploy.\n' +
            line
        );
      },
    },
  };
}

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
    privateLaunchGuard(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});

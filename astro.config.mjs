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
        const headers = new URL('_headers', dir);

        // Split on either ending. Git hands Windows checkouts CRLF, and a
        // stray CR ends up inside the header value, which invalidates the
        // header at the edge without any error.
        const lines = fs.readFileSync(headers, 'utf8').split(/\r?\n/);

        if (!site.indexing) {
          // Extend the existing /* block instead of adding a second one:
          // a repeated pattern is not merged reliably by the host.
          const at = lines.indexOf('/*');
          if (at === -1) throw new Error('_headers has no /* block to extend');
          lines.splice(at + 1, 0, '  X-Robots-Tag: noindex, nofollow');
        }

        fs.writeFileSync(headers, lines.join('\n'), 'utf8');

        if (site.indexing) {
          logger.info('indexing is ON: pages are open to search engines.');
          return;
        }

        const rule = '='.repeat(64);
        logger.warn(
          `\n${rule}\n` +
            '  THE SITE IS BUILT AS NOINDEX. Search engines will ignore it.\n' +
            '  Every page carries noindex, nofollow, and so does the header.\n' +
            '  When the Go Live gate is clear: set indexing: true in\n' +
            '  src/config/site.ts, rebuild, and redeploy.\n' +
            rule
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

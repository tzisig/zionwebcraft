# ZionWebCraft

Marketing site for ZionWebCraft, a freelance web-development business.
Built with Astro 7, static output, Hebrew RTL, zero client-side framework.

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:4321
npm run build   # static build into dist/
npm run preview # serve the production build locally
npm run check   # Astro + TypeScript diagnostics
```

## Deploying

The site is static, so any static host works. Cloudflare Pages and Netlify both
read `public/_headers` and `public/_redirects` straight out of the build.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | from `.nvmrc` (22) |

`NAPI_RS_FORCE_WASI` in the npm scripts and `force=true` in `.npmrc` exist only
because Windows Application Control blocks the native binding on the author's
machine. Both are harmless on a Linux build image.

`public/_headers` carries the CSP. Anything the site loads from a new host has
to be added there, or the browser will block it with no visible error.

## Before going live

Everything that needs a real value is a `TODO` in one of three files.

1. **`src/config/site.ts`** — the single source of truth for business details:
   - `contact.whatsapp` — international format, digits only (e.g. `972501234567`). Builds every `wa.me` link.
   - `contact.phone` / `contact.phoneHref` / `contact.email`
   - `formEndpoint` — a form service endpoint (Formspree, Web3Forms, Netlify Forms). The form posts
     JSON-accepting `FormData` and redirects to `/thank-you` on success.
   - `analytics.gaMeasurementId` and `analytics.metaPixelId` — leave empty and no script is rendered at all.
   - `url` — production domain.
   - `stats` — the numbers shown in the homepage band.
2. **`astro.config.mjs`** — `site:` must match the production domain, or canonical URLs and the sitemap will be wrong.
3. **`public/robots.txt`** — the `Sitemap:` line carries the same domain.

## Content

Page copy lives in plain TypeScript, no CMS and no content collections:

| File | Holds |
|---|---|
| `src/data/services.ts` | The four services, what each includes, and the comparison table |
| `src/data/projects.ts` | Portfolio entries with challenge / solution / result |
| `src/data/content.ts` | Process steps, testimonials, FAQ, pricing factors, values, form options |

Adding a service automatically creates its page at `/services/<slug>`, its footer link, and its row
in the comparison table (add a matching entry to `comparison.rows[].values`).

## Images

Project cards and the About portrait currently render deterministic gradient placeholders.
To use real screenshots, drop files into `public/images/projects/` and replace the
`.project-card__cover` block in `src/components/ProjectCard.astro` with an `<Image />` from
`astro:assets`. Same for `.portrait` in `src/pages/about.astro`.

## Design system

Tokens live in `src/styles/global.css` under `:root` — colors, type scale, spacing, motion.
Change a token there and it propagates everywhere. The generated design brief that guided these
choices is in `design-system/webcraft/MASTER.md`.

- Background `#FFFFFF`, ink `#1A1A1A`, accent `#1F2A44`, gold detail `#B08B4F`
- Headings: Frank Ruhl Libre (Hebrew serif). Body: Assistant (Hebrew sans)
- Light mode only, by design

## Notes on this machine

`.npmrc` sets `force=true` and the npm scripts set `NAPI_RS_FORCE_WASI=true`. Both exist because
Windows Application Control blocks Astro's native `satteri` binding here, so the build runs on the
WASI fallback instead. On a machine without that policy, both can be removed.

## Deploy

Static output — `npm run build` produces `dist/`, deployable to Netlify, Vercel, Cloudflare Pages
or any static host. No server runtime required.

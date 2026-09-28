# Operations

What this site runs on, how to get it back when something breaks, and what is
known to be unfinished. Written for whoever has to fix this at 2am, which is
usually the person who built it and has forgotten the details.

Last reviewed: 2026-09-28.

## The stack

| Layer | Service | Notes |
| --- | --- | --- |
| Source | GitHub, `tzisig/zionwebcraft`, branch `main` | The only source of truth |
| Build and hosting | Cloudflare Pages | Builds from `main` on every push |
| DNS | Cloudflare | Nameservers `leif.ns.cloudflare.com`, `diva.ns.cloudflare.com` |
| Registrar | IONOS | Registration stays at IONOS; only the nameservers point to Cloudflare |
| TLS | Cloudflare Universal SSL | Google Trust Services, 90-day certificate, renewed automatically |
| Mail | Zoho Mail (free plan) | `info@zionwebcraft.com`, web and mobile only, no IMAP or SMTP |
| Forms | Formspree, form `myezbowd` | Posts from the browser, forwards to the mailbox above |
| Analytics | GA4, `G-QK2R6LXBJC` | Loaded on browser idle, not during page load |

There is no CMS, no database, no server and no plugins. The site is static
files. That is what makes the recovery steps below as short as they are.

## Backup

Nothing needs to be backed up on a schedule, because nothing lives only in one
place:

- **Content and code** live in git. Every clone is a full copy with history.
  There is a copy on GitHub and a copy on the working machine.
- **Built output** is disposable. `npm run build` reproduces `dist/` exactly
  from the source, so it is deliberately not committed.
- **Deployed versions** are kept by Cloudflare Pages. Every push produces a
  deployment that stays available for rollback.
- **DNS** is a short list of records in Cloudflare. It is exported below under
  "DNS records", so it can be retyped from this file alone.
- **Form submissions** are held by Formspree and forwarded to the mailbox. Two
  copies, in two services.

What this does *not* cover: the Zoho mailbox itself. Zoho's free plan has no
IMAP, so mail cannot be pulled into a local client. If the mailbox contents
start to matter, that is the first gap to close.

## Restore

### The site is broken after a deploy

Cloudflare Pages, project `zionwebcraft`, Deployments. Find the last deployment
that was good and use "Rollback to this deployment". This is instant and does
not touch the repository, so fix the code afterwards at a normal pace.

### A bad commit reached `main`

```bash
git revert <sha>        # keeps history, safe on a shared branch
git push origin main    # Cloudflare rebuilds and redeploys on its own
```

### The working copy is lost

```bash
git clone https://github.com/tzisig/zionwebcraft.git
cd zionwebcraft
npm install
npm run build
```

`npm run build` is the only command that matters. It already sets
`NAPI_RS_FORCE_WASI=true`, which is what makes the Astro compiler work on this
Windows machine; calling `npx astro build` directly skips that and fails with
"Cannot find native binding".

### The domain stops resolving

Check in this order, because the answer has been at the top of this list before:

1. **IONOS account notices.** An unconfirmed contact-details request locks the
   domain and takes it out of DNS entirely. This looks exactly like a DNS fault
   and is not one.
2. **Nameservers at IONOS** still point to `leif` and `diva.ns.cloudflare.com`.
3. **Cloudflare DNS records** match the table below.

### Mail stops arriving

1. Zoho, Settings, Filters: **Smart Filters** must stay off, or Zoho files
   form mail into `Notification` or `Newsletter` instead of the inbox.
2. MX, SPF and DKIM records match the table below.
3. Formspree, form `myezbowd`, Submissions: if the submission is there but no
   mail arrived, the problem is delivery. If the submission is not there, the
   problem is the form.

## DNS records

Enough to rebuild the zone from scratch.

| Type | Name | Value | Proxied |
| --- | --- | --- | --- |
| A | `zionwebcraft.com` | Cloudflare Pages | yes |
| CNAME | `www` | `zionwebcraft.com` | yes |
| MX | `zionwebcraft.com` | `mx.zoho.com` (10), `mx2.zoho.com` (20), `mx3.zoho.com` (50) | n/a |
| TXT | `zionwebcraft.com` | `v=spf1 include:zohomail.com ~all` | n/a |
| TXT | `zionwebcraft.com` | `zoho-verification=zb48442586.zmverify.zoho.com` | n/a |
| TXT | `zmail._domainkey` | Zoho DKIM public key | n/a |

A Redirect Rule sends `www.zionwebcraft.com` to the apex with a 301. It matches
on `http.host eq "www.zionwebcraft.com"`; the wildcard-template version of the
same rule did not fire.

## Accounts and renewals

| What | Where | Plan | Renews |
| --- | --- | --- | --- |
| Domain | IONOS | paid | **TODO: confirm the renewal date** |
| DNS, hosting, TLS | Cloudflare | free | n/a, certificate renews itself |
| Mailbox | Zoho Mail | free | n/a |
| Form backend | Formspree | free | n/a, 50 submissions per month |
| Analytics | GA4 | free | n/a |
| Source hosting | GitHub | free | n/a |

The domain is the only thing that can expire and take the site down with it.

## Known gaps

Things that are deliberately unfinished, so nobody rediscovers them as bugs.

- **The site is `noindex`.** `site.indexing` in `src/config/site.ts` is `false`.
  Every build prints a warning saying so. This is intentional until the launch
  gate is clear.
- **No DMARC record.** SPF and DKIM are in place, DMARC is not. Adding
  `_dmarc` with `v=DMARC1; p=none; rua=mailto:info@zionwebcraft.com` would
  start collecting reports without affecting delivery.
- **Formspree free plan caps at 50 submissions per month** and sends from
  `noreply@formspree.io`. Reply-To is set to the lead's own address, so
  replying works. Changing the visible sender needs their Business plan, or
  replacing Formspree with a Worker that sends through an email API.
- **No uptime monitoring.** Nothing would notice if the site went down.
- **No iPhone or Safari test.** No device available.
- **No screen-reader pass.** Automated accessibility is at 100, but nobody has
  walked the site with NVDA or VoiceOver.
- **No blog.** Planned, and deliberately not blocking launch.
- **`niv-arad` has no live URL** in `src/data/projects.ts`, and its `result`
  is a placeholder until the page has a month of traffic. Both are marked TODO
  in that file.

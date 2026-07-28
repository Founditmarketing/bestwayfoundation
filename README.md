# Top Notch Seamless Rain Gutters & Siding — Website Rebuild

Modern, mobile-first rebuild of [topnotchconstructiontx.com](https://topnotchconstructiontx.com) using **Next.js 15 (App Router) + Tailwind CSS 4**, fully statically generated and ready for Vercel.

> ⚠️ **Before launch**, review `CONTENT-AUDIT.md` (facts pending client verification) and `PHOTOS-NEEDED.md` (placeholder images to swap for real photos).

## What's included

- **All 66 URLs from the original site preserved** — home, services, about, gallery, contact, service areas, 4 service hub pages, 48 service-by-city landing pages, and blog with 7 articles. No redirects needed.
- **Local SEO baked in**: unique title + meta description and canonical per page, `LocalBusiness` JSON-LD with NAP data, `FAQPage` and `BlogPosting` schema, generated `sitemap.xml` and `robots.txt`, semantic HTML with a single `h1` per page.
- **Click-to-call** phone button in the sticky header (always visible on mobile), plus a text-message line.
- **Contact form** (frontend + validated API stub). Email delivery is **not wired up yet** — see the `TODO` in `src/app/api/contact/route.ts`.
- **Zero client-side page weight bloat**: no UI libraries, no fonts fetched, ~all pages static.

## Project structure

```
src/
  lib/            ← EDIT CONTENT HERE
    site.ts       ← business name, phone, email, hours, license (NAP)
    services.ts   ← the 6 services: copy, benefits, FAQs
    cities.ts     ← the 8 service-area cities
    blog.ts       ← blog posts
    gallery.ts    ← gallery photos + captions
    slugs.ts      ← builds the /service-city-tx routing table
  app/            ← pages (mostly render what's in lib/)
    [slug]/       ← service hubs + all 48 city landing pages
    blog/[slug]/  ← blog articles
    api/contact/  ← form handler stub (TODO: email service)
  components/     ← header, footer, form, gallery, etc.
public/images/    ← placeholder SVGs (swap per PHOTOS-NEEDED.md)
```

Adding a city or service in `lib/` automatically creates its landing pages, sitemap entries, and footer/nav links.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # type-check
npm run build      # production build (also validates all 77 pages)
```

## Deploy to Vercel

1. Push this repo/branch to GitHub.
2. In [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js; no configuration needed.
3. (When wiring the contact form) add `RESEND_API_KEY` and `CONTACT_INBOX_EMAIL` in **Project Settings → Environment Variables** (see `.env.example`).
4. Point the `topnotchconstructiontx.com` domain at the project in **Settings → Domains**.

## Pre-launch checklist

- [ ] Verify every fact flagged in `CONTENT-AUDIT.md` with the client (email, license #, stats, warranty terms)
- [ ] Swap placeholder images per `PHOTOS-NEEDED.md`
- [ ] Add 3–6 real customer reviews on the homepage (`src/app/page.tsx`, marked with TODO)
- [ ] Wire up contact form email delivery (`src/app/api/contact/route.ts`)
- [ ] Replace the "TN" text logo in the header with the real logo file
- [ ] Confirm the exact Instagram URL in `src/lib/site.ts`

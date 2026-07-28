# J Seamless Gutters — Website

Marketing site for **J Seamless Gutters** (Portland, TX). Built with Next.js
(App Router) + Tailwind CSS v4, fully static, deployable to Vercel.

## ⚠️ Before launch — placeholders to replace

All business facts live in **one file: [`lib/site.ts`](lib/site.ts)**. Update
there and the whole site (header, footer, click-to-call, contact page, schema
markup) updates everywhere:

| Item | Current value | Status |
| --- | --- | --- |
| Phone | `(361) 555-0134` | **PLACEHOLDER** — set the real number |
| Email | `hello@jseamlessgutters.com` | **PLACEHOLDER** — set the real email |
| Service-area towns | Portland + 9 Coastal Bend towns | Confirm list with the owner |
| Services list | 5 services | Confirm with the owner |
| Logo | `/public/logo.png` | **PLACEHOLDER** badge — drop in the real logo file, same name |
| Domain | `jseamlessgutters.com` | Set the real domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `components/JsonLd.tsx` |
| Estimate form | Logs to console | Wire up the TODO in `components/EstimateForm.tsx` (Formspree/Resend/etc.) |
| Photos | Curated stock | See [`IMAGES.md`](IMAGES.md) — replace with the owner's Facebook job photos |

No factual claims (years in business, warranties, licensing, reviews) appear
anywhere — add them once the owner confirms them.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run start      # serve the production build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repository — the
   Next.js preset needs no configuration.
3. Every push to the production branch deploys automatically; PRs get preview
   URLs.
4. Add the custom domain under **Project → Settings → Domains**, then update
   the domain TODOs listed above and redeploy.

## Structure

```
app/                page routes (App Router, all static)
  page.tsx          Home
  services/         all services w/ anchored sections
  gutter-guards/    dedicated guards page
  service-area/     towns + gulf-weather section
  about/            company story & values
  contact/          estimate form + NAP
  sitemap.ts        sitemap.xml
  robots.ts         robots.txt
components/         header, footer, hero, gallery/lightbox, comparison,
                    estimate form, reveals, wave dividers, JSON-LD schema
lib/site.ts         ← single source of truth for all business facts
public/images/      curated photography (see IMAGES.md)
```

## Design system

Palette is sampled from the logo and defined as Tailwind tokens in
`app/globals.css` (`@theme`): deep navy anchors (`navy-900` #0a1b3d), royal
blue CTAs (`brand-600` #1e6fd9), water highlights, chrome/silver details.
Type: Sora (display) + Inter (body) via `next/font`. Motion: scroll-triggered
reveals (IntersectionObserver), animated water gradients, curved section
dividers echoing the gutter curve in the logo — all CSS, no animation
libraries, and everything respects `prefers-reduced-motion`.

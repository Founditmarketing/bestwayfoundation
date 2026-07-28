# Photos Needed from Client

Every image on the site is currently a labeled SVG placeholder. Swap each file in `public/images/` with a real photo **keeping the same filename** (or change the extension to `.jpg`/`.webp` and update the path in the file noted below — the `SitePhoto` component will automatically optimize real photos).

**General guidance for the client:** landscape orientation unless noted, shot in daylight, at least 1600px wide, and ideally featuring their actual crew/trucks/work — no stock photos. Phone photos are fine if they're sharp.

## Priority 1 — seen by every visitor

| # | File | What to request | Used on |
|---|---|---|---|
| 1 | `hero/hero-seamless-gutter-install-crew.svg` | Hero shot: crew actively installing a seamless gutter run on an attractive home — the money shot of the whole site | Homepage hero |
| 2 | `about/about-owner-jason-on-jobsite.svg` | Jason on a job site, talking with a customer or inspecting work | Homepage "why us" |
| 3 | `about/about-owner-jason-portrait.svg` | Portrait of Jason (vertical, 7:8) — friendly, in work attire, truck/jobsite behind | About page |

## Priority 2 — service pages (one each, landscape 4:3)

| # | File | What to request |
|---|---|---|
| 4 | `services/service-seamless-gutter-machine-onsite.svg` | The gutter machine mid-run, forming a continuous gutter in a driveway |
| 5 | `services/service-gutter-cleaning-debris-removal.svg` | Tech on ladder scooping debris, or a satisfying full-bucket/clean-gutter shot |
| 6 | `services/service-gutter-guard-mesh-installed.svg` | Close-up of installed mesh guard on a shingle roof |
| 7 | `services/service-siding-installation-fiber-cement.svg` | Crew installing lap siding, partially complete wall |
| 8 | `services/service-soffit-repair-eave-panels.svg` | Soffit panels being replaced under an eave (before/during/after ok) |
| 9 | `services/service-fascia-board-replacement.svg` | Fascia board replacement — ideally showing removed rotted board next to new one |

## Priority 3 — gallery (12 photos, landscape 4:3)

Ask for their best finished-work shots matching these (city labels can be adjusted to wherever the photos were actually taken — **update captions in `src/lib/gallery.ts` to match**):

| # | File | What to request |
|---|---|---|
| 10 | `gallery/gallery-seamless-gutter-brick-home-port-arthur.svg` | Finished gutters on a brick home (Port Arthur) |
| 11 | `gallery/gallery-gutter-machine-fabrication-onsite.svg` | On-site fabrication action shot |
| 12 | `gallery/gallery-oversized-gutters-two-story-nederland.svg` | 6" gutters on a two-story home (Nederland) |
| 13 | `gallery/gallery-downspout-detail-corner.svg` | Clean mitered corner + downspout detail |
| 14 | `gallery/gallery-gutter-color-match-fascia.svg` | Gutter color-matched to trim |
| 15 | `gallery/gallery-gutter-guard-mesh-shingle-roof.svg` | Installed guards from above |
| 16 | `gallery/gallery-gutter-guard-pine-needles-vidor.svg` | Guards on a wooded/piney lot (Vidor) |
| 17 | `gallery/gallery-new-siding-installation-groves.svg` | Completed siding job (Groves) |
| 18 | `gallery/gallery-fiber-cement-siding-two-tone.svg` | Two-tone or standout siding project |
| 19 | `gallery/gallery-storm-damage-siding-repair-color-match.svg` | Before/after of a storm-damage siding repair |
| 20 | `gallery/gallery-full-exterior-gutters-siding-port-neches.svg` | Whole-exterior project, wide shot (Port Neches) |
| 21 | `gallery/gallery-crew-on-the-job-beaumont.svg` | Crew/truck on the job (Beaumont) |

## Priority 4 — blog headers (landscape 8:5)

| # | File | What to request |
|---|---|---|
| 22 | `blog/blog-gutter-installation-cost.svg` | Fresh gutter install, curb view |
| 23 | `blog/blog-choose-siding-materials.svg` | Siding sample boards fanned out |
| 24 | `blog/blog-fascia-rot-warning-signs.svg` | Rotted fascia with sagging gutter |
| 25 | `blog/blog-gutter-guards-honest-review.svg` | Water flowing through a mesh guard in rain |
| 26 | `blog/blog-gutter-cleaning-schedule.svg` | Gutter packed with leaves/needles |
| 27 | `blog/blog-gutters-replace-vs-clean.svg` | Rusted/failing old sectional gutter |
| 28 | `blog/blog-seamless-vs-sectional.svg` | Seamless run next to (or contrasted with) jointed sectional |

## Also request (not image slots)

- **Logo** — vector (.svg/.ai/.eps) or high-res PNG on transparent background; replaces the "TN" text mark in the header (`src/components/Header.tsx`)
- **Favicon-ready mark** — square version of the logo
- **3–6 written customer reviews** with first name + city (or permission to pull from Google/Facebook) for the homepage reviews section

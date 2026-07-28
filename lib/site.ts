/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH for all business facts (NAP, services, trust info).
 *
 *  ⚠️  TODO BEFORE LAUNCH — every value marked [PLACEHOLDER] below must be
 *  confirmed with the owner. Nothing on the site invents facts beyond the
 *  Facebook page (business name + Portland, TX). Update here and the whole
 *  site — header, footer, schema, click-to-call — updates everywhere.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "J Seamless Gutters",
  tagline: "Custom seamless gutters, fit to your home on site.",

  // [PLACEHOLDER] Replace with the real phone number before launch.
  phone: "(361) 555-0134",
  get phoneHref() {
    return "tel:+1" + this.phone.replace(/\D/g, "");
  },

  // [PLACEHOLDER] Replace with the real email (or remove where unused).
  email: "hello@jseamlessgutters.com",

  // Confirmed from the Facebook page: based in Portland, TX.
  city: "Portland",
  state: "TX",

  // [PLACEHOLDER] Confirm the exact service-area towns with the owner.
  // These are nearby Coastal Bend communities — trim or extend as needed.
  serviceArea: [
    "Portland",
    "Corpus Christi",
    "Gregory",
    "Ingleside",
    "Aransas Pass",
    "Rockport",
    "Taft",
    "Sinton",
    "Odem",
    "Port Aransas",
  ],
  serviceAreaLabel: "Portland, TX & the Coastal Bend",

  facebook: "https://www.facebook.com/profile.php?id=100076243388626",

  // [PLACEHOLDER] Confirm final service list with the owner.
  services: [
    {
      slug: "seamless-gutter-installation",
      name: "Seamless Gutter Installation",
      short:
        "Continuous aluminum gutters, roll-formed on site and cut to the exact length of your roofline. No seams, no joints, no weak points.",
    },
    {
      slug: "gutter-replacement",
      name: "Gutter Replacement",
      short:
        "Out with sagging, leaking sectional gutters — in with a clean, seamless system sized and pitched correctly for your roof.",
    },
    {
      slug: "gutter-guards",
      name: "Gutter Guards & Leaf Protection",
      short:
        "Keep leaves and debris out so water keeps moving. Less climbing ladders, fewer clogs, better protection year-round.",
    },
    {
      slug: "gutter-repair",
      name: "Gutter Repair",
      short:
        "Leaks, sags, pulled-away sections, and storm damage — diagnosed and fixed before they turn into water damage.",
    },
    {
      slug: "downspouts-drainage",
      name: "Downspouts & Drainage",
      short:
        "Downspouts placed and sized to move water away from your slab and beds — where it can't do any harm.",
    },
  ],
} as const;

export type Service = (typeof site.services)[number];

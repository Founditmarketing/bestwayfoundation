/**
 * Single source of truth for business info (NAP), used by the header, footer,
 * contact page, and LocalBusiness schema. Update here and it updates everywhere.
 *
 * ⚠️ Items marked VERIFY are pending client confirmation — see CONTENT-AUDIT.md.
 */
export const site = {
  name: "Top Notch Seamless Rain Gutters & Siding",
  legalName: "Top Notch Seamless Rain Gutters & Siding L.L.C.",
  shortName: "Top Notch",
  url: "https://topnotchconstructiontx.com",
  phone: "(409) 338-6602",
  phoneHref: "tel:+14093386602",
  textLine: "(409) 204-1469",
  textHref: "sms:+14092041469",
  // VERIFY: real email could not be read from the old site (obfuscated).
  email: "info@topnotchconstructiontx.com",
  // VERIFY: license number + what it certifies.
  license: "Contractor License #TN-2024-001",
  homeBase: "Nederland, TX",
  region: "Southeast Texas",
  founded: 2009,
  hours: {
    display: "Mon–Fri: 8:00 AM – 4:30 PM",
    weekend: "Sat–Sun: Closed",
    schema: "Mo-Fr 08:00-16:30",
  },
  stats: {
    years: "15+",
    jobs: "1,200+",
    satisfaction: "98%",
    rating: "5.0",
  },
  social: {
    facebook: "https://www.facebook.com/TopNotchTX/",
    // VERIFY: exact Instagram URL.
    instagram: "https://www.instagram.com/",
  },
  responsePromise: "We respond to every estimate request within 24 hours.",
} as const;

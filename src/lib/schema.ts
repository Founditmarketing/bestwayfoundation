import { site } from "./site";
import { cities } from "./cities";
import type { Faq } from "./services";

/**
 * LocalBusiness JSON-LD for the whole site (rendered once in the root layout).
 * No street address is published — Top Notch is a service-area business.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: "+14093386602",
    email: site.email,
    foundingDate: String(site.founded),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nederland",
      addressRegion: "TX",
      postalCode: "77627",
      addressCountry: "US",
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, TX`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
    sameAs: [site.social.facebook],
    priceRange: "$$",
    knowsAbout: [
      "Seamless gutter installation",
      "Gutter cleaning",
      "Gutter guards",
      "Siding installation",
      "Siding repair",
      "Soffit repair",
      "Fascia repair",
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serialize schema for a <script type="application/ld+json"> tag. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data) };
}

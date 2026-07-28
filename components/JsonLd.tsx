import { site } from "@/lib/site";

/**
 * LocalBusiness structured data for local SEO.
 * NAP values come from lib/site.ts — update there, not here.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description:
      "Seamless gutter installation, replacement, gutter guards, repair, and downspouts for homeowners in Portland, TX and the Coastal Bend.",
    telephone: site.phone,
    email: site.email,
    url: "https://jseamlessgutters.com", // TODO: set the real production domain
    logo: "https://jseamlessgutters.com/logo.png",
    sameAs: [site.facebook],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    areaServed: site.serviceArea.map((town) => ({
      "@type": "City",
      name: `${town}, TX`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gutter Services",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

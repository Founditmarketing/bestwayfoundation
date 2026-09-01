/**
 * JSON-LD entity graph.
 *
 * Every page emits the business under the SAME `@id`, so search engines and
 * AI crawlers resolve one entity referenced from many pages rather than
 * twenty unrelated business descriptions. Page-specific nodes (Service,
 * FAQPage, BreadcrumbList) point back at that `@id` instead of restating it.
 */

import {
  ADDRESS,
  PRIMARY_CATEGORY,
  PRIMARY_SERVICE,
  SLOGAN,
  BUSINESS_NAME,
  BUSINESS_SHORT_NAME,
  EMAIL,
  FACEBOOK_URL,
  FOUNDED_YEAR,
  GEO,
  LOGO_URL,
  OPENING_HOURS,
  OWNER_NAME,
  PHONE_SCHEMA,
  SITE_URL,
  abs,
} from '../config/site';
import { locations } from '../data/locations';
import { services } from '../data/services';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const OWNER_ID = `${SITE_URL}/about#owner`;

const postalAddress = (locality: string = ADDRESS.locality) => ({
  '@type': 'PostalAddress',
  addressLocality: locality,
  addressRegion: ADDRESS.region,
  addressCountry: ADDRESS.country,
});

const openingHours = () => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: [...OPENING_HOURS.days],
  opens: OPENING_HOURS.opens,
  closes: OPENING_HOURS.closes,
});

/** Every city we serve, as `areaServed` City nodes with coordinates. */
const areaServed = () =>
  locations.map((l) => ({
    '@type': 'City',
    name: l.city,
    address: postalAddress(l.city),
    geo: { '@type': 'GeoCoordinates', latitude: l.geo.lat, longitude: l.geo.lng },
  }));

/**
 * The business node.
 *
 * `@type` stays on valid schema.org types. schema.org has no
 * ConcreteContractor class, so the concrete-contractor identity is carried by
 * the description, slogan, knowsAbout and the Service serviceType values
 * instead — the fields that actually align the site with the Google Business
 * Profile category. An invented type string, or an entity URI we have not
 * verified resolves, would be worse than saying it in plain fields.
 */
export const businessNode = () => ({
  '@type': ['GeneralContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: BUSINESS_SHORT_NAME,
  slogan: SLOGAN,
  description:
    'Second-generation concrete contractor specializing in foundation lifting and house leveling, with slab repair, pier and beam work and drainage across Longview and Deep East Texas.',
  url: `${SITE_URL}/`,
  telephone: PHONE_SCHEMA,
  email: EMAIL,
  image: LOGO_URL,
  logo: LOGO_URL,
  address: postalAddress(),
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_NAME}, Longview, TX`,
  )}`,
  openingHoursSpecification: openingHours(),
  foundingDate: String(FOUNDED_YEAR),
  founder: { '@id': OWNER_ID },
  priceRange: '$$',
  currenciesAccepted: 'USD',
  areaServed: areaServed(),
  knowsAbout: [
    PRIMARY_SERVICE,
    'House Leveling',
    'Concrete Piers',
    'Steel Press Piers',
    'Concrete Foundation Repair',
    'Slab Foundation Stabilization',
    'Pier and Beam Repair',
    'Foundation Drainage',
    'Expansive Clay Soil',
    PRIMARY_CATEGORY,
  ],
  sameAs: [FACEBOOK_URL],
  parentOrganization: { '@id': ORGANIZATION_ID },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Foundation Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        url: abs(s.path),
      },
    })),
  },
});

export const organizationNode = () => ({
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: BUSINESS_NAME,
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: LOGO_URL },
  telephone: PHONE_SCHEMA,
  email: EMAIL,
  address: postalAddress(),
  foundingDate: String(FOUNDED_YEAR),
  sameAs: [FACEBOOK_URL],
});

/**
 * WebSite node. Deliberately no `potentialAction`/SearchAction: the site has
 * no search endpoint, and Google retired the sitelinks searchbox in 2023, so
 * pointing SearchAction at a URL that does not exist would be a false claim
 * for a feature that no longer renders.
 */
export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: BUSINESS_NAME,
  inLanguage: 'en-US',
  publisher: { '@id': ORGANIZATION_ID },
});

export const ownerNode = () => ({
  '@type': 'Person',
  '@id': OWNER_ID,
  name: OWNER_NAME,
  jobTitle: 'Owner',
  worksFor: { '@id': BUSINESS_ID },
  knowsAbout: ['Foundation Repair', 'House Leveling', 'Pier and Beam Repair'],
  description: `${OWNER_NAME} is the second-generation owner of ${BUSINESS_NAME} and is on-site for every foundation repair the company performs.`,
});

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbNode = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${abs(crumbs[crumbs.length - 1].path)}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export const faqNode = (path: string, faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  '@id': `${abs(path)}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const webPageNode = (path: string, name: string, description: string) => ({
  '@type': 'WebPage',
  '@id': `${abs(path)}#webpage`,
  url: abs(path),
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': BUSINESS_ID },
  inLanguage: 'en-US',
});

export const serviceNode = (opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  areaName?: string;
  areaGeo?: { lat: number; lng: number };
}) => ({
  '@type': 'Service',
  '@id': `${abs(opts.path)}#service`,
  name: opts.name,
  serviceType: opts.serviceType,
  description: opts.description,
  url: abs(opts.path),
  provider: { '@id': BUSINESS_ID },
  areaServed: opts.areaName
    ? {
        '@type': 'City',
        name: opts.areaName,
        address: postalAddress(opts.areaName),
        ...(opts.areaGeo
          ? { geo: { '@type': 'GeoCoordinates', latitude: opts.areaGeo.lat, longitude: opts.areaGeo.lng } }
          : {}),
      }
    : { '@type': 'AdministrativeArea', name: 'Deep East Texas' },
});

/**
 * A location page's business node: same `@id` and identity, but with the
 * page's own URL and the single city it targets as `areaServed`, plus a map
 * link for that city.
 */
export const locationBusinessNode = (opts: {
  path: string;
  city: string;
  cityState: string;
  geo: { lat: number; lng: number };
  description: string;
}) => ({
  ...businessNode(),
  description: opts.description,
  areaServed: {
    '@type': 'City',
    name: opts.city,
    address: postalAddress(opts.city),
    geo: { '@type': 'GeoCoordinates', latitude: opts.geo.lat, longitude: opts.geo.lng },
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${BUSINESS_NAME}, ${opts.cityState}`,
  )}`,
});

/**
 * The nodes every page carries.
 *
 * Business, Organization, WebSite and the owner are referenced by `@id` from
 * Service, Article and breadcrumb nodes throughout the site, so each page
 * defines them rather than relying on a crawler having already seen the
 * homepage. It costs a few hundred bytes and makes every page's graph
 * resolvable on its own.
 */
export const baseNodes = () => [organizationNode(), websiteNode(), businessNode(), ownerNode()];

/** Wraps nodes into one `@graph` document — one script tag per page. */
export const graph = (nodes: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});

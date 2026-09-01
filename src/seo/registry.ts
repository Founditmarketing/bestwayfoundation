/**
 * The route registry — one source of truth for every indexable URL.
 *
 * Pages read from it at runtime (via useRouteSeo), the prerender script reads
 * from it at build time to emit real HTML per route, and the sitemap is
 * generated from it. Adding a route in one place therefore adds it to the
 * head, the prerendered output and the sitemap at once, which is what stops
 * the three drifting apart.
 */

import { BUSINESS_NAME, DEFAULT_OG_IMAGE, abs } from '../config/site';
import { locations } from '../data/locations';
import { services } from '../data/services';
import { guides } from '../data/guides';
import { homeFaqs } from '../data/homeFaqs';
import { galleryItems } from '../data/gallery';
import {
  BUSINESS_ID,
  WEBSITE_ID,
  baseNodes,
  breadcrumbNode,
  faqNode,
  graph,
  locationBusinessNode,
  serviceNode,
  webPageNode,
} from './schema';

export interface RouteSeo {
  /** Path only, always with a leading slash and no trailing slash (except '/') */
  path: string;
  title: string;
  description: string;
  ogImage: string;
  noIndex: boolean;
  /** A single schema.org @graph document */
  jsonLd: object;
  /** Sitemap hints */
  priority: number;
  changefreq: 'weekly' | 'monthly';
  lastmod?: string;
}

const BUILD_DATE = new Date().toISOString().slice(0, 10);

const crumbs = (...parts: [string, string][]) =>
  breadcrumbNode(parts.map(([name, path]) => ({ name, path })));

/* ------------------------------------------------------------------ core */

const home = (): RouteSeo => ({
  path: '/',
  title: 'Foundation Repair Longview TX | Best Way Foundation',
  description:
    'Foundation repair, house leveling, pier & beam and drainage across Deep East Texas. Free inspections, warranted work. Call (903) 932-8150.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 1.0,
  changefreq: 'weekly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    webPageNode('/', `${BUSINESS_NAME} — Foundation Repair in Longview, TX`,
      'Foundation repair, house leveling, pier and beam repair and drainage solutions across Deep East Texas.'),
    faqNode('/', homeFaqs),
  ]),
});

const about = (): RouteSeo => ({
  path: '/about',
  title: 'About Best Way Foundation Repair | Longview TX',
  description:
    'Second-generation, locally owned foundation repair serving Deep East Texas for over 25 years. Owner James Wilson on every job.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 0.6,
  changefreq: 'monthly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    webPageNode('/about', `About ${BUSINESS_NAME}`,
      'Second-generation, locally owned foundation repair serving Deep East Texas.'),
    crumbs(['Home', '/'], ['About', '/about']),
  ]),
});

const gallery = (): RouteSeo => ({
  path: '/gallery',
  title: 'Project Gallery | Best Way Foundation Repair',
  description:
    'Foundation repair, house leveling and pier & beam projects completed across Longview and Deep East Texas.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 0.5,
  changefreq: 'monthly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    {
      '@type': 'ImageGallery',
      '@id': `${abs('/gallery')}#gallery`,
      url: abs('/gallery'),
      name: 'Best Way Foundation Repair Project Gallery',
      description: 'Completed foundation repair, house leveling and pier and beam projects across Deep East Texas.',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      image: galleryItems.map((item) => ({
        '@type': 'ImageObject',
        contentUrl: abs(item.src),
        url: abs(item.src),
        name: item.title,
        caption: item.caption,
      })),
    },
    crumbs(['Home', '/'], ['Gallery', '/gallery']),
  ]),
});

const contact = (): RouteSeo => ({
  path: '/contact',
  title: 'Contact Best Way Foundation Repair | Longview TX',
  description:
    'Request a free foundation inspection anywhere in Deep East Texas. Call (903) 932-8150 or send a message — we respond quickly.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 0.7,
  changefreq: 'monthly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    webPageNode('/contact', `Contact ${BUSINESS_NAME}`, 'Request a free foundation inspection in Deep East Texas.'),
    crumbs(['Home', '/'], ['Contact', '/contact']),
  ]),
});

/* -------------------------------------------------------------- services */

const servicePages = (): RouteSeo[] =>
  services.map((s) => ({
    path: s.path,
    title: s.metaTitle,
    description: s.metaDescription,
    ogImage: abs(s.ogImage),
    noIndex: false,
    priority: 0.8,
    changefreq: 'weekly' as const,
    lastmod: BUILD_DATE,
    jsonLd: graph([
      ...baseNodes(),
      serviceNode({
        path: s.path,
        name: s.name,
        serviceType: s.serviceType,
        description: s.metaDescription,
      }),
      faqNode(s.path, s.faqs),
      webPageNode(s.path, s.name, s.metaDescription),
      crumbs(['Home', '/'], ['Services', '/services'], [s.name, s.path]),
    ]),
  }));

const servicesIndex = (): RouteSeo => ({
  path: '/services',
  title: 'Foundation Services in Deep East Texas | Best Way',
  description:
    'Foundation repair, house leveling, pier & beam repair and drainage solutions across Longview and Deep East Texas. Free inspections.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 0.8,
  changefreq: 'weekly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    webPageNode('/services', 'Foundation Services', 'All foundation services offered across Deep East Texas.'),
    {
      '@type': 'ItemList',
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.name,
        url: abs(s.path),
      })),
    },
    crumbs(['Home', '/'], ['Services', '/services']),
  ]),
});

/* ------------------------------------------------------------- locations */

const serviceAreasIndex = (): RouteSeo => ({
  path: '/service-areas',
  title: 'Service Areas | Best Way Foundation Repair',
  description:
    'Foundation repair across Longview, Kilgore, Tyler, Marshall, Nacogdoches, Lufkin and all of Deep East Texas. Free inspections.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 0.9,
  changefreq: 'weekly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    webPageNode('/service-areas', 'Service Areas', 'Cities and counties served across Deep East Texas.'),
    {
      '@type': 'ItemList',
      itemListElement: locations.map((l, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: l.cityState,
        url: abs(`/service-areas/${l.slug}`),
      })),
    },
    crumbs(['Home', '/'], ['Service Areas', '/service-areas']),
  ]),
});

const locationPages = (): RouteSeo[] =>
  locations.map((l) => {
    const path = `/service-areas/${l.slug}`;
    return {
      path,
      title: l.metaTitle,
      description: l.metaDescription,
      ogImage: DEFAULT_OG_IMAGE,
      noIndex: false,
      priority: 0.9,
      changefreq: 'weekly' as const,
      lastmod: BUILD_DATE,
      jsonLd: graph([
        ...baseNodes().filter((n) => (n as { '@id'?: string })['@id'] !== BUSINESS_ID),
        locationBusinessNode({
          path,
          city: l.city,
          cityState: l.cityState,
          geo: l.geo,
          description: l.metaDescription,
        }),
        webPageNode(path, `Foundation Repair in ${l.cityState}`, l.metaDescription),
        faqNode(path, l.faqs),
        crumbs(['Home', '/'], ['Service Areas', '/service-areas'], [l.cityState, path]),
      ]),
    };
  });

/* -------------------------------------------------- service x city pages */

export const serviceCityPath = (serviceSlug: string, citySlug: string) =>
  `/services/${serviceSlug}/${citySlug}`;

const serviceCityPages = (): RouteSeo[] =>
  services.flatMap((s) =>
    locations.map((l) => {
      const path = serviceCityPath(s.slug, l.slug);
      const description = `${s.name} in ${l.cityState} from a second-generation local crew. ${l.county}. Free inspections, warranted work. Call (903) 932-8150.`;
      return {
        path,
        title: `${s.cityLabel} in ${l.city}, TX | Best Way`,
        description: description.slice(0, 155),
        ogImage: abs(s.ogImage),
        noIndex: false,
        priority: 0.7,
        changefreq: 'monthly' as const,
        lastmod: BUILD_DATE,
        jsonLd: graph([
          ...baseNodes(),
          serviceNode({
            path,
            name: `${s.name} in ${l.cityState}`,
            serviceType: s.serviceType,
            description,
            areaName: l.city,
            areaGeo: l.geo,
          }),
          faqNode(path, s.faqs.slice(0, 6)),
          webPageNode(path, `${s.name} in ${l.cityState}`, description),
          crumbs(
            ['Home', '/'],
            ['Services', '/services'],
            [s.name, s.path],
            [l.cityState, path],
          ),
        ]),
      };
    }),
  );

/* ---------------------------------------------------------------- guides */

const guidesIndex = (): RouteSeo => ({
  path: '/guides',
  title: 'Foundation Guides | Best Way Foundation Repair',
  description:
    'Straight answers on foundation repair cost, slab vs pier and beam, pier systems and the warning signs that actually matter.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: false,
  priority: 0.7,
  changefreq: 'weekly',
  lastmod: BUILD_DATE,
  jsonLd: graph([
    ...baseNodes(),
    webPageNode('/guides', 'Foundation Guides', 'Guides to foundation repair in East Texas.'),
    {
      '@type': 'ItemList',
      itemListElement: guides.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: g.title,
        url: abs(g.path),
      })),
    },
    crumbs(['Home', '/'], ['Guides', '/guides']),
  ]),
});

const guidePages = (): RouteSeo[] =>
  guides.map((g) => ({
    path: g.path,
    title: g.metaTitle,
    description: g.metaDescription,
    ogImage: abs(g.ogImage),
    noIndex: false,
    priority: 0.7,
    changefreq: 'monthly' as const,
    lastmod: g.published,
    jsonLd: graph([
      ...baseNodes(),
      {
        '@type': 'Article',
        '@id': `${abs(g.path)}#article`,
        headline: g.title,
        description: g.metaDescription,
        image: abs(g.heroImage),
        datePublished: g.published,
        dateModified: g.published,
        author: { '@id': `${abs('/')}#organization` },
        publisher: { '@id': `${abs('/')}#organization` },
        mainEntityOfPage: abs(g.path),
        about: { '@id': `${abs('/')}#business` },
      },
      faqNode(g.path, g.faqs),
      crumbs(['Home', '/'], ['Guides', '/guides'], [g.title, g.path]),
    ]),
  }));

/* ----------------------------------------------------------------- index */

/** Every indexable route on the site, in sitemap order. */
export const routes: RouteSeo[] = [
  home(),
  servicesIndex(),
  ...servicePages(),
  serviceAreasIndex(),
  ...locationPages(),
  ...serviceCityPages(),
  guidesIndex(),
  ...guidePages(),
  about(),
  contact(),
  gallery(),
];

const byPath = new Map(routes.map((r) => [r.path, r]));

/** Fallback used for any route not in the registry (the 404 page). */
export const notFoundSeo: RouteSeo = {
  path: '/404',
  title: 'Page Not Found | Best Way Foundation Repair',
  description: 'That page does not exist. Browse our foundation services and East Texas service areas.',
  ogImage: DEFAULT_OG_IMAGE,
  noIndex: true,
  priority: 0,
  changefreq: 'monthly',
  jsonLd: graph(baseNodes()),
};

/** Normalises a pathname and looks it up. Returns null when unknown. */
export const getSeo = (pathname: string): RouteSeo | null => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return byPath.get(clean) ?? null;
};

/** Routes that belong in sitemap.xml — everything indexable. */
export const indexableRoutes = (): RouteSeo[] => routes.filter((r) => !r.noIndex);

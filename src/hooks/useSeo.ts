import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../config/site';
import { getSeo, notFoundSeo, type RouteSeo } from '../seo/registry';

/**
 * Document-head manager.
 *
 * Every route is prerendered with its real head already in the HTML, so this
 * hook exists for client-side navigation: it rewrites the same tags in place
 * rather than appending new ones, which is what previously produced duplicate
 * og: tags and a stale canonical.
 */

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const removeMeta = (attr: 'name' | 'property', key: string) => {
  document.head.querySelectorAll(`meta[${attr}="${key}"]`).forEach((el) => el.remove());
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/** Writes a full RouteSeo payload into the document head. */
export const applySeo = (seo: RouteSeo) => {
  const canonical = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;

  document.title = seo.title;
  upsertMeta('name', 'description', seo.description);
  upsertLink('canonical', canonical);

  upsertMeta('property', 'og:title', seo.title);
  upsertMeta('property', 'og:description', seo.description);
  upsertMeta('property', 'og:url', canonical);
  upsertMeta('property', 'og:image', seo.ogImage);
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:site_name', 'Best Way Foundation Repair');
  upsertMeta('property', 'og:locale', 'en_US');

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', seo.title);
  upsertMeta('name', 'twitter:description', seo.description);
  upsertMeta('name', 'twitter:image', seo.ogImage);

  if (seo.noIndex) {
    upsertMeta('name', 'robots', 'noindex, nofollow');
  } else {
    removeMeta('name', 'robots');
  }

  // Replace, never append — otherwise every navigation stacks another graph.
  document.head.querySelectorAll('script[data-seo="route"]').forEach((el) => el.remove());
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.seo = 'route';
  script.textContent = JSON.stringify(seo.jsonLd);
  document.head.appendChild(script);
};

/**
 * Reads the current route from the registry and applies it. Called once from
 * Layout so no page can ship without SEO, and so route data cannot drift from
 * what the prerender and the sitemap emit.
 */
export default function useRouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeo(getSeo(pathname) ?? notFoundSeo);
  }, [pathname]);
}

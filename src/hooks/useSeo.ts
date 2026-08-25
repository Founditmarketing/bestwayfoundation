import { useEffect } from 'react';

const DEFAULT_TITLE = 'Best Way Foundation Repair LLC';
const DEFAULT_DESCRIPTION =
  'Providing dependable foundation repair and house leveling services across Deep East Texas for over 25 years.';

interface SeoOptions {
  title: string;
  description: string;
  /** Path only, e.g. "/service-areas/kilgore-tx" */
  canonicalPath?: string;
  /** Structured data objects injected as application/ld+json */
  jsonLd?: unknown[];
}

const setMeta = (selector: string, create: () => HTMLMetaElement, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const metaByName = (name: string) => () => {
  const el = document.createElement('meta');
  el.setAttribute('name', name);
  return el;
};

const metaByProperty = (property: string) => () => {
  const el = document.createElement('meta');
  el.setAttribute('property', property);
  return el;
};

/**
 * Lightweight document-head manager. Keeps the site free of an extra
 * dependency while giving each route its own title, description, canonical
 * URL and structured data.
 */
export default function useSeo({ title, description, canonicalPath, jsonLd }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', metaByName('description'), description);
    setMeta('meta[property="og:title"]', metaByProperty('og:title'), title);
    setMeta('meta[property="og:description"]', metaByProperty('og:description'), description);
    setMeta('meta[property="og:type"]', metaByProperty('og:type'), 'website');

    let canonical: HTMLLinkElement | null = null;
    if (canonicalPath) {
      const href = `${window.location.origin}${canonicalPath}`;
      canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', href);
      setMeta('meta[property="og:url"]', metaByProperty('og:url'), href);
    }

    const scripts = (jsonLd ?? []).map((data) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = 'route';
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => script.remove());
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', metaByName('description'), DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:title"]', metaByProperty('og:title'), DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', metaByProperty('og:description'), DEFAULT_DESCRIPTION);
      if (canonical) {
        canonical.remove();
      }
      document.head.querySelector('meta[property="og:url"]')?.remove();
    };
    // jsonLd is a literal rebuilt each render; the title/description pair is a
    // sufficient identity for when the head needs rewriting.
  }, [title, description, canonicalPath]);
}

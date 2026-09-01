import React from 'react';
import { imageMeta } from '../data/imageMeta';

interface ImgProps {
  /** Canonical path, e.g. "/img/press-piers-installation.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** Layout hint for srcset selection. Defaults to full viewport width. */
  sizes?: string;
  /**
   * Set on the LCP image of a page only — it opts out of lazy loading and
   * asks the browser to fetch it first. Everything else stays lazy.
   */
  priority?: boolean;
}

/**
 * Every image on the site goes through here.
 *
 * It guarantees the three things that were missing site-wide: intrinsic
 * width/height (so the browser reserves space and the page stops shifting),
 * lazy loading below the fold, and a WebP source with a responsive srcset so
 * a phone never downloads the 1600px desktop hero.
 */
export default function Img({ src, alt, className, sizes = '100vw', priority = false }: ImgProps) {
  const meta = imageMeta[src];

  // An asset we have no metadata for still renders; it just misses the
  // optimisations rather than breaking the page.
  if (!meta) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }

  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : undefined;

  if (!meta.widths) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={meta.w}
        height={meta.h}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    );
  }

  const largest = meta.widths[meta.widths.length - 1];
  const srcset = (ext: string) =>
    meta.widths!.map((w) => `/img/${meta.stem}-${w}w${ext} ${w}w`).join(', ');

  return (
    <picture style={{ display: 'contents' }}>
      <source type="image/webp" srcSet={srcset('.webp')} sizes={sizes} />
      <img
        src={`/img/${meta.stem}-${largest}w${meta.ext}`}
        srcSet={srcset(meta.ext)}
        sizes={sizes}
        alt={alt}
        className={className}
        width={meta.w}
        height={meta.h}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}

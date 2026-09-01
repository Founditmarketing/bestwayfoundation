import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';
import { getSeo, notFoundSeo, routes, type RouteSeo } from './seo/registry';

export { routes };

/**
 * Renders one route to HTML for the prerender step.
 *
 * Deliberately renders AppRoutes rather than App: <Analytics /> is a
 * browser-only concern and has no business in the static output.
 */
export function render(url: string): { html: string; seo: RouteSeo } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );

  return { html, seo: getSeo(url) ?? notFoundSeo };
}

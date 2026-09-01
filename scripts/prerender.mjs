/**
 * Static prerender.
 *
 * The audit's critical finding was that every page of this site served an
 * empty <div id="root"> with one generic title. Googlebot renders JavaScript
 * and gets there eventually; GPTBot, ClaudeBot, PerplexityBot and Bingbot
 * largely do not, so to them all 88 routes were the same blank document.
 *
 * This step renders every route to real HTML at build time — head tags, body
 * copy, JSON-LD, all of it — and writes dist/<route>/index.html. Vercel serves
 * the static file (filesystem is matched before the SPA rewrite) and the
 * client bundle hydrates over it, so users still get a single-page app.
 *
 * Runs after `vite build` and `vite build --ssr`. See package.json.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR_ENTRY = path.resolve('dist-ssr/entry-server.js');
const SITE_URL = 'https://www.bestwayfoundation.com';

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * JSON-LD goes inside a <script> element, so the only sequence that can break
 * out of it is a literal "</script". Escaping the forward slash keeps the JSON
 * valid while making that impossible.
 */
const escapeJsonLd = (obj) =>
  JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');

function buildHead(seo) {
  const canonical = `${SITE_URL}${seo.path === '/' ? '/' : seo.path}`;
  const t = escapeAttr(seo.title);
  const d = escapeAttr(seo.description);
  const img = escapeAttr(seo.ogImage);

  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    seo.noIndex ? `<meta name="robots" content="noindex, nofollow" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Best Way Foundation Repair" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script type="application/ld+json" data-seo="route">${escapeJsonLd(seo.jsonLd)}</script>`,
  ]
    .filter(Boolean)
    .join('\n    ');
}

/**
 * React 19 emits hoistable resources (<link rel="preload"> for priority
 * images) inline in the renderToString output, but on the client it hoists
 * them into <head>. Left in place that is a guaranteed hydration mismatch —
 * and a preload in <head> is discovered earlier anyway, so we move them.
 */
function liftHoistables(appHtml) {
  const links = [];
  const body = appHtml.replace(/<link\b[^>]*rel="(?:preload|preconnect|stylesheet)"[^>]*\/?>/g, (tag) => {
    links.push(tag);
    return '';
  });
  return { body, links };
}

/** Swaps the dev-default head block in index.html for this route's real head. */
function renderDocument(template, seo, rawAppHtml) {
  const { body: appHtml, links } = liftHoistables(rawAppHtml);
  let out = template;

  // Drop the placeholder tags the template carries for the dev server.
  out = out.replace(/<title>[\s\S]*?<\/title>\n?\s*/, '');
  out = out.replace(/\s*<meta name="description"[^>]*\/>\n?/, '');
  out = out.replace(/\s*<link rel="canonical"[^>]*\/>\n?/, '');
  out = out.replace(/\s*<!--[\s\S]*?prerender\.mjs[\s\S]*?-->\n?/, '');

  const hoisted = links.length ? `${links.join('\n    ')}\n    ` : '';
  out = out.replace('</head>', `  ${hoisted}${buildHead(seo)}\n  </head>`);
  out = out.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerendered="true">${appHtml}</div>`,
  );
  return out;
}

async function main() {
  const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
  const { render, routes } = await import(pathToFileURL(SSR_ENTRY).href);

  let written = 0;
  for (const route of routes) {
    const { html, seo } = render(route.path);
    const doc = renderDocument(template, seo, html);

    const dir = route.path === '/' ? DIST : path.join(DIST, route.path);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, 'index.html'), doc, 'utf8');
    written += 1;
  }

  // A real 404 document. Vercel serves dist/404.html for unmatched paths.
  const notFound = await import(pathToFileURL(SSR_ENTRY).href).then((m) => m.render('/__not-found__'));
  await fs.writeFile(
    path.join(DIST, '404.html'),
    renderDocument(template, notFound.seo, notFound.html),
    'utf8',
  );

  console.log(`prerendered ${written} routes + 404.html`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

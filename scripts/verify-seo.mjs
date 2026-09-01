/**
 * SOP Phase 4 verification, run against the built output.
 *
 * Checks the things the audit found broken, so a regression fails the build
 * rather than reaching production: every route prerendered with a unique
 * title, a correct canonical, valid JSON-LD, real body content, and no
 * oversize meta.
 *
 * Run with: npm run verify (after npm run build)
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';
const SITE_URL = 'https://www.bestwayfoundation.com';
const MAX_TITLE = 60;
const MAX_DESC = 155;

const failures = [];
const warnings = [];

const fail = (msg) => failures.push(msg);
const warn = (msg) => warnings.push(msg);

const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : null;
};

async function walk(dir, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(p, out);
    else if (entry.name === 'index.html') out.push(p);
  }
  return out;
}

async function main() {
  const files = await walk(DIST);
  const titles = new Map();
  const descs = new Map();
  let checked = 0;

  for (const file of files) {
    const html = await fs.readFile(file, 'utf8');
    const route = '/' + path.relative(DIST, path.dirname(file)).split(path.sep).filter(Boolean).join('/');
    checked += 1;

    // --- title
    const title = attr(html, /<title>([\s\S]*?)<\/title>/);
    if (!title) fail(`${route}: no <title>`);
    else {
      if (title.length > MAX_TITLE) fail(`${route}: title ${title.length} chars (max ${MAX_TITLE}) — "${title}"`);
      if (titles.has(title)) fail(`${route}: duplicate title, also on ${titles.get(title)}`);
      titles.set(title, route);
    }
    if ((html.match(/<title>/g) || []).length > 1) fail(`${route}: more than one <title>`);

    // --- description
    const desc = attr(html, /<meta name="description" content="([^"]*)"/);
    if (!desc) fail(`${route}: no meta description`);
    else {
      if (desc.length > MAX_DESC + 10) fail(`${route}: description ${desc.length} chars (max ${MAX_DESC})`);
      if (descs.has(desc)) fail(`${route}: duplicate description, also on ${descs.get(desc)}`);
      descs.set(desc, route);
    }
    if ((html.match(/<meta name="description"/g) || []).length > 1)
      fail(`${route}: duplicate meta description tag`);

    // --- canonical
    const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
    const expected = `${SITE_URL}${route === '/' ? '/' : route}`;
    if (!canonical) fail(`${route}: no canonical`);
    else if (canonical !== expected) fail(`${route}: canonical is ${canonical}, expected ${expected}`);
    if ((html.match(/rel="canonical"/g) || []).length > 1) fail(`${route}: duplicate canonical`);

    // --- open graph / twitter
    for (const tag of ['og:title', 'og:description', 'og:url', 'og:image']) {
      const count = (html.match(new RegExp(`property="${tag}"`, 'g')) || []).length;
      if (count === 0) fail(`${route}: missing ${tag}`);
      if (count > 1) fail(`${route}: duplicate ${tag}`);
    }
    if (!html.includes('name="twitter:card"')) fail(`${route}: missing twitter:card`);
    const ogImage = attr(html, /property="og:image" content="([^"]*)"/);
    if (ogImage && !ogImage.startsWith('http')) fail(`${route}: og:image is not absolute`);

    // --- JSON-LD parses and carries the shared business @id
    const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    if (blocks.length === 0) fail(`${route}: no JSON-LD`);
    if (blocks.length > 1) fail(`${route}: ${blocks.length} JSON-LD blocks, expected 1`);
    for (const [, raw] of blocks) {
      try {
        const data = JSON.parse(raw);
        const graph = data['@graph'] ?? [];
        if (!Array.isArray(graph) || graph.length === 0) fail(`${route}: JSON-LD has no @graph nodes`);
        const ids = graph.map((n) => n['@id']).filter(Boolean);
        if (!ids.some((id) => id === `${SITE_URL}/#business`))
          warn(`${route}: no business @id in the graph`);
      } catch (err) {
        fail(`${route}: JSON-LD does not parse — ${err.message}`);
      }
    }

    // --- real prerendered content, not an empty shell
    const rootIdx = html.indexOf('<div id="root"');
    if (rootIdx === -1 || !html.includes('data-prerendered="true"')) {
      fail(`${route}: not prerendered`);
    } else {
      const body = html.slice(rootIdx, html.lastIndexOf('</body>'));
      const text = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
      const words = text.split(/\s+/).filter(Boolean).length;
      if (words < 250) fail(`${route}: only ${words} words of prerendered text`);
    }

    // --- images carry dimensions and lazy loading
    const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
    for (const img of imgs) {
      if (!/\bwidth="/.test(img) || !/\bheight="/.test(img))
        fail(`${route}: <img> without width/height — ${img.slice(0, 90)}`);
      if (!/loading="(lazy|eager)"/.test(img))
        fail(`${route}: <img> without loading attribute — ${img.slice(0, 90)}`);
    }

    // --- exactly one h1
    const h1s = (html.match(/<h1\b/g) || []).length;
    if (h1s !== 1) fail(`${route}: ${h1s} <h1> elements, expected 1`);
  }

  // --- static files
  for (const f of ['sitemap.xml', 'robots.txt', '404.html', 'favicon-32.png']) {
    try {
      await fs.access(path.join(DIST, f));
    } catch {
      fail(`missing ${f} in dist/`);
    }
  }

  const sitemap = await fs.readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const routesOnDisk = files
    .map((f) => '/' + path.relative(DIST, path.dirname(f)).split(path.sep).filter(Boolean).join('/'))
    .sort();
  for (const loc of locs) {
    const p = loc.replace(SITE_URL, '') || '/';
    if (!routesOnDisk.includes(p === '' ? '/' : p)) fail(`sitemap lists ${loc} but no page was prerendered`);
  }
  if (!sitemap.includes('<lastmod>')) fail('sitemap has no lastmod dates');

  console.log(`\nverified ${checked} prerendered routes, ${locs.length} sitemap urls`);
  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    warnings.slice(0, 20).forEach((w) => console.log(`  ! ${w}`));
  }
  if (failures.length) {
    console.error(`\n${failures.length} FAILURE(S):`);
    failures.slice(0, 40).forEach((f) => console.error(`  x ${f}`));
    process.exit(1);
  }
  console.log('all checks passed\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

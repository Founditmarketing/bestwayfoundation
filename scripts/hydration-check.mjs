// Verifies the prerendered HTML hydrates cleanly and that client-side
// navigation rewrites the head instead of stacking duplicate tags.
// Requires: node serve-static.mjs running on 4173, and a dist built with the
// development React bundle so mismatch messages are readable.
import { chromium } from 'playwright';

const BASE = 'http://localhost:4173';
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/house-leveling',
  '/service-areas/tyler-tx',
  '/service-areas/longview-tx',
  '/services/pier-and-beam/nacogdoches-tx',
  '/services/drainage-solutions/lufkin-tx',
  '/guides',
  '/guides/slab-vs-pier-and-beam',
  '/gallery',
  '/contact',
  '/nope',
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let bad = 0;

for (const route of ROUTES) {
  const page = await browser.newPage();
  const logs = [];
  page.on('console', (m) => logs.push(m.text()));
  page.on('pageerror', (e) => logs.push(`pageerror: ${e.message}`));
  // Third-party hosts are unreachable in this sandbox; blocking them keeps
  // their connection errors out of the signal we care about.
  for (const h of ['founditos.com', 'www.google.com', 'fonts.googleapis.com', 'vitals.vercel-insights.com'])
    await page.route(`**://${h}/**`, (r) => r.abort());

  await page.goto(BASE + route, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  const mismatches = logs.filter((m) => /hydrat|did not match|mismatch/i.test(m));
  const h1 = await page.locator('h1').count();
  const ld = await page.locator('script[data-seo="route"]').count();

  if (mismatches.length || h1 !== 1 || ld !== 1) {
    bad += 1;
    console.log(`FAIL ${route}  h1=${h1} ld=${ld}`);
    if (mismatches[0]) console.log(mismatches[0].slice(-1400));
  } else {
    console.log(`ok   ${route}`);
  }
  await page.close();
}

// Client-side navigation must replace head tags, not append.
const page = await browser.newPage();
await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1200);
const before = await page.title();
// Use the footer link: the header dropdown is hidden until hover.
await page.locator('footer a[href="/services/house-leveling"]').first().scrollIntoViewIfNeeded();
await page.locator('footer a[href="/services/house-leveling"]').first().click();
await page.waitForTimeout(1000);
const after = await page.title();
const counts = {
  canonical: await page.locator('link[rel=canonical]').count(),
  ogTitle: await page.locator('meta[property="og:title"]').count(),
  ogUrl: await page.locator('meta[property="og:url"]').count(),
  jsonLd: await page.locator('script[data-seo="route"]').count(),
};
const canonicalHref = await page.getAttribute('link[rel=canonical]', 'href');
console.log(`\nclient nav: "${before}"\n         -> "${after}"`);
console.log(`  canonical now: ${canonicalHref}`);
console.log(`  tag counts: ${JSON.stringify(counts)} (each should be 1)`);
if (before === after || Object.values(counts).some((c) => c !== 1)) bad += 1;
if (canonicalHref !== 'https://www.bestwayfoundation.com/services/house-leveling') bad += 1;

await browser.close();
console.log(bad ? `\n${bad} PROBLEM(S)` : '\nall browser checks passed');
process.exit(bad ? 1 : 0);

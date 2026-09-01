// Proves a submitted form actually produces a lead POST, and that the page
// does not reload and wipe the visitor's input.
//
// This is the check that would have caught the original bug: three of the four
// forms had no `name` attributes, so the Found It embed serialised them to {}
// and sent nothing, while the browser did a native GET submit that cleared the
// form and looked like success.
//
// Requires: `npm run serve:dist` on 4173, and playwright installed locally
// (see README — it is deliberately not a devDependency).
let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('playwright is not installed.\n  npm i -D playwright && npx playwright install chromium');
  process.exit(1);
}

const BASE = 'http://localhost:4173';
const PAGES = [
  { url: '/contact', prefix: 'contact' },
  { url: '/', prefix: 'home' },
  { url: '/service-areas/tyler-tx', prefix: 'tyler-tx' },
];

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let failures = 0;

for (const { url, prefix } of PAGES) {
  const page = await browser.newPage();
  const posted = [];

  // Stand in for the real embed: capture-phase submit listener that serialises
  // with FormData, exactly as the Found It script does.
  await page.addInitScript(() => {
    window.__leads = [];
    document.addEventListener(
      'submit',
      (e) => {
        const fields = {};
        new FormData(e.target).forEach((v, k) => {
          fields[k] = v;
        });
        window.__leads.push(fields);
      },
      true,
    );
  });
  let watchNav = false;
  page.on('framenavigated', (f) => {
    if (watchNav && f === page.mainFrame()) posted.push(f.url());
  });
  for (const h of ['founditos.com', 'www.google.com', 'fonts.googleapis.com'])
    await page.route(`**://${h}/**`, (r) => r.abort());

  await page.goto(BASE + url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);

  const form = page.locator('form').first();
  await form.scrollIntoViewIfNeeded();
  await page.fill(`#${prefix}-first`, 'Dale').catch(async () => {
    await page.fill(`#${prefix}-name`, 'Dale Whitfield');
  });
  await page.fill(`#${prefix}-last`, 'Whitfield').catch(() => {});
  await page.fill(`#${prefix}-email`, 'dale@example.com');
  await page.fill(`#${prefix}-phone`, '9035550147');
  await page.selectOption(`#${prefix}-service`, 'house-leveling');
  await page.fill(`#${prefix}-message`, 'Floor slopes toward the back corner.').catch(() => {});

  const before = page.url();
  watchNav = true; // only count navigations caused by the submit itself
  await form.locator('button[type=submit]').click();
  await page.waitForTimeout(900);

  const leads = await page.evaluate(() => window.__leads);
  const lead = leads[0] ?? {};
  const keys = Object.keys(lead);
  const looksLikeLead = keys.some((k) => /email|phone|tel|message|name/i.test(k));
  const reloaded = page.url() !== before || posted.length > 0;
  const confirmed = await page.locator('text=Request Received').count();

  const ok = keys.length > 0 && looksLikeLead && !reloaded && confirmed === 1;
  if (!ok) failures += 1;

  console.log(`${ok ? 'ok  ' : 'FAIL'} ${url}`);
  console.log(`      fields captured : ${keys.length ? keys.join(', ') : '(none — the lead would be lost)'}`);
  console.log(`      classified lead : ${looksLikeLead}`);
  console.log(`      page reloaded   : ${reloaded}${posted.length ? ` (${posted.join(', ')})` : ''}`);
  console.log(`      confirmation UI : ${confirmed === 1}`);
  await page.close();
}

await browser.close();
console.log(failures ? `\n${failures} form(s) still losing leads` : '\nevery form captures a complete lead');
process.exit(failures ? 1 : 0);

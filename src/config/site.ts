/**
 * Single source of truth for the canonical domain, NAP and business facts.
 *
 * Nothing in the app may derive a URL from `window.location` — prerendered
 * pages are built in Node where there is no window, and a canonical that
 * changes with the host is the classic SPA canonical bug. Import SITE_URL.
 */

/** Canonical origin. No trailing slash. */
export const SITE_URL = 'https://www.bestwayfoundation.com';

export const BUSINESS_NAME = 'Best Way Foundation Repair LLC';
export const BUSINESS_SHORT_NAME = 'Best Way Foundation Repair';

/**
 * Positioning.
 *
 * James is listed as a concrete contractor and the work he actually focuses on
 * is foundation lifting. The site leads with both: the trade he is categorized
 * under, and the job he does most. "House leveling" stays prominent alongside
 * "foundation lifting" because it is the term East Texas homeowners search.
 */
export const PRIMARY_CATEGORY = 'Concrete Contractor';
export const PRIMARY_SERVICE = 'Foundation Lifting';
export const SLOGAN = 'Concrete foundation lifting, done the best way.';
export const POSITIONING =
  'Concrete contractor specializing in foundation lifting and house leveling across Deep East Texas.';

export const PHONE_DISPLAY = '(903) 932-8150';
export const PHONE_HREF = 'tel:9039328150';
export const PHONE_SCHEMA = '+1-903-932-8150';

export const EMAIL = 'bestwayfoundationrepair936@gmail.com';

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61589371986773';

/**
 * Best Way is a service-area business: one Longview base, crews that travel.
 * Per Google's guidelines we publish one address and express coverage through
 * `areaServed` rather than inventing a branch address per city.
 *
 * TODO(client): supply streetAddress + postalCode. Until then the schema
 * omits them rather than publishing a placeholder, which would be worse than
 * leaving them out.
 */
export const ADDRESS = {
  locality: 'Longview',
  region: 'TX',
  country: 'US',
} as const;

/** Longview, TX. Used for the business geo node. */
export const GEO = { lat: 32.5007, lng: -94.7405 } as const;

export const FOUNDED_YEAR = 2000;
export const YEARS_IN_BUSINESS = new Date().getFullYear() - FOUNDED_YEAR;

export const OWNER_NAME = 'James Wilson';

export const OPENING_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '18:00',
} as const;

/** Default social share image. Absolute URL, 1200x630. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/social/og-default.jpg`;

export const LOGO_URL = `${SITE_URL}/img/best-way-foundation-repair-logo.png`;

/** Absolute URL helper. Accepts a path with or without a leading slash. */
export const abs = (path: string): string =>
  path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

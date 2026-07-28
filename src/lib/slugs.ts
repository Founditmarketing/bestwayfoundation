import { services, type Service } from "./services";
import { cities, type City } from "./cities";

export type SlugEntry =
  | { kind: "hub"; service: Service }
  | { kind: "city"; service: Service; city: City };

/**
 * Flat-slug routing table matching the original site's URL structure:
 *   /gutter-cleaning                          → service hub page
 *   /seamless-gutter-installation-vidor-tx    → service × city landing page
 */
const table = new Map<string, SlugEntry>();

for (const service of services) {
  if (service.hasHubPage) {
    table.set(service.slug, { kind: "hub", service });
  }
  for (const city of cities) {
    table.set(`${service.slug}-${city.slug}-tx`, { kind: "city", service, city });
  }
}

export const allServiceSlugs = [...table.keys()];

export const lookupSlug = (slug: string) => table.get(slug);

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '../data/locations';

/**
 * Service pages link out to every city we serve.
 *
 * The site previously linked cities -> services and never the other way, so
 * the four highest-value commercial pages passed no equity to the fifteen
 * local ones. `serviceSlug` points the links at the service x city page.
 */
export default function CityLinks({
  serviceSlug,
  serviceName,
  heading,
}: {
  serviceSlug?: string;
  serviceName?: string;
  heading?: React.ReactNode;
}) {
  const href = (slug: string) =>
    serviceSlug ? `/services/${serviceSlug}/${slug}` : `/service-areas/${slug}`;

  return (
    <section className="bg-gray-50 py-16 md:py-20 border-y border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Where We Work</div>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
            {heading ?? (
              <>
                {serviceName ?? 'Foundation Repair'} Across{' '}
                <span className="text-jac-lime">Deep East Texas</span>
              </>
            )}
          </h2>
          <div className="section-divider mt-5 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to={href(l.slug)}
              className="group bg-white border border-gray-200 border-l-4 border-l-jac-lime rounded-lg px-4 py-3 flex items-center justify-between gap-2 hover:shadow-md hover:border-l-jac-green transition-all"
            >
              <span className="flex items-center gap-2 text-sm font-bold text-jac-green">
                <MapPin className="w-4 h-4 text-jac-lime shrink-0" />
                {l.cityState}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-jac-lime group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-sm hover:text-jac-lime transition-colors"
          >
            View all service areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

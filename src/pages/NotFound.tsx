import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { PHONE_DISPLAY, PHONE_HREF } from '../config/site';

/**
 * Real 404 page.
 *
 * Previously an unmatched URL rendered nothing at all while still returning
 * HTTP 200 — a soft 404 Google can index. This gives the visitor a way out
 * and is marked noindex via the route registry.
 */
export default function NotFound() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <div className="font-display text-6xl md:text-8xl text-jac-lime mb-4">404</div>
        <h1 className="font-display text-3xl md:text-4xl uppercase text-jac-green mb-4">
          That Page Does Not Exist
        </h1>
        <div className="section-divider mt-5 mb-8 mx-auto"></div>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          The link may be out of date. Here is everything else on the site — or call and we will just
          tell you what you needed to know.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={s.path}
              className="bg-gray-50 border border-gray-200 border-l-4 border-l-jac-lime rounded-lg px-5 py-4 flex items-center justify-between gap-3 hover:shadow-md transition-all"
            >
              <span className="font-bold text-jac-green">{s.name}</span>
              <ArrowRight className="w-4 h-4 text-jac-lime shrink-0" />
            </Link>
          ))}
        </div>

        <h2 className="font-display text-xl uppercase text-jac-green mb-5">Service Areas</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to={`/service-areas/${l.slug}`}
              className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-bold text-jac-green hover:border-jac-lime transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-jac-lime" /> {l.cityState}
            </Link>
          ))}
        </div>

        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-3 bg-jac-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-jac-lime hover:text-jac-green transition-colors"
        >
          <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}

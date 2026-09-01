import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2, ChevronRight, TriangleAlert, Wrench } from 'lucide-react';
import Img from './Img';
import FaqAccordion from './FaqAccordion';
import CityLinks from './CityLinks';
import { PHONE_DISPLAY, PHONE_HREF } from '../config/site';
import { getOtherServices, type Service } from '../data/services';
import { getOtherLocations, type Location } from '../data/locations';

/**
 * Renders both /services/:slug and /services/:slug/:city.
 *
 * When `location` is supplied the page gains the local context — county, soil
 * behavior, nearby communities — that made the city pages strong, so the
 * service x city combinations are genuinely distinct pages rather than the
 * same copy with a place name swapped in.
 */
export default function ServiceTemplate({
  service,
  location,
}: {
  service: Service;
  location?: Location;
}) {
  const otherServices = getOtherServices(service.slug);
  const nearbyCities = location ? getOtherLocations(location.slug).slice(0, 8) : [];
  const heading = location ? `${service.name} in ${location.cityState}` : service.name;

  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src={service.heroImage}
            alt={`${service.name} work by Best Way Foundation Repair${location ? ` in ${location.cityState}` : ' in East Texas'}`}
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-6 flex-wrap"
          >
            <Link to="/" className="hover:text-jac-lime transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-jac-lime transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            {location ? (
              <>
                <Link to={service.path} className="hover:text-jac-lime transition-colors">{service.name}</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-jac-lime">{location.cityState}</span>
              </>
            ) : (
              <span className="text-jac-lime">{service.name}</span>
            )}
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-[1.05] mb-4">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-jac-lime font-bold uppercase tracking-widest mb-6">
              {service.tagline}
            </p>
            <p className="text-white/90 leading-relaxed text-lg mb-8 max-w-2xl">
              {location
                ? `Best Way Foundation Repair has been handling ${service.cityAngle} across ${location.county} for over 25 years. ${location.distance}. Free inspections, warranted work, and owner James Wilson on site.`
                : `Second-generation, locally owned, and on site for every job across Deep East Texas. Free inspections, written pricing and warranted work.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-lg"
              >
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-jac-green transition-colors"
              >
                <Phone className="w-4 h-4 text-jac-lime" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + local context */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">
              {location ? `Serving ${location.city}` : 'Our Services'}
            </div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green mb-4">
              {location ? `Why ${location.city} Homes Need This Work` : `About ${service.name}`}
            </h2>
            <div className="section-divider mb-8"></div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {service.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}

              {location && (
                <>
                  <h3 className="font-display text-2xl uppercase text-jac-green pt-4">
                    What Moves Foundations in {location.county}
                  </h3>
                  {location.localFactors.map((f) => (
                    <p key={f.title}>
                      <strong className="text-jac-charcoal">{f.title}.</strong> {f.desc}
                    </p>
                  ))}
                  <p>
                    We cover {location.city} and the surrounding communities —{' '}
                    {location.nearby.slice(0, 6).join(', ')} — and there is no travel charge for the
                    inspection.
                  </p>
                </>
              )}
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 flex items-center justify-center">
              <Img
                src={service.icon}
                alt={`${service.name} icon`}
                sizes="220px"
                className="w-full max-w-[220px] h-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 border-t-4 border-t-jac-lime border border-gray-200 rounded-lg p-8">
              <h3 className="font-display text-xl uppercase text-jac-green mb-5">Every Job Includes</h3>
              <ul className="space-y-3">
                {[
                  'Free, no-obligation inspection',
                  'Elevation readings in writing',
                  'Direct owner oversight on-site',
                  'Engineering-approved materials',
                  'Transparent, written pricing',
                  'Warranted work you can rely on',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-jac-green py-16 md:py-20 border-y-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">Know The Signs</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-white mb-4">
              When You Need {service.name}
            </h2>
            <div className="section-divider mb-6"></div>
            <p className="text-white/85 leading-relaxed mb-8">
              Foundation problems do not resolve themselves, and the number of piers a house needs grows
              the longer it keeps moving. If any of this sounds like your {location ? location.city : 'East Texas'}{' '}
              home, have it measured while it is still small — the inspection costs nothing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-md"
            >
              Get My Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.symptoms.map((sign) => (
              <li key={sign} className="bg-white/10 rounded-lg p-4 flex items-start gap-3">
                <TriangleAlert className="w-5 h-5 text-jac-lime shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-white leading-snug">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">How We Do It</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">
              Our {service.name} <span className="text-jac-lime">Process</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <ol className="space-y-6">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-6 bg-gray-50 border border-gray-200 border-l-4 border-l-jac-lime rounded-lg p-6"
              >
                <span className="font-display font-extrabold text-3xl text-jac-lime shrink-0 w-10 tabular-nums">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl uppercase text-jac-green mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Equipment and materials */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">What We Use</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              Materials &amp; <span className="text-jac-lime">Methods</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {service.equipment.map((e) => (
              <div key={e.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-display text-lg uppercase text-jac-green mb-2 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-jac-lime shrink-0" /> {e.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Common Questions</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              {location ? `${location.city} ` : ''}{service.name} <span className="text-jac-lime">FAQs</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>
          <FaqAccordion faqs={location ? service.faqs.slice(0, 6) : service.faqs} />
        </div>
      </section>

      {/* Nearby cities, on the city variant */}
      {location && (
        <section className="bg-gray-50 py-16 border-y border-gray-200">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-2 text-center">
              {service.name} Near {location.city}
            </h2>
            <div className="section-divider mt-4 mb-8 mx-auto"></div>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((l) => (
                <Link
                  key={l.slug}
                  to={`/services/${service.slug}/${l.slug}`}
                  className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-bold text-jac-green hover:border-jac-lime hover:shadow-sm transition-all"
                >
                  {l.cityState}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to={`/service-areas/${location.slug}`}
                className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-sm hover:text-jac-lime transition-colors"
              >
                All services in {location.city} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-2 text-center">
            Our Other <span className="text-jac-lime">Services</span>
          </h2>
          <div className="section-divider mt-4 mb-10 mx-auto"></div>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={location ? `/services/${s.slug}/${location.slug}` : s.path}
                className="group bg-white rounded-xl p-6 border-b-4 border-b-jac-lime border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Img src={s.icon} alt="" sizes="80px" className="w-16 h-16 object-contain mb-4" />
                <h3 className="font-display text-lg uppercase text-jac-green mb-2">
                  {s.name}
                  {location ? ` in ${location.city}` : ''}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{s.summary}</p>
                <span className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-xs mt-4 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 text-jac-lime" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City links on the non-city variant */}
      {!location && <CityLinks serviceSlug={service.slug} serviceName={service.name} />}

      {/* Final CTA */}
      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            Level Up Your Home — Call <span className="text-jac-lime">Best Way</span> Today
          </h2>
          <a
            href={PHONE_HREF}
            className="text-3xl md:text-4xl font-extrabold text-jac-lime hover:text-white transition-colors inline-flex items-center gap-3 mt-4"
          >
            <Phone className="w-8 h-8" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-white transition-colors shadow-md"
            >
              Schedule Free Inspection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

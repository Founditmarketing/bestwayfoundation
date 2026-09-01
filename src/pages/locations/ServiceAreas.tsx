import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { locations } from '../../data/locations';
import Img from '../../components/Img';

const PHONE_DISPLAY = '(903) 932-8150';
const PHONE_HREF = 'tel:9039328150';

export default function ServiceAreas() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src="/img/foundation-repair-longview-tx.jpg"
            alt="Foundation repair across Deep East Texas"
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
              <MapPin className="w-4 h-4" /> Headquartered in Longview, TX
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">
              Our <span className="text-jac-lime">Service Areas</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              For over 25 years we have been leveling and repairing homes across Deep East Texas. Find your city below
              to see how we work in your area — or just call and ask.
            </p>
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Where We Work</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">
              Cities We <span className="text-jac-lime">Serve</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/service-areas/${location.slug}`}
                className="group bg-white rounded-xl overflow-hidden border-b-4 border-b-jac-lime border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-40 overflow-hidden">
                  <Img
                    src={location.heroImage}
                    alt={`Foundation repair in ${location.cityState}`}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jac-navy-dark/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="font-display text-2xl uppercase text-white leading-none">{location.city}</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-jac-lime mt-1">{location.county}</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{location.intro[0]}</p>
                  <span className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-xs group-hover:gap-3 transition-all">
                    {location.city} Foundation Repair <ArrowRight className="w-4 h-4 text-jac-lime" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not listed / map */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Don't See Your Town?</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green mb-5">
              We Cover All of <span className="text-jac-lime">Deep East Texas</span>
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The cities above are where we work most, but our service area covers Gregg, Harrison, Rusk, Upshur, Smith,
              Panola and Cherokee counties along with the surrounding communities. If you are not sure whether we reach
              you, call and ask — we will give you a straight answer.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Free inspections with no travel fee',
                'Owner James Wilson on-site for every job',
                'Warranted work using engineering-approved materials',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0" />
                  <span className="font-semibold text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md"
              >
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-jac-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-navy-dark transition-colors shadow-md"
              >
                Request Free Inspection <ArrowRight className="w-4 h-4 text-jac-lime" />
              </Link>
            </div>
          </div>

          <div className="h-[400px] lg:h-[480px] w-full relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Longview,+TX&z=9&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Best Way Foundation Repair Deep East Texas service area map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            Level Up Your Home — Call <span className="text-jac-lime">Best Way</span> Today!
          </h2>
          <a href={PHONE_HREF} className="text-3xl md:text-4xl font-extrabold text-jac-lime hover:text-white transition-colors inline-flex items-center gap-3 mt-4">
            <Phone className="w-8 h-8" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}

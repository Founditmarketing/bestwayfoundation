import React from 'react';
import { ArrowRight, Phone, CheckCircle2, ChevronRight, ShieldCheck, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Img from '../components/Img';
import {
  BUSINESS_NAME,
  FOUNDED_YEAR,
  OWNER_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  YEARS_IN_BUSINESS,
} from '../config/site';

/**
 * About page.
 *
 * Rewritten to carry actual E-E-A-T signals — a founding year, a named owner
 * with a bio, what "second-generation" concretely means, and how the company
 * works — rather than the urgency copy it previously ran. Search engines and
 * AI answer engines both reward substantiated experience over adjectives.
 *
 * TODO(client): a Texas licence or registration number and any named
 * certifications should be added to the Credentials block below. They are
 * deliberately absent rather than invented.
 */
export default function About() {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src="/img/house-leveling-kilgore-tx.jpg"
            alt="Best Way Foundation Repair crew working on an East Texas home"
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-6"
          >
            <Link to="/" className="hover:text-jac-lime transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-jac-lime">About</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">
              About Our Company
            </h1>
            <p className="text-lg md:text-xl text-jac-lime font-bold uppercase tracking-widest mb-8">
              Leveling Homes. Lifting Standards.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-lg"
            >
              Schedule Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">
              Founded {FOUNDED_YEAR} in Longview, Texas
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green mb-4">
              Stronger foundations start right here at home.
            </h2>
            <div className="section-divider mb-8"></div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                {BUSINESS_NAME} is a second-generation, family-owned foundation contractor based in
                Longview and working across Deep East Texas. Second-generation means what it sounds
                like: the trade was learned on job sites in this region, from the generation before,
                and it has been practised here continuously for more than {YEARS_IN_BUSINESS} years.
              </p>
              <p>
                We are not a franchise and we do not employ commission salespeople. When you call, you
                talk to the people who will be at your house. When we inspect, owner {OWNER_NAME} takes
                the elevation readings himself. When we repair, he is on site while the work is done.
                That is the whole business model, and it is the reason we can say no to work a house
                does not need.
              </p>
              <h3 className="font-display text-2xl uppercase text-jac-green pt-4">
                Measure first. Quote second.
              </h3>
              <p>
                Every job starts with a manometer elevation survey across the full structure — not a
                walk around the outside and a number. That survey tells us whether the movement is
                settlement, heave, a plumbing leak or a slab that was never poured level, and those
                need different repairs. A meaningful share of our inspections end with us telling the
                homeowner their house is within tolerance and to keep an eye on it. Those cost nothing
                either.
              </p>
              <h3 className="font-display text-2xl uppercase text-jac-green pt-4">
                Fix the water, or fix the house twice.
              </h3>
              <p>
                East Texas foundations move because the clay under them changes volume with its
                moisture content. Piers stop a house following the soil down; drainage stops the soil
                making the trip. We treat grading, roof water and crawlspace moisture as part of the
                repair rather than an upsell, because a repair that ignores the water is a repair with
                an expiry date.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors shadow-md"
              >
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-jac-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-navy-dark transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-jac-lime" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl border-8 border-gray-50">
              <Img
                src="/img/foundation-repair-crew-east-texas.jpg"
                alt={`${OWNER_NAME} and the Best Way crew levelling a home in East Texas`}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="w-full h-[320px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-jac-green text-white rounded-lg shadow-xl px-6 py-4 flex items-center gap-4">
              <div className="font-display text-4xl font-extrabold text-jac-lime">{YEARS_IN_BUSINESS}+</div>
              <div className="text-sm font-bold uppercase tracking-wide leading-tight">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner */}
      <section className="bg-gray-50 py-16 md:py-20 border-y border-gray-200">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white border border-gray-200 border-l-4 border-l-jac-lime rounded-lg p-8 md:p-10">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">
              Who is actually at your house
            </div>
            <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-4">
              {OWNER_NAME} — Owner
            </h2>
            <div className="section-divider mb-6"></div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {OWNER_NAME} is the second-generation owner of {BUSINESS_NAME}. He runs the elevation
                survey on every inspection the company performs, writes the repair plan himself, and
                is on site while the crew works. There is no separate sales team, and nobody at this
                company is paid a commission on the size of your repair.
              </p>
              <p>
                His work covers concrete slab stabilization, full house leveling, pier and beam repair
                including sills, beams and joists, and the drainage correction that keeps all of it
                holding — across Gregg, Harrison, Smith, Rusk, Upshur, Panola, Cherokee, Nacogdoches
                and Angelina counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Why Homeowners Pick Us</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              Credentials &amp; <span className="text-jac-lime">Commitments</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Award,
                title: 'BBB Accredited',
                desc: 'Accredited with the Better Business Bureau, and reachable by phone by the person who did the work.',
              },
              {
                icon: Users,
                title: 'Second Generation',
                desc: `The trade learned in this region from the generation before, and practised here since ${FOUNDED_YEAR}.`,
              },
              {
                icon: ShieldCheck,
                title: 'Licensed & Insured',
                desc: 'Licensed and fully insured, with the scope, price and warranty in writing before any work begins.',
              },
            ].map((c) => (
              <div key={c.title} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                <c.icon className="w-10 h-10 text-jac-lime mx-auto mb-4" />
                <h3 className="font-display text-xl uppercase text-jac-green mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              `${YEARS_IN_BUSINESS}+ years in Deep East Texas`,
              'Owner on site for every job',
              'Elevation readings before and after',
              'Written scope and pricing',
              'Engineering-approved materials',
              'Long-term warranty in writing',
              'No commission salespeople',
              'Free inspections, no travel charge',
              'We will tell you when to do nothing',
            ].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-5 py-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0" />
                <span className="font-semibold text-jac-green text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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

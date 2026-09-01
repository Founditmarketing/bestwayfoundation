import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  BadgeCheck,
  Award,
  ShieldCheck,
  Users,
  CalendarCheck,
  ClipboardList,
  Wrench,
  BrickWall,
  DoorClosed,
  Ruler,
  Frame,
  TriangleAlert,
  LayoutGrid,
} from 'lucide-react';
import { Location, getOtherLocations } from '../data/locations';
import { services } from '../data/services';
import { guides } from '../data/guides';
import Img from './Img';
import FaqAccordion from './FaqAccordion';


const warningSigns = [
  { icon: BrickWall, label: 'Cracks in exterior brick or interior walls' },
  { icon: DoorClosed, label: 'Doors and windows that stick or will not latch' },
  { icon: Ruler, label: 'Sloping, uneven or springy floors' },
  { icon: Frame, label: 'Gaps opening above windows and doors' },
  { icon: TriangleAlert, label: 'Sagging or bowing walls' },
  { icon: LayoutGrid, label: 'Cracked tile, grout or flooring' },
];

const processSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Free On-Site Inspection',
    desc: 'We come to you, take elevation measurements and look at drainage, grading and framing — at no cost and with no obligation.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: 'Honest, Written Plan',
    desc: 'You get the actual cause, the recommended repair and a transparent price in writing before anyone starts work.',
  },
  {
    icon: Wrench,
    step: '3',
    title: 'Repaired The Best Way',
    desc: 'Our own crew installs engineering-approved solutions with owner James Wilson on-site, backed by a long-term warranty.',
  },
];

const PHONE_DISPLAY = '(903) 932-8150';
const PHONE_HREF = 'tel:9039328150';


export default function LocationTemplate({ location }: { location: Location }) {
  const otherLocations = getOtherLocations(location.slug);



  const canonicalPath = `/service-areas/${location.slug}`;

  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src={location.heroImage}
            alt={`Foundation repair work in ${location.cityState}`}
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-6 flex-wrap">
            <Link to="/" className="hover:text-jac-lime transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/service-areas" className="hover:text-jac-lime transition-colors">Service Areas</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-jac-lime">{location.cityState}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
              <MapPin className="w-4 h-4" /> Serving{' '}
              {location.county.startsWith(location.city)
                ? location.county
                : `${location.city} & ${location.county}`}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white leading-[1.05] mb-4">
              Foundation Repair in{' '}
              <span className="text-jac-lime whitespace-nowrap">{location.cityState}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              {location.tagline} — from a second-generation, locally owned crew with 25+ years in Deep East Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm text-center hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="border-2 border-jac-lime text-jac-lime px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm text-center hover:bg-jac-lime hover:text-jac-green transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {['Free Inspections', 'Warranted Work', 'Owner On Every Job'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-jac-lime" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="max-w-[1200px] mx-auto bg-jac-lime rounded-xl shadow-xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-jac-green/10 overflow-hidden">
          {[
            { icon: Award, title: '25+ Years', sub: 'Of Experience' },
            { icon: Users, title: '2 Generations', sub: 'Family Owned & Operated' },
            { icon: ShieldCheck, title: 'Warranted', sub: 'Work Built To Last' },
            { icon: BadgeCheck, title: 'BBB', sub: 'Accredited Business' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-4 p-4 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-jac-green flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-jac-lime" />
                </div>
                <div>
                  <div className="font-display text-lg md:text-xl font-extrabold text-jac-green leading-none">{item.title}</div>
                  <div className="text-[11px] md:text-xs text-jac-green/70 font-semibold uppercase tracking-wide mt-1">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Intro + Local Info Card */}
      <section className="bg-white pt-20 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Your Local Crew</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green mb-4">
              Foundation Experts Serving <span className="text-jac-lime">{location.city}</span>
            </h2>
            <div className="section-divider mb-8"></div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {location.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
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

          {/* Sidebar: at-a-glance + map */}
          <aside className="flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-200 border-t-4 border-t-jac-lime rounded-xl p-8">
              <h3 className="font-display text-xl uppercase text-jac-green mb-5">{location.city} At A Glance</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-jac-lime shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold block text-jac-green">Area Served</span>{location.cityState} — {location.county}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-jac-lime shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold block text-jac-green">Response Time</span>{location.distance}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-jac-lime shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-bold block text-jac-green">Call Direct</span>
                    <a href={PHONE_HREF} className="font-bold text-jac-green hover:text-jac-lime transition-colors">{PHONE_DISPLAY}</a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-bold block text-jac-green">Hours</span>Mon – Fri: 8:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="h-[300px] w-full relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={`https://www.google.com/maps?q=${location.mapQuery}&z=11&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title={`Map of our ${location.city}, TX service area`}
              ></iframe>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="bg-jac-lime/15 py-16 md:py-24 border-y-4 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">What We Do Here</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">
              Our Services in <span className="text-jac-lime">{location.city}</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}/${location.slug}`}
                className="group bg-white rounded-xl p-8 border-b-4 border-b-jac-lime border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Img src={service.icon} alt="" sizes="80px" className="w-20 h-20 object-contain mb-5" />
                <h3 className="font-display text-xl uppercase text-jac-green mb-2">
                  {service.name} in {location.city}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{service.summary}</p>
                <span className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-xs group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 text-jac-lime" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why foundations move here */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Local Conditions</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">
              Why Foundations Move in <span className="text-jac-lime">{location.city}</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {location.localFactors.map((factor) => (
              <div key={factor.title} className="bg-gray-50 border border-gray-200 border-t-4 border-t-jac-lime rounded-xl p-8">
                <h3 className="font-display text-xl uppercase text-jac-green mb-3">{factor.title}</h3>
                <p className="text-gray-600 leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>

          {/* Warning signs */}
          <div className="bg-jac-green rounded-xl p-8 md:p-12 border-b-8 border-jac-lime">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-white">
                <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">Know The Signs</div>
                <h3 className="font-display text-2xl md:text-3xl uppercase text-white mb-4">
                  Seeing Any Of This At Your {location.city} Home?
                </h3>
                <div className="section-divider mb-6"></div>
                <p className="text-white/85 leading-relaxed mb-8">
                  Foundation problems rarely fix themselves, and repair costs climb the longer a house keeps moving. If
                  something on this list sounds familiar, have it looked at while it is still small — the inspection
                  costs you nothing.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-md"
                >
                  Get My Free Inspection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {warningSigns.map((sign) => {
                  const Icon = sign.icon;
                  return (
                    <li key={sign.label} className="bg-white/10 rounded-lg p-4 flex items-start gap-3">
                      <Icon className="w-6 h-6 text-jac-lime shrink-0" />
                      <span className="text-sm font-semibold text-white leading-snug">{sign.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">How It Works</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">
              What To Expect in <span className="text-jac-lime">3 Simple Steps</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
            <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-jac-lime/60"></div>
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-20 h-20 rounded-full bg-jac-lime flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-9 h-9 text-jac-green" />
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-jac-green text-jac-lime font-display font-extrabold text-lg flex items-center justify-center border-2 border-white">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl uppercase text-jac-green mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Common Questions</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              {location.city} Foundation Repair <span className="text-jac-lime">FAQs</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <FaqAccordion faqs={location.faqs} />
        </div>
      </section>

      {/* Guides — cost and comparison content, linked from every city page */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Before You Decide</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              Read These <span className="text-jac-lime">First</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guides.map((g) => (
              <Link
                key={g.slug}
                to={g.path}
                className="bg-white border border-gray-200 border-b-4 border-b-jac-lime rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-base uppercase text-jac-green mb-2 leading-snug">{g.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{g.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby communities + other cities */}
      <section className="bg-jac-lime/15 py-16 md:py-24 border-y-4 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Nearby</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              Also Serving Around <span className="text-jac-lime">{location.city}</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {location.nearby.map((place) => (
              <span key={place} className="bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-jac-lime" /> {place}
              </span>
            ))}
          </div>

          <h3 className="font-display text-xl uppercase text-jac-green text-center mb-6">Other Cities We Serve</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                to={`/service-areas/${other.slug}`}
                className="group bg-white border border-gray-200 rounded-lg px-5 py-4 flex items-center justify-between gap-2 hover:border-jac-lime hover:shadow-md transition-all"
              >
                <span className="font-bold text-jac-green text-sm">{other.city}, TX</span>
                <ArrowRight className="w-4 h-4 text-jac-lime group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/service-areas" className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-sm hover:text-jac-lime transition-colors">
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Img src="/img/foundation-inspection-east-texas.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-jac-navy-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-white">
            <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">Free Inspection</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-5">
              Request Your Free <span className="text-jac-lime">{location.city} Estimate</span>
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              Fill out the form and we will get back to you promptly — or call{' '}
              <a href={PHONE_HREF} className="font-bold text-jac-lime hover:text-white transition-colors">{PHONE_DISPLAY}</a>{' '}
              to speak with a foundation expert about your {location.city} home today.
            </p>
            <ul className="space-y-4">
              {[
                `Free, no-obligation inspection anywhere in ${location.county}`,
                'Transparent pricing — no hidden sales gimmicks',
                'Warranted work backed by 25+ years of experience',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0" />
                  <span className="font-semibold text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="bg-white rounded-xl shadow-2xl p-8 md:p-10 space-y-4">
            <h3 className="font-display text-2xl uppercase text-jac-green mb-2">Get In Touch</h3>
            <input type="hidden" name="city" value={location.cityState} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${location.slug}-name`} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Name *</label>
                <input type="text" id={`${location.slug}-name`} name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
              <div>
                <label htmlFor={`${location.slug}-phone`} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Phone *</label>
                <input type="tel" id={`${location.slug}-phone`} name="phone" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor={`${location.slug}-email`} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email *</label>
              <input type="email" id={`${location.slug}-email`} name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor={`${location.slug}-address`} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Property Address</label>
              <input type="text" id={`${location.slug}-address`} name="address" defaultValue="" placeholder={`Street, ${location.cityState}`} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor={`${location.slug}-service`} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Service Needed</label>
              <select id={`${location.slug}-service`} name="service" defaultValue="" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors">
                <option value="" disabled>Select a Service...</option>
                <option value="foundation-repair">Foundation Repair</option>
                <option value="house-leveling">House Leveling</option>
                <option value="pier-and-beam">Pier &amp; Beam Repair</option>
                <option value="drainage-solutions">Drainage Solutions</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor={`${location.slug}-message`} className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">How Can We Help?</label>
              <textarea id={`${location.slug}-message`} name="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-jac-lime text-jac-green py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md flex items-center justify-center gap-2">
              Submit Request <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            {location.city} Homeowners — Call <span className="text-jac-lime">Best Way</span> Today!
          </h2>
          <a href={PHONE_HREF} className="text-3xl md:text-4xl font-extrabold text-jac-lime hover:text-white transition-colors inline-flex items-center gap-3 mt-4">
            <Phone className="w-8 h-8" /> {PHONE_DISPLAY}
          </a>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-white transition-colors shadow-md">
              Schedule Free Inspection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

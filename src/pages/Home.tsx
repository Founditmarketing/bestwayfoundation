import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  HardHat,
  Handshake,
  ShieldCheck,
  Construction,
  BrickWall,
  DoorClosed,
  Ruler,
  House,
  Frame,
  TriangleAlert,
  LayoutGrid,
  MoveHorizontal,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CalendarCheck,
  ClipboardList,
  Wrench,
  BadgeCheck,
  Award,
  Users
} from 'lucide-react';

const warningSigns = [
  { icon: BrickWall, title: 'Cracks in Exterior & Interior Walls', to: '/services/foundation-repair' },
  { icon: DoorClosed, title: 'Stuck Doors & Jammed Windows', to: '/services/house-leveling' },
  { icon: Ruler, title: 'Sloping or Uneven Floors', to: '/services/house-leveling' },
  { icon: House, title: 'Cracked Chimney', to: '/services/foundation-repair' },
  { icon: Frame, title: 'Gaps Around Windows & Doors', to: '/services/foundation-repair' },
  { icon: TriangleAlert, title: 'Sagging or Bowing Walls', to: '/services/pier-and-beam' },
  { icon: LayoutGrid, title: 'Cracks in Tile & Flooring', to: '/services/foundation-repair' },
  { icon: MoveHorizontal, title: 'Slab or Wall Separation', to: '/services/foundation-repair' },
];

const services = [
  {
    title: 'Foundation Repair',
    desc: 'Precision stabilization for slab and pier & beam structures — we pinpoint the root cause and fix it for good.',
    photo: '/jacitgallery2.jpeg',
    icon: '/Construction-Foundation-Pit.H03.2k.png',
    to: '/services/foundation-repair',
  },
  {
    title: 'House Leveling',
    desc: 'Restoring structural integrity with advanced hydraulic leveling that brings your home back to true.',
    photo: '/jacitgallery3.jpeg',
    icon: '/Survey-Automatic-Level-on-Tripod.H03.2k.png',
    to: '/services/house-leveling',
  },
  {
    title: 'Pier & Beam Repair',
    desc: 'Specialized care for older homes and custom structural frames, from joists to sills to piers.',
    photo: '/jacitgallery4.jpeg',
    icon: '/Concrete-Pillar.H03.2k.png',
    to: '/services/pier-and-beam',
  },
  {
    title: 'Drainage Solutions',
    desc: 'Protecting your foundation from moisture and soil shifts before they become structural problems.',
    photo: '/jacitgallery.jpeg',
    icon: '/Steel-Shower-Drain.H03.2k.png',
    to: '/services/drainage-solutions',
  },
];

const processSteps = [
  {
    icon: CalendarCheck,
    step: '1',
    title: 'Schedule Your Free Inspection',
    desc: "Call or send a message and we'll set up a free, no-obligation structural inspection of your home.",
  },
  {
    icon: ClipboardList,
    step: '2',
    title: 'Get a Custom Repair Plan',
    desc: 'We evaluate every crack, shift, and settling issue to pinpoint the root cause — then walk you through a transparent, honest repair plan.',
  },
  {
    icon: Wrench,
    step: '3',
    title: 'We Fix It Right the First Time',
    desc: 'Our crew installs engineering-approved solutions with owner James Wilson on-site — warranted work built to last a lifetime.',
  },
];

const trustFactors = [
  {
    title: 'Warranted Work',
    desc: 'Long-term guarantees on our lifting services, providing you with lasting peace of mind for years to come.',
    icon: ShieldCheck,
  },
  {
    title: 'Honest Service',
    desc: 'Transparent pricing and clear communication from start to finish. Absolutely no hidden sales gimmicks.',
    icon: Handshake,
  },
  {
    title: 'Expert Crew',
    desc: 'Our entire team is trained directly under founder James Wilson to ensure flawless execution on every job.',
    icon: HardHat,
  },
  {
    title: 'Reliable Results',
    desc: 'We exclusively utilize structurally sound materials and engineering-approved methods for maximum stability.',
    icon: Construction,
  },
];

const fieldWork = [
  { src: '/jacitgallery.jpeg', title: 'Wall Lifting', desc: 'Hydraulic lifting of exterior brick foundation.' },
  { src: '/jacitgallery2.jpeg', title: 'Exterior Excavation', desc: 'Foundation excavation on residential structure.' },
  { src: '/jacitgallery3.jpeg', title: 'Interior Leveling', desc: 'Completed interior with newly leveled floors.' },
  { src: '/jacitgallery4.jpeg', title: 'Concrete Supports', desc: 'Deep concrete block installation for stability.' },
  { src: '/jacitgallery5.png', title: 'Subfloor Installation', desc: 'Installing new structural subfloors.' },
  { src: '/jacitgallery6.png', title: 'Joist Replacement', desc: 'Replacing damaged floor joists.' },
  { src: '/jacitgallery7.png', title: 'Framework Repair', desc: 'Securing interior joist framework.' },
  { src: '/presspiers.png', title: 'Press Piers System', desc: 'Heavy duty steel and concrete press pier installation.' },
];

const serviceAreas = [
  'Longview', 'Kilgore', 'Gladewater', 'White Oak', 'Hallsville', 'Marshall',
  'Tyler', 'Henderson', 'Gilmer', 'Carthage', 'Tatum', 'Jacksonville',
];

export default function Home({ isLoading }: { isLoading?: boolean }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: number) => {
    if (carouselRef.current) {
      const amount = (carouselRef.current.children[0]?.clientWidth || 380) + 24;
      carouselRef.current.scrollBy({ left: dir * amount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section — full-width photo with navy overlay */}
      <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <img
            src="/presspiers.png"
            alt="Press pier foundation repair beneath a home"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/80 to-jac-green/30"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 md:py-28 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-md">
              <BadgeCheck className="w-4 h-4" /> Licensed • Insured • Locally Owned
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-[1.05] mb-6">
              Your Foundation.<br />
              <span className="text-jac-lime">Fixed The Best Way.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              Helping East Texans stand on the strongest foundation for over 25+ years. Expert foundation repair and house leveling — honest craftsmanship you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm text-center hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2">
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:9039328150" className="border-2 border-jac-lime text-jac-lime px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm text-center hover:bg-jac-lime hover:text-jac-green transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                <Phone className="w-4 h-4" /> (903) 932-8150
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

      {/* Trust Bar — overlapping strip */}
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
              <div key={item.title} className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 rounded-full bg-jac-green flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-jac-lime" />
                </div>
                <div>
                  <div className="font-display text-xl font-extrabold text-jac-green leading-none">{item.title}</div>
                  <div className="text-xs text-jac-green/70 font-semibold uppercase tracking-wide mt-1">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services — photo cards */}
      <section id="services" className="bg-white pt-20 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">What We Do</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">Our Repair <span className="text-jac-lime">Solutions</span></h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} to={service.to} className="group bg-white rounded-xl overflow-hidden border-b-4 border-b-jac-lime border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={service.photo} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-jac-navy-dark/60 to-transparent"></div>
                  <img src={service.icon} alt="" className="absolute bottom-3 right-3 w-16 h-16 object-contain drop-shadow-lg" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl uppercase text-jac-green mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-xs group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 text-jac-lime" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Warning Signs */}
      <section className="bg-jac-lime/15 py-16 md:py-24 border-y-4 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Know the Warning Signs</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">8 Most Common Signs of<br className="hidden md:block" /> <span className="text-jac-lime">Foundation Problems</span></h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {warningSigns.map((sign) => {
              const Icon = sign.icon;
              return (
                <Link key={sign.title} to={sign.to} className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 hover:border-jac-lime hover:shadow-md transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-jac-lime flex items-center justify-center shrink-0 group-hover:bg-jac-green transition-colors">
                    <Icon className="w-7 h-7 text-jac-green group-hover:text-jac-lime transition-colors" />
                  </div>
                  <span className="font-bold text-jac-green leading-snug">{sign.title}</span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Noticing any of these around your home? Don't wait until cracks become catastrophes — most homeowners don't act until the damage becomes severe, and by then repair costs skyrocket.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors shadow-md">
              Contact Your Local Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">How It Works</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">Peace of Mind in <span className="text-jac-lime">3 Simple Steps</span></h2>
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

          <div className="text-center mt-14">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors shadow-md">
              Schedule Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Stats Band — dark navy */}
      <section id="about" className="bg-jac-green py-16 md:py-24 relative overflow-hidden border-y-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src="/jacitgallery3.jpeg" alt="Completed interior with newly leveled floors" className="w-full h-[320px] md:h-[440px] object-cover" />
            </div>
            <div className="absolute -bottom-6 right-6 bg-jac-lime text-jac-green rounded-xl shadow-xl px-6 py-4">
              <div className="text-sm font-bold uppercase tracking-wide">2 Generations Leveling You!</div>
            </div>
          </div>

          <div className="text-white">
            <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">About Our Company</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-5">Why <span className="text-jac-lime">Best Way</span> Is Different</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              We believe your home deserves a foundation you can trust. With over 25 years of technical expertise, James Wilson provides solutions that are built to last a lifetime — with prompt service, fair pricing, and peace of mind on every job.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: '25+', label: 'Years of Experience' },
                { value: '2', label: 'Generations of Craftsmanship' },
                { value: '4', label: 'Specialized Services' },
                { value: '100%', label: 'Owner Oversight On-Site' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-4 border-jac-lime pl-4">
                  <div className="font-display text-4xl font-extrabold text-jac-lime leading-none">{stat.value}</div>
                  <div className="text-sm font-semibold text-white/80 uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-md">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="bg-jac-lime/15 py-16 md:py-24 border-b-4 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">The Best Way Difference</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">Why Homeowners Trust <span className="text-jac-lime">Best Way</span></h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div key={factor.title} className="bg-white border-t-4 border-t-jac-lime border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-jac-lime flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-jac-green" />
                  </div>
                  <h3 className="font-display text-xl uppercase text-jac-green mb-3">{factor.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{factor.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Field Work Carousel */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Our Work</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">Recent Work <span className="text-jac-lime">In The Field</span></h2>
              <div className="section-divider mt-5"></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollCarousel(-1)} className="w-12 h-12 rounded-full border-2 border-jac-lime bg-jac-lime/20 flex items-center justify-center text-jac-green hover:bg-jac-lime transition-all" aria-label="Previous">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={() => scrollCarousel(1)} className="w-12 h-12 rounded-full border-2 border-jac-lime bg-jac-lime/20 flex items-center justify-center text-jac-green hover:bg-jac-lime transition-all" aria-label="Next">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {fieldWork.map((item) => (
              <div key={item.title} className="min-w-[80vw] sm:min-w-[380px] snap-center bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl uppercase text-jac-green mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-sm hover:text-jac-lime transition-colors">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Where We Work</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green mb-5">Contact Your <span className="text-jac-lime">Foundation Expert</span> Today</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Headquartered in Longview, TX, we proudly serve homeowners across Deep East Texas — including these communities and all surrounding areas:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {serviceAreas.map((city) => (
                <div key={city} className="flex items-center gap-2 text-gray-700 font-semibold">
                  <MapPin className="w-4 h-4 text-jac-lime shrink-0" /> {city}
                </div>
              ))}
            </div>
            <a href="tel:9039328150" className="inline-flex items-center gap-3 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md">
              <Phone className="w-5 h-5" /> Call (903) 932-8150
            </a>
          </div>

          <div className="h-[400px] lg:h-[480px] w-full relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=Longview,+TX&z=10&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Best Way Foundation Repair service area map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/jacitgallery4.jpeg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-jac-navy-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-white">
            <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">Free Inspection</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-5">Request Your <span className="text-jac-lime">Free Estimate</span></h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              Fill out the form and we'll get back to you promptly — or call <a href="tel:9039328150" className="font-bold text-jac-lime hover:text-white transition-colors">(903) 932-8150</a> to speak with a foundation expert today.
            </p>
            <ul className="space-y-4">
              {[
                'Free, no-obligation structural inspection',
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="home-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Name *</label>
                <input type="text" id="home-name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
              <div>
                <label htmlFor="home-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Phone *</label>
                <input type="tel" id="home-phone" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="home-email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email *</label>
              <input type="email" id="home-email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="home-address" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Property Address</label>
              <input type="text" id="home-address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="home-service" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Service Needed</label>
              <select id="home-service" defaultValue="" className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors">
                <option value="" disabled>Select a Service...</option>
                <option value="foundation-repair">Foundation Repair</option>
                <option value="house-leveling">House Leveling</option>
                <option value="pier-and-beam">Pier &amp; Beam Repair</option>
                <option value="drainage-solutions">Drainage Solutions</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div>
              <label htmlFor="home-message" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">How Can We Help?</label>
              <textarea id="home-message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-jac-lime text-jac-green py-4 rounded-full font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md flex items-center justify-center gap-2">
              Submit Request <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

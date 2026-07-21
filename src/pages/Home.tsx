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
  Star
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

const services = [
  {
    title: 'Foundation Repair',
    desc: 'Precision stabilization for slab and pier & beam structures.',
    image: '/Construction-Foundation-Pit.H03.2k.png',
    to: '/services/foundation-repair',
  },
  {
    title: 'House Leveling',
    desc: 'Restoring structural integrity with advanced hydraulic leveling.',
    image: '/Survey-Automatic-Level-on-Tripod.H03.2k.png',
    to: '/services/house-leveling',
  },
  {
    title: 'Pier & Beam Repair',
    desc: 'Specialized care for older homes and custom structural frames.',
    image: '/Concrete-Pillar.H03.2k.png',
    to: '/services/pier-and-beam',
  },
  {
    title: 'Drainage Solutions',
    desc: 'Protecting your foundation from moisture and soil shifts.',
    image: '/Steel-Shower-Drain.H03.2k.png',
    to: '/services/drainage-solutions',
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

const serviceAreas = [
  'Longview', 'Kilgore', 'Gladewater', 'White Oak', 'Hallsville', 'Marshall',
  'Tyler', 'Henderson', 'Gilmer', 'Carthage', 'Tatum', 'Jacksonville',
];

const SectionHeading = ({ eyebrow, title, center = true }: { eyebrow?: string, title: React.ReactNode, center?: boolean }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {eyebrow && <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">{eyebrow}</div>}
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">{title}</h2>
    <div className={`section-divider mt-5 ${center ? 'mx-auto' : ''}`}></div>
  </div>
);

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
      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-jac-lime/15 border border-jac-lime/40 text-jac-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Star className="w-3.5 h-3.5 fill-jac-lime text-jac-lime" /> Licensed • Insured • Locally Owned
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase text-jac-green leading-[1.05] mb-6">
              Best Way<br />Foundation Repair
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-4">
              Helping East Texans stand on the strongest foundation for over <span className="font-bold text-jac-green">25+ years</span>.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
              Expert foundation repair and house leveling across Deep East Texas. Honest craftsmanship you can trust — schedule your free, no-obligation structural inspection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-jac-lime text-jac-green px-8 py-4 rounded-md font-bold uppercase tracking-wide text-sm text-center hover:bg-jac-green hover:text-white transition-colors shadow-md flex items-center justify-center gap-2">
                All Services <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:9039328150" className="bg-jac-green text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-sm text-center hover:bg-jac-navy-dark transition-colors shadow-md flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-jac-lime" /> (903) 932-8150
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl border-8 border-white">
              <img src="/bestwayhero.png" alt="Cracked foundation in need of repair" className="w-full h-[320px] md:h-[440px] object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 bg-jac-green text-white rounded-lg shadow-xl px-6 py-4 flex items-center gap-4">
              <div className="font-display text-4xl font-extrabold text-jac-lime">25+</div>
              <div className="text-sm font-bold uppercase tracking-wide leading-tight">Years of<br />Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Positioning Cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Foundation Repair',
              desc: 'Foundation repair is a complex problem that requires specialized training and experience. We evaluate every crack, shift, and settling issue to pinpoint the root cause.',
              to: '/services/foundation-repair',
            },
            {
              title: 'Residential Experts',
              desc: 'A second-generation business that has served East Texas homeowners for over 25 years — with owner James Wilson on-site for every job.',
              to: '/about',
            },
            {
              title: 'Drainage & More',
              desc: 'From house leveling and pier & beam repair to drainage solutions that protect your foundation from moisture and shifting soil.',
              to: '/services/drainage-solutions',
            },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display text-2xl uppercase text-jac-green mb-3">{card.title}</h3>
              <div className="section-divider mx-auto mb-5"></div>
              <p className="text-gray-600 leading-relaxed mb-6">{card.desc}</p>
              <Link to={card.to} className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-sm hover:text-jac-lime transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 8 Warning Signs */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading
            eyebrow="Know the Warning Signs"
            title={<>8 Most Common Signs of<br className="hidden md:block" /> Foundation Problems</>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {warningSigns.map((sign) => {
              const Icon = sign.icon;
              return (
                <Link key={sign.title} to={sign.to} className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4 hover:border-jac-lime hover:shadow-md transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-full bg-jac-green/5 flex items-center justify-center shrink-0 group-hover:bg-jac-green transition-colors">
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
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-green text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-sm hover:bg-jac-navy-dark transition-colors shadow-md">
              Contact Your Local Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Field Work Carousel */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Our Work</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green">Recent Work In The Field</h2>
              <div className="section-divider mt-5"></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => scrollCarousel(-1)} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-jac-green hover:bg-jac-lime hover:border-jac-lime transition-all" aria-label="Previous">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={() => scrollCarousel(1)} className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-jac-green hover:bg-jac-lime hover:border-jac-lime transition-all" aria-label="Next">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {fieldWork.map((item) => (
              <div key={item.title} className="min-w-[80vw] sm:min-w-[380px] snap-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
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

      {/* Services List */}
      <section id="services" className="bg-jac-green py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="mb-12 text-center">
            <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">What We Do</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-white">Our Foundation Services</h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} to={service.to} className="bg-white rounded-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg group">
                <img src={service.image} alt={service.title} className="w-28 h-28 object-contain mb-5 group-hover:scale-105 transition-transform duration-300" />
                <h3 className="font-display text-xl uppercase text-jac-green mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-jac-green font-bold uppercase tracking-wide text-xs group-hover:text-jac-lime transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-md font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-md">
              Contact Your Local Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Blurb */}
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl border-8 border-gray-50">
              <img src="/jacitgallery2.jpeg" alt="Best Way crew performing foundation excavation" className="w-full h-[320px] md:h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-6 right-6 bg-jac-lime text-jac-green rounded-lg shadow-xl px-6 py-4">
              <div className="text-sm font-bold uppercase tracking-wide">2 Generations Leveling You!</div>
            </div>
          </div>

          <div>
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">About Our Company</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green mb-5">Why Best Way Is Different</h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe your home deserves a foundation you can trust. With over 25 years of technical expertise, James Wilson provides solutions that are built to last a lifetime — with prompt service, fair pricing, and peace of mind on every job.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                '25+ Years Mastery',
                'Direct Owner Oversight',
                'Bonded & Fully Insured',
                'Transparent Pricing',
                'Longview Local Roots',
                'Lifetime Integrity',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0" />
                  <span className="font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 bg-jac-green text-white px-8 py-4 rounded-md font-bold uppercase tracking-wide text-sm hover:bg-jac-navy-dark transition-colors shadow-md">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeading eyebrow="The Best Way Difference" title="Why Homeowners Trust Best Way" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div key={factor.title} className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-jac-green flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-8 h-8 text-jac-lime" />
                  </div>
                  <h3 className="font-display text-xl uppercase text-jac-green mb-3">{factor.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{factor.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Where We Work</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green mb-5">Contact Your Foundation Expert Today</h2>
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
            <a href="tel:9039328150" className="inline-flex items-center gap-3 bg-jac-lime text-jac-green px-8 py-4 rounded-md font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md">
              <Phone className="w-5 h-5" /> Call (903) 932-8150
            </a>
          </div>

          <div className="h-[400px] lg:h-[480px] w-full relative rounded-lg overflow-hidden shadow-xl border border-gray-200">
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
      <section id="contact" className="bg-jac-green py-16 md:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="text-white">
            <div className="text-jac-lime font-bold tracking-widest uppercase text-sm mb-2">Free Inspection</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-5">Request Your Free Estimate</h2>
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

          <form className="bg-white rounded-lg shadow-2xl p-8 md:p-10 space-y-4">
            <h3 className="font-display text-2xl uppercase text-jac-green mb-2">Get In Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="home-name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Name *</label>
                <input type="text" id="home-name" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
              <div>
                <label htmlFor="home-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Phone *</label>
                <input type="tel" id="home-phone" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="home-email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email *</label>
              <input type="email" id="home-email" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="home-address" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Property Address</label>
              <input type="text" id="home-address" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors" />
            </div>
            <div>
              <label htmlFor="home-service" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Service Needed</label>
              <select id="home-service" defaultValue="" className="w-full border border-gray-300 rounded-md px-4 py-3 bg-white focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors">
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
              <textarea id="home-message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-jac-green focus:ring-1 focus:ring-jac-green transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-jac-lime text-jac-green py-4 rounded-md font-bold uppercase tracking-wide text-base hover:bg-jac-green hover:text-white transition-colors shadow-md flex items-center justify-center gap-2">
              Submit Request <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

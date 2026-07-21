import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About({ isLoading }: { isLoading?: boolean }) {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitgallery3.jpeg"
            alt="About Our Company"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">About Our Company</h1>
            <p className="text-lg md:text-xl text-jac-lime font-bold uppercase tracking-widest mb-8">
              Leveling Homes. Lifting Standards.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-lg">
              Schedule Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Body Content (Split Layout) */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Construction Company</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase text-jac-green mb-4">
              Stronger foundations start right here at home.
            </h2>
            <div className="section-divider mb-8"></div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Best-Way Foundation Repair LLC has been protecting homes right here in our community - delivering expert pier systems, certified diagnostics, and repairs built to last. We do not cut corners because your home deserves better.
              </p>
              <h3 className="font-display text-2xl uppercase text-jac-green pt-4">Fix it right the first time and save thousands.</h3>
              <p>
                Best-Way Foundation Repair LLC brings years of hands-on structural experience, certified diagnostics, and proven repair methods to every job. We use pier systems, drainage solutions, and soil stabilization techniques that hold long-term - not just patch the surface. Stop paying twice for the same problem.
              </p>
              <h3 className="font-display text-2xl uppercase text-jac-green pt-4">Shifting soil is silently destroying your foundation right now</h3>
              <p className="font-bold text-jac-green text-xl pt-6 border-t border-gray-100 mt-4">
                Most homeowners don't act until the damage becomes severe - by then, repair costs skyrocket. Our schedule fills fast, and every delay means more structural risk. Don't wait until cracks become catastrophes.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors shadow-md">
                Schedule Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:9039328150" className="inline-flex items-center justify-center gap-2 bg-jac-green text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-navy-dark transition-colors shadow-md">
                <Phone className="w-4 h-4 text-jac-lime" /> (903) 932-8150
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl border-8 border-gray-50">
              <img
                src="/jacitgallery2.jpeg"
                alt="Best Way House Leveling Experience"
                className="w-full h-[320px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-jac-green text-white rounded-lg shadow-xl px-6 py-4 flex items-center gap-4">
              <div className="font-display text-4xl font-extrabold text-jac-lime">25+</div>
              <div className="text-sm font-bold uppercase tracking-wide leading-tight">Years of<br />Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Points */}
      <section className="bg-jac-lime/15 py-16 border-y-4 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '25+ Years Mastery',
              'Direct Owner Oversight',
              'Bonded & Fully Insured',
              'Transparent Pricing',
              'Longview Local Roots',
              'Lifetime Integrity',
            ].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-6 py-5 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-jac-lime shrink-0" />
                <span className="font-bold text-jac-green">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            Level Up Your Home — Call <span className="text-jac-lime">Best Way</span> Today!
          </h2>
          <a href="tel:9039328150" className="text-3xl md:text-4xl font-extrabold text-jac-lime hover:text-white transition-colors inline-flex items-center gap-3 mt-4">
            <Phone className="w-8 h-8" /> (903) 932-8150
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

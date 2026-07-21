import React from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceTemplateProps {
  isLoading?: boolean;
  title: string;
  subtitle?: string;
  image: string;
  heroImage?: string;
  content: React.ReactNode;
}

export default function ServiceTemplate({ title, subtitle, image, heroImage, content }: ServiceTemplateProps) {
  return (
    <>
      {/* Page Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage || '/jacitgallery.jpeg'}
            alt={`${title} background`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/85 to-jac-green/50"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">{title}</h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-jac-lime font-bold uppercase tracking-widest mb-8">{subtitle}</p>
            )}
            <Link to="/contact" className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white transition-colors shadow-lg">
              Schedule Free Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Body Content (Split Layout) */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Our Services</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green mb-4">
              Expert Service Execution
            </h2>
            <div className="section-divider mb-8"></div>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {content}
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

          {/* Right Image + Highlights */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className="w-full max-w-sm h-auto object-contain"
              />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="font-display text-xl uppercase text-jac-green mb-5">Every Job Includes</h3>
              <ul className="space-y-3">
                {[
                  'Free, no-obligation inspection',
                  'Direct owner oversight on-site',
                  'Engineering-approved materials',
                  'Transparent, honest pricing',
                  'Warranted work you can rely on',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-jac-green py-16 md:py-20">
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

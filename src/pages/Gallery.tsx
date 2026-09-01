import React from 'react';
import { ArrowRight, Facebook, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Img from '../components/Img';
import { galleryItems } from '../data/gallery';
import { FACEBOOK_URL, PHONE_DISPLAY, PHONE_HREF } from '../config/site';

/** /gallery — real project photography with captions, not a placeholder. */
export default function Gallery() {
  return (
    <>
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src="/img/foundation-drainage-french-drain.jpg"
            alt="Foundation drainage work on an East Texas home"
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
            <span className="text-jac-lime">Gallery</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-lg md:text-xl text-jac-lime font-bold uppercase tracking-widest">
              Foundation repair, leveling and pier &amp; beam work across Deep East Texas
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <figure
                key={item.src}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 border-b-4 border-b-jac-lime shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Img
                    src={item.src}
                    alt={item.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="p-6">
                  <h2 className="font-display text-lg uppercase text-jac-green mb-2">{item.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-4">
            More Before &amp; Afters
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We post recent jobs as they finish. Follow along on Facebook for the latest work across
            Longview, Tyler, Marshall, Nacogdoches and the rest of our service area.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold tracking-wide uppercase hover:bg-[#0e5fc5] transition-colors shadow-lg"
          >
            <Facebook className="w-6 h-6" /> Visit Our Facebook
          </a>
        </div>
      </section>

      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
            Free inspection, elevation readings and a written answer — anywhere in Deep East Texas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-jac-lime text-jac-green px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-jac-green transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

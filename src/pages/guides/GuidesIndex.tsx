import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChevronRight } from 'lucide-react';
import Img from '../../components/Img';
import { guides } from '../../data/guides';
import { PHONE_DISPLAY, PHONE_HREF } from '../../config/site';

/** /guides — the content hub. */
export default function GuidesIndex() {
  return (
    <>
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src="/img/foundation-crack-inspection.jpg"
            alt="Inspecting a foundation crack in East Texas"
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/95 via-jac-green/88 to-jac-green/55"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 md:py-24">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-6"
          >
            <Link to="/" className="hover:text-jac-lime transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-jac-lime">Guides</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">
              Foundation <span className="text-jac-lime">Guides</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Straight answers to the questions homeowners actually ask us — what it costs, which
              foundation is which, and which cracks are worth worrying about.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-8">
          {guides.map((g) => (
            <article
              key={g.slug}
              className="group bg-white rounded-xl border border-gray-200 border-b-4 border-b-jac-lime shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Img
                  src={g.heroImage}
                  alt={g.title}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jac-navy-dark/70 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-display text-2xl uppercase text-jac-green mb-2 leading-snug">{g.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{g.summary}</p>
                <Link
                  to={g.path}
                  className="inline-flex items-center gap-2 bg-jac-lime text-jac-green px-6 py-3 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors self-start"
                >
                  Read the guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-jac-green py-16 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase mb-4">
            Still Not Sure? <span className="text-jac-lime">Just Ask Us.</span>
          </h2>
          <a
            href={PHONE_HREF}
            className="text-3xl md:text-4xl font-extrabold text-jac-lime hover:text-white transition-colors inline-flex items-center gap-3"
          >
            <Phone className="w-8 h-8" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}

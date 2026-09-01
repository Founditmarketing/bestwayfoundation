import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import Img from '../../components/Img';
import CityLinks from '../../components/CityLinks';
import { services } from '../../data/services';
import { guides } from '../../data/guides';
import { PHONE_DISPLAY, PHONE_HREF } from '../../config/site';

/** /services — the hub that ties the four service pages together. */
export default function ServicesIndex() {
  return (
    <>
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src="/img/press-piers-installation.jpg"
            alt="Press pier installation beneath an East Texas home"
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
            <span className="text-jac-lime">Services</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase text-white mb-4">
              Our <span className="text-jac-lime">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Four things, done properly, across Deep East Texas: stabilizing slabs, levelling settled
              homes, rebuilding pier and beam structures, and moving the water that caused the problem
              in the first place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group bg-white rounded-xl border border-gray-200 border-b-4 border-b-jac-lime shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Img
                  src={s.heroImage}
                  alt={`${s.name} in East Texas`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jac-navy-dark/70 to-transparent"></div>
                <Img
                  src={s.icon}
                  alt=""
                  sizes="80px"
                  className="absolute bottom-4 right-4 w-16 h-16 object-contain drop-shadow-lg"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-display text-2xl uppercase text-jac-green mb-2">{s.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{s.summary}</p>
                <ul className="space-y-2 mb-6">
                  {s.process.slice(0, 3).map((p) => (
                    <li key={p.title} className="flex items-start gap-2 text-sm text-gray-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-jac-lime shrink-0 mt-0.5" /> {p.title}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.path}
                  className="mt-auto inline-flex items-center gap-2 bg-jac-lime text-jac-green px-6 py-3 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-jac-green hover:text-white transition-colors self-start"
                >
                  {s.name} details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Before You Call Anyone</div>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green mb-2">
            Read These <span className="text-jac-lime">First</span>
          </h2>
          <div className="section-divider mt-4 mb-10 mx-auto"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {guides.map((g) => (
              <Link
                key={g.slug}
                to={g.path}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-jac-lime transition-all"
              >
                <h3 className="font-display text-base uppercase text-jac-green mb-2 leading-snug">{g.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{g.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CityLinks heading={<>Every City We <span className="text-jac-lime">Serve</span></>} />

      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            Not Sure Which One You Need? <span className="text-jac-lime">Neither Is Most People.</span>
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-8">
            That is what the free inspection is for. We take the readings, tell you what the house is
            actually doing, and only then talk about repairs.
          </p>
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

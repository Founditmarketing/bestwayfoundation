import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Phone, ChevronRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import Img from '../../components/Img';
import FaqAccordion from '../../components/FaqAccordion';
import { getGuide, guides } from '../../data/guides';
import { PHONE_DISPLAY, PHONE_HREF } from '../../config/site';

/** /guides/:slug */
export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = getGuide(slug);

  if (!guide) return <Navigate to="/guides" replace />;

  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b-8 border-jac-lime">
        <div className="absolute inset-0 z-0">
          <Img
            src={guide.heroImage}
            alt={guide.title}
            priority
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jac-navy-dark/96 via-jac-green/88 to-jac-green/60"></div>
        </div>
        <div className="relative z-10 max-w-[900px] mx-auto px-6 py-16 md:py-24">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 mb-6 flex-wrap"
          >
            <Link to="/" className="hover:text-jac-lime transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/guides" className="hover:text-jac-lime transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-jac-lime">{guide.title}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white leading-[1.08] mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-jac-lime font-bold">{guide.tagline}</p>
        </div>
      </section>

      {/* The direct answer, first thing on the page — this is the block an AI
          answer engine lifts, so it leads rather than concludes. */}
      <section className="bg-white pt-12">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-jac-lime/15 border-l-4 border-jac-lime rounded-r-lg p-6 md:p-8">
            <div className="flex items-center gap-2 text-jac-green font-bold uppercase tracking-widest text-xs mb-3">
              <Lightbulb className="w-4 h-4" /> The short answer
            </div>
            <p className="text-lg text-jac-charcoal leading-relaxed font-medium">{guide.answer}</p>
          </div>
        </div>
      </section>

      <article className="bg-white py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6 space-y-12">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-3">
                {section.heading}
              </h2>
              <div className="section-divider mb-6"></div>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                {section.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-6 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-jac-lime shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {guide.comparison && (
            <section>
              <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green mb-3">
                {guide.comparison.heading}
              </h2>
              <div className="section-divider mb-6"></div>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full min-w-[640px] text-left border-collapse">
                  <thead>
                    <tr className="bg-jac-green text-white">
                      <th className="font-display uppercase text-xs tracking-widest px-5 py-4 w-1/4"></th>
                      <th className="font-display uppercase text-sm tracking-wide px-5 py-4">
                        {guide.comparison.aLabel}
                      </th>
                      <th className="font-display uppercase text-sm tracking-wide px-5 py-4">
                        {guide.comparison.bLabel}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {guide.comparison.rows.map((row, i) => (
                      <tr key={row.label} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                        <th
                          scope="row"
                          className="px-5 py-4 font-bold text-jac-green text-sm align-top border-t border-gray-200"
                        >
                          {row.label}
                        </th>
                        <td className="px-5 py-4 text-gray-600 text-sm align-top border-t border-gray-200">
                          {row.a}
                        </td>
                        <td className="px-5 py-4 text-gray-600 text-sm align-top border-t border-gray-200">
                          {row.b}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </article>

      <section className="bg-gray-50 py-16 md:py-20 border-y border-gray-200">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="text-jac-green font-bold tracking-widest uppercase text-sm mb-2">Common Questions</div>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-jac-green">
              Questions &amp; <span className="text-jac-lime">Answers</span>
            </h2>
            <div className="section-divider mt-5 mx-auto"></div>
          </div>
          <FaqAccordion faqs={guide.faqs} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl uppercase text-jac-green text-center mb-2">
            Keep <span className="text-jac-lime">Reading</span>
          </h2>
          <div className="section-divider mt-4 mb-10 mx-auto"></div>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((g) => (
              <Link
                key={g.slug}
                to={g.path}
                className="bg-white border border-gray-200 border-b-4 border-b-jac-lime rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-display text-lg uppercase text-jac-green mb-2 leading-snug">{g.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{g.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-jac-green py-16 md:py-20 border-t-8 border-jac-lime">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white uppercase mb-4">
            Want The Answer For <span className="text-jac-lime">Your House?</span>
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-8">
            Free inspection, elevation readings and a written answer anywhere in Deep East Texas — even
            if the answer is that you do not need us.
          </p>
          <a
            href={PHONE_HREF}
            className="text-3xl md:text-4xl font-extrabold text-jac-lime hover:text-white transition-colors inline-flex items-center gap-3"
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

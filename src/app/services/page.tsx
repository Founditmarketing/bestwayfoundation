import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Gutter & Siding Services in Southeast Texas",
  description:
    "Seamless gutter installation, cleaning, gutter guards, siding installation & repair, soffit and fascia work — one licensed, insured crew for your whole exterior.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Professional Gutter &amp; Siding Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-100">
            Everything that protects your home from Southeast Texas rain — from
            seamless gutters fabricated on-site to full siding, soffit, and
            fascia work. Free estimates, written warranties, no surprises.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Detail sections */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:py-16">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-24">
              <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
                {s.name}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">{s.intro}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {s.benefits.slice(0, 4).map((b) => (
                  <li key={b.title} className="flex gap-2 text-sm text-slate-700">
                    <span aria-hidden className="font-black text-amber-450">✓</span>
                    <span>
                      <strong className="text-ink-900">{b.title}.</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner heading="Not sure which service you need?" text="Describe what you're seeing and we'll tell you honestly what it needs — no upsells, ever." />
    </>
  );
}

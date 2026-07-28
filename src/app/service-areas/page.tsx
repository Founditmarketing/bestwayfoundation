import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Service Areas — Golden Triangle & Southeast Texas",
  description:
    "Top Notch serves Nederland, Port Arthur, Groves, Port Neches, Beaumont, Vidor, Orange & Lumberton, TX with seamless gutters, gutter guards, siding, soffit & fascia work.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Where We Work</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-100">
            Based in Nederland and serving the whole Golden Triangle. If
            you&apos;re in Jefferson, Orange, or Hardin County, you&apos;re in
            our backyard.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
          Our Coverage
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((c) => (
            <article key={c.slug} className="flex flex-col rounded-lg border border-ink-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-ink-900">
                {c.name}, TX{" "}
                <span className="text-sm font-medium text-slate-400">{c.zip}</span>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {c.blurb}
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}-${c.slug}-tx`}
                      className="text-ink-700 underline decoration-ink-100 underline-offset-2 hover:text-ink-900 hover:decoration-amber-450"
                    >
                      {s.short} in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-lg bg-ink-50 p-6 text-slate-700">
          <strong className="text-ink-900">Not on the list?</strong> We regularly
          take jobs in surrounding communities. Give us a call at{" "}
          <a href="tel:+14093386602" className="font-bold text-ink-700 hover:underline">
            (409) 338-6602
          </a>{" "}
          and we&apos;ll let you know right away if we can help.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}

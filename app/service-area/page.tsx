import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Area — Portland, TX & the Coastal Bend",
  description: `J Seamless Gutters serves ${site.serviceArea.join(", ")} and surrounding Coastal Bend communities with seamless gutter installation, guards, and repair.`,
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        kicker="Service Area"
        title={`Local to ${site.city}. At home across the Coastal Bend.`}
        body="We're not a franchise dispatching crews from three counties away — we're a local outfit, and this is our backyard."
        image="/images/aerial-neighborhood.jpg"
        imageAlt="Aerial view of a suburban neighborhood"
        nextSectionFill="#f4f7fb"
      />

      <section className="bg-mist-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
                Communities we serve
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
                If it rains on your roof, we can probably reach it.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-800/80">
                Coastal Bend weather doesn&apos;t ease into things — when it
                rains here, it pours. That&apos;s exactly the kind of rain
                seamless gutters are built for, and exactly why we keep our
                service area close enough to show up quickly.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-800/80">
                Don&apos;t see your town below? Call anyway — if you&apos;re
                close, we&apos;ll make it work.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-full border-2 border-navy-900/15 px-7 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:border-brand-500 hover:text-brand-600"
                >
                  Call {site.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                {site.serviceArea.map((town, i) => (
                  <div
                    key={town}
                    className={`flex items-center gap-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${
                      i === 0 ? "border-brand-400/60" : "border-steel-100"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        i === 0 ? "bg-brand-600 text-white" : "bg-mist-50 text-brand-600"
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[15px] font-bold text-navy-900">{town}</div>
                      <div className="text-xs font-medium text-steel-500">
                        {i === 0 ? "Home base" : "Texas"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coastal weather angle */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <Image src="/images/rain-dark.jpg" alt="" fill className="object-cover opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-display text-sm font-bold tracking-[0.25em] text-water-300 uppercase">
                Built for gulf weather
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
                When a gulf storm opens up, your gutters don&apos;t get a warm-up lap.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel-300 md:text-lg">
                Seamless systems have no joints to blow out and no seams to
                fail under load — which is exactly what you want hanging on the
                house when the radar turns red. We pitch and size every run for
                the storms this coast actually gets, not the drizzle in a
                catalog photo.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-water-300 transition-colors hover:text-white"
              >
                See how we build them
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

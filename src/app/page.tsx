import type { Metadata } from "next";
import Link from "next/link";
import SitePhoto from "@/components/SitePhoto";
import ServiceCard from "@/components/ServiceCard";
import StatsStrip from "@/components/StatsStrip";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: `Seamless Gutters & Siding in Nederland, TX | ${site.name}`,
  description:
    "Seamless gutter installation, gutter guards, siding, soffit & fascia repair across Nederland, Port Arthur, Beaumont & Southeast Texas. Owner-operated since 2009. Free estimates: (409) 338-6602.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-widest text-amber-450 uppercase">
              Nederland, TX · Serving Southeast Texas since {site.founded}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Seamless Gutters &amp; Siding Done Right — Because We Don&apos;t
              Cut Corners
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-100">
              Owner-operated, licensed &amp; insured, and trusted on {site.stats.jobs}{" "}
              jobs across the Golden Triangle. Custom seamless gutters
              fabricated at your home, most residential installs finished the
              same day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-amber-450 px-6 py-3 font-bold text-ink-950 transition-transform hover:scale-[1.03]"
              >
                Get a Free Quote
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-md border-2 border-white/60 px-6 py-3 font-bold transition-colors hover:border-amber-450 hover:text-amber-450"
              >
                Call {site.phone}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-100">
              <li>✓ Free estimates</li>
              <li>✓ 10-year workmanship warranty</li>
              <li>✓ Licensed &amp; insured</li>
            </ul>
          </div>
          <SitePhoto
            src="/images/hero/hero-seamless-gutter-install-crew.svg"
            alt="Top Notch crew installing seamless aluminum gutters on a Southeast Texas home"
            width={720}
            height={540}
            priority
            className="w-full rounded-lg object-cover shadow-2xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <StatsStrip />

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            One crew for your whole roofline and exterior — gutters, guards,
            siding, soffit, and fascia, all under one workmanship guarantee.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <SitePhoto
            src="/images/about/about-owner-jason-on-jobsite.svg"
            alt="Owner Jason reviewing a gutter installation on a job site"
            width={640}
            height={480}
            className="w-full rounded-lg object-cover shadow-lg"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
              The Contractor You Actually Want to Hire
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Top Notch is owner-operated: Jason is on your project, not a
              rotating crew you&apos;ve never met. That&apos;s how the work
              stays at his standard — and why most of our jobs come from
              referrals and repeat customers.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                ["Honest & transparent", "Fair quotes with no upsells and no surprise charges — the price we give is the price you pay."],
                ["Quality workmanship", "Every install and repair is done to the standard we'd want on our own homes, and warrantied in writing."],
                ["Local & accountable", "We live here. Our reputation in Nederland, Port Arthur, and Beaumont is the whole business."],
              ].map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <span aria-hidden className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-amber-450 text-xs font-black text-ink-950">
                    ✓
                  </span>
                  <p className="text-slate-700">
                    <strong className="text-ink-900">{title}.</strong> {text}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-6 inline-block font-bold text-ink-700 underline decoration-amber-450 decoration-2 underline-offset-4 hover:text-ink-900">
              More about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews — pending real testimonials from client */}
      <section aria-label="Customer reviews" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="text-center text-3xl font-extrabold text-ink-900 sm:text-4xl">
          What Homeowners Are Saying
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-slate-600">
          Rated {site.stats.rating}★ with {site.stats.satisfaction} customer
          satisfaction across {site.stats.jobs} completed jobs.
        </p>
        {/*
          TODO(client): the old site's review section was empty. Ask the client
          for 3–6 real reviews (name, city, text) or a Google Business Profile
          link, then render them here as <blockquote> cards. See CONTENT-AUDIT.md.
        */}
        <div className="mt-8 rounded-lg border-2 border-dashed border-ink-100 p-8 text-center text-sm text-slate-400">
          Real customer reviews go here — pending from client (see
          CONTENT-AUDIT.md).
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Proudly Serving the Golden Triangle
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Based in Nederland and working across Jefferson, Orange, and Hardin
            counties. Don&apos;t see your town? Call — we probably cover it.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/seamless-gutter-installation-${c.slug}-tx`}
                  className="block rounded-md border border-ink-100 bg-white px-4 py-3 text-center font-semibold text-ink-900 transition-colors hover:border-amber-450 hover:text-ink-700"
                >
                  {c.name}, TX
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

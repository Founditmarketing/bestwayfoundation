import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EstimateForm from "@/components/EstimateForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description: `Request a free, no-pressure gutter estimate in ${site.serviceAreaLabel}. Call ${site.phone} or send us your address and we'll set a time.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Free estimate"
        title="Tell us what the rain is doing."
        body="Send the form or just call — either way you'll get a real look at your roofline and a straight answer, free."
        nextSectionFill="#f4f7fb"
      />

      <section className="bg-mist-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 md:text-3xl">
                Fastest way: call.
              </h2>
              <a
                href={site.phoneHref}
                className="font-display mt-4 inline-block text-4xl font-extrabold tracking-tight text-brand-600 transition-colors hover:text-navy-900 md:text-5xl"
              >
                {site.phone}
              </a>
              <p className="mt-4 max-w-md text-base leading-relaxed text-navy-800/80">
                Prefer to type? The form works too — we&apos;ll call you back
                to set a time. Every estimate is free, and nobody will camp in
                your driveway until you sign something.
              </p>

              <dl className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-water-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-navy-900">Phone</dt>
                    <dd className="mt-0.5 text-sm text-navy-800/75">
                      <a href={site.phoneHref} className="font-semibold text-brand-600 hover:underline">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-water-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-navy-900">Email</dt>
                    <dd className="mt-0.5 text-sm text-navy-800/75">
                      <a href={`mailto:${site.email}`} className="font-semibold text-brand-600 hover:underline">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-water-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-sm font-bold text-navy-900">Service area</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-navy-800/75">
                      {site.serviceAreaLabel} —{" "}
                      {site.serviceArea.slice(0, 6).join(", ")} &amp; nearby.
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl bg-white p-6 shadow-lift md:p-10">
                <h2 className="font-display text-xl font-extrabold text-navy-900 md:text-2xl">
                  Request your free estimate
                </h2>
                <p className="mt-2 mb-7 text-sm text-navy-800/70">
                  Takes about a minute. We&apos;ll call back to schedule.
                </p>
                <EstimateForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

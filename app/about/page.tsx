import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Local Seamless Gutter Specialists",
  description: `J Seamless Gutters is a local gutter company in Portland, TX doing one thing well: seamless gutters, formed on site and fit to your home. Free estimates.`,
};

const values = [
  {
    title: "One trade, done right",
    body: "We don't do roofs, fences, and gutters on the side. Gutters are the whole job — which is why ours go up straight, pitched right, the first time.",
  },
  {
    title: "Your house, your measurements",
    body: "Every run is formed on site from continuous coil and cut to your roofline. Nothing about your house is off-the-shelf; your gutters shouldn't be either.",
  },
  {
    title: "Straight answers",
    body: "If a repair will hold, we say so. If it won't, we show you why. The estimate is free and so is the honesty.",
  },
  {
    title: "Local, and staying that way",
    body: `We live and work around ${site.city}. The homes we work on are our neighbors' — and word travels fast in a small town. We like it that way.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="A local crew that takes rain personally."
        body={`${site.name} builds custom seamless gutter systems for homeowners across ${site.serviceAreaLabel} — formed on site, hung with care, backed by straight answers.`}
        image="/images/home-porch.jpg"
        imageAlt="Classic white home with a wraparound porch"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
                Who we are
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
                Specialists, not generalists.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-800/80">
                J Seamless Gutters does one thing: seamless gutter systems for
                homes. Because that&apos;s the whole business, every part of it
                gets full attention — the measuring, the forming, the pitch,
                the hangers, the downspout placement, the cleanup.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-800/80">
                We bring the machine to your driveway and form each run as one
                continuous piece. It&apos;s more work than bolting together
                store-bought sections. It&apos;s also why our gutters
                don&apos;t leak at the joints — there aren&apos;t any.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-navy-900/15 px-7 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:border-brand-500 hover:text-brand-600"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                  See our work on Facebook
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-lift">
                  <Image
                    src="/images/install-closeup.jpg"
                    alt="Installer fitting a seamless gutter run at the fascia"
                    width={960}
                    height={720}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-navy-900 px-7 py-5 text-white shadow-lift md:block">
                  <div className="font-display text-3xl font-extrabold">0 seams</div>
                  <div className="mt-1 text-xs font-semibold tracking-wider text-water-300 uppercase">
                    in every run we hang
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
              How we work
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
              The things we don&apos;t compromise on.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 120}>
                <div className="flex h-full gap-5 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="font-display shrink-0 bg-gradient-to-b from-brand-400 to-brand-600 bg-clip-text text-4xl font-extrabold text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy-800/75">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's take a look at your roofline."
        body={`Free estimates around ${site.serviceAreaLabel} — we measure, you decide. No pressure either way.`}
      />
    </>
  );
}

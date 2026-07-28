import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gutter Guards & Leaf Protection",
  description: `Gutter guards that keep leaves and debris out so water keeps moving — installed on new or existing gutters in ${site.serviceAreaLabel}. Free estimates.`,
};

const benefits = [
  {
    title: "Stay off the ladder",
    body: "Most gutter injuries start with a homeowner and a wobbly ladder. Guards take routine cleanings — and the climb — off your calendar.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M8 3v18M16 3v18M8 7h8M8 12h8M8 17h8" />
      </svg>
    ),
  },
  {
    title: "No clogs, no overflow",
    body: "A clogged gutter is worse than no gutter — it overflows exactly where you don't want it and holds water against the fascia.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3c3 3.6 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 2-5.4 5-9Z" />
        <path d="M4 20l16-16" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    title: "Nothing living in there",
    body: "Open gutters full of wet leaves are prime real estate for mosquitoes, wasps, and nesting birds. Guards close the door.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M4 9h16M4 14h16M9 4v16M14 4v16" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Gutters that last longer",
    body: "Debris holds moisture and weight. Keeping it out means less sag, less corrosion, and a system that stays pitched the way we hung it.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

export default function GutterGuardsPage() {
  return (
    <>
      <PageHero
        kicker="Gutter Guards"
        title="Keep the leaves out. Keep the water moving."
        body="Guards close your gutters to debris without slowing the water down — so the system keeps working between cleanings, and the cleanings mostly stop."
        image="/images/drop-metal.jpg"
        imageAlt="Water droplet on a metal gutter edge"
        nextSectionFill="#ffffff"
      />

      {/* The problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl shadow-lift">
                <Image
                  src="/images/gutter-old-drip.jpg"
                  alt="An aging gutter, worn by debris and moisture, dripping water"
                  width={960}
                  height={720}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 rounded-full bg-navy-950/85 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur">
                  Without guards
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
                The problem
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
                A clogged gutter is a bucket, not a drain.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-800/80">
                Leaves wash into the gutter, mat down over the outlets, and the
                next storm has nowhere to go but over the edge — right along
                the fascia and down at the foundation. Meanwhile the wet debris
                sits in the trough all season, holding moisture and weight
                against the metal.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-800/80">
                You can keep climbing up to scoop it out a few times a year.
                Or you can close the system once and let it do its job.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-navy-950 relative overflow-hidden py-20 text-white md:py-28">
        <Image src="/images/rain-dark.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/85 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-[0.25em] text-water-300 uppercase">
              Why homeowners add guards
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Set it up once. Stop thinking about it.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 120}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-brand-400/50">
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-brand-600/20 p-3 text-water-300">
                    {b.icon}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold">{b.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-300">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works with new or existing */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-3xl bg-mist-50 p-8 md:p-14 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
                New system or existing gutters — guards fit both.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-800/80">
                Adding guards to a seamless install is the best-case setup:
                one continuous run, closed to debris, pitched to move water.
                Already have gutters you like? We&apos;ll clean them out, check
                the pitch, and fit guards to what&apos;s there.
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
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/roofline-gutter.jpg"
                  alt="Clean roofline with gutter and downspout"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Done cleaning gutters?"
        body={`Ask about leaf protection with your free estimate — new installs or existing gutters, across ${site.serviceAreaLabel}.`}
      />
    </>
  );
}

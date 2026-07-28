import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import Comparison from "@/components/Comparison";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Seamless Gutters in Portland, TX & the Coastal Bend | ${site.name}`,
  description:
    "J Seamless Gutters roll-forms custom seamless gutters on site for homes in Portland, TX and the Coastal Bend. No seams, no leaks. Get a free estimate today.",
};

const problems = [
  {
    title: "Foundation damage",
    body: "Every storm, a bare roofline dumps hundreds of gallons right at your slab. That water works into the soil, and the soil moves your foundation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 21h18M5 21V10l7-6 7 6v11" />
        <path d="M9 21v-4c0-1 .7-1.7 1.7-2.2" strokeDasharray="0" />
        <path d="M7 14l3 3m2-6l4 4m-1-7l3 3" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Flooded flower beds",
    body: "Sheeting runoff carves trenches through mulch, drowns your landscaping, and splatters mud up the siding you just cleaned.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 3c3 3.6 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 2-5.4 5-9Z" />
        <path d="M4 21h16M7 18c1.5 1 3 1 5 1s3.5 0 5-1" />
      </svg>
    ),
  },
  {
    title: "Rotted fascia & soffits",
    body: "Overflowing or leaky gutters wick water behind the boards they hang on. Rot spreads quietly until repairs cost real money.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 9l9-6 9 6" />
        <path d="M5 9v3c2 0 2 1.5 4 1.5S11 12 13 12s2 1.5 4 1.5 2-1.5 4-1.5" strokeWidth="1.5" />
        <path d="M12 17v.01M9 20v.01M15 20v.01" strokeWidth="2.4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "0", label: "seams in every run we hang" },
  { value: "1", label: "continuous piece, formed at your home" },
  { value: "100%", label: "measured & cut to your roofline" },
  { value: "Free", label: "estimates — always" },
];

const steps = [
  {
    n: "01",
    title: "Call or request online",
    body: "Tell us what the rain is doing to your place. We'll set a time that suits you and show up when we say we will.",
  },
  {
    n: "02",
    title: "We measure & form on site",
    body: "Our machine roll-forms your gutters in the driveway — one continuous run per side, cut to the inch. No off-the-shelf sections, no forced fits.",
  },
  {
    n: "03",
    title: "Rain goes where it should",
    body: "Pitched right, hung tight, downspouts placed to carry water away from the house. Then we clean up like we were never there.",
  },
];

const galleryItems = [
  { src: "/images/gallery-1.jpg", alt: "Steep gable roofline against a bright blue sky" },
  { src: "/images/gallery-2.jpg", alt: "Crisp roof eave corner under a deep blue sky" },
  { src: "/images/gallery-3.jpg", alt: "Two-story home with gray-blue siding" },
  { src: "/images/gallery-4.jpg", alt: "Brick home with steep rooflines" },
  { src: "/images/gallery-5.jpg", alt: "Brick house under a clear blue sky" },
  { src: "/images/gallery-6.jpg", alt: "Cottage roofline with dormer window" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy-950">
        <Image
          src="/images/hero-home.jpg"
          alt="Two-story suburban home with clean rooflines under a clear sky"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display flex items-center gap-3 text-sm font-bold tracking-[0.25em] text-water-300 uppercase">
              <span className="inline-block h-px w-10 bg-water-300" aria-hidden />
              Portland, TX · Seamless gutter specialists
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[1.02] font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              One piece.
              <br />
              No seams.
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-water-300 bg-clip-text text-transparent">
                No leaks.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300 md:text-xl">
              We roll-form seamless gutters right at your house, cut to the
              inch for your roofline — so rain ends up away from your
              foundation instead of inside it.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="rounded-full bg-brand-600 px-8 py-4 text-center text-base font-bold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-xl"
              >
                Get a Free Estimate
              </Link>
              <a
                href={site.phoneHref}
                className="group flex items-center justify-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all hover:border-water-300 hover:bg-white/5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-water-300">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
                </svg>
                {site.phone}
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold tracking-wide text-steel-300/90">
              Serving {site.serviceAreaLabel}
            </p>
          </div>
        </div>

        {/* scroll cue */}
        <div aria-hidden className="absolute bottom-16 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 animate-drip rounded-full bg-water-300" />
          </div>
        </div>

        <WaveDivider fill="#ffffff" className="absolute inset-x-0 bottom-0" />
      </section>

      {/* ── Problems gutters solve ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
                Why gutters matter
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-5xl">
                Rain doesn&apos;t knock.
                <br />
                It just moves in.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-navy-800/80 md:text-lg">
                Gutters aren&apos;t trim — they&apos;re the drainage system for
                the single biggest surface on your property: the roof. When
                they fail (or were never there), the water finds somewhere else
                to go. Usually somewhere expensive.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-steel-100 bg-mist-50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-water-300 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    {p.icon}
                  </div>
                  <h3 className="font-display mt-6 text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-800/75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-navy-900 p-8 text-white md:flex-row md:p-10">
              <p className="font-display max-w-xl text-lg font-bold md:text-2xl">
                The fix costs a lot less than the damage. Start with a free
                estimate.
              </p>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold whitespace-nowrap text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500 md:text-base"
              >
                Get a Free Estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="water-gradient relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div className="font-display text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                    {s.value}
                  </div>
                  <div className="mx-auto mt-2 max-w-[180px] text-sm leading-snug font-medium text-water-100/85 md:mx-0">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Seamless comparison ── */}
      <Comparison />

      {/* ── Services ── */}
      <section className="relative bg-white py-20 md:py-28">
        <WaveDivider fill="#ffffff" flip className="absolute inset-x-0 top-0 -translate-y-full" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
              What we do
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-navy-900 md:text-5xl">
              Everything between your roof and the ground.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((s, i) => {
              const href = s.slug === "gutter-guards" ? "/gutter-guards" : `/services#${s.slug}`;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 110}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col rounded-2xl border border-steel-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/60 hover:shadow-card"
                  >
                    <span className="font-display text-sm font-extrabold text-steel-300 transition-colors group-hover:text-brand-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-3 text-xl font-bold text-navy-900 transition-colors group-hover:text-brand-600">
                      {s.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-800/75">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-600">
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                        <path d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
            <Reveal delay={220}>
              <div className="relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-2xl p-8">
                <Image
                  src="/images/install-closeup.jpg"
                  alt="Installer fitting a seamless gutter run at the fascia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <p className="font-display relative text-lg font-bold text-white">
                  Formed on site.
                  <br />
                  Fit to the inch.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-mist-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
              How it works
            </p>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-5xl">
              Three steps. One dry house.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 130}>
                <div className="relative h-full rounded-2xl bg-white p-8 shadow-card">
                  <span className="font-display bg-gradient-to-b from-brand-400 to-brand-600 bg-clip-text text-6xl font-extrabold text-transparent">
                    {step.n}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-800/75">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery preview ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
                Our work
              </p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-5xl">
                Clean lines, every roofline.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-[15px] leading-relaxed text-navy-800/75">
                A gutter done right disappears into the house. Click any photo
                to take a closer look.
              </p>
            </Reveal>
          </div>
          <Reveal delay={100} className="mt-12">
            <Gallery items={galleryItems} />
          </Reveal>
        </div>
      </section>

      {/* ── Service area teaser ── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <Image
          src="/images/aerial-neighborhood.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-[0.25em] text-water-300 uppercase">
              Where we work
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-extrabold tracking-tight md:text-5xl">
              Proudly local to {site.city}, {site.state}.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-300 md:text-lg">
              Based right here in {site.city}, serving homeowners across the
              Coastal Bend.
            </p>
            <div className="mt-8 flex max-w-2xl flex-wrap gap-2.5">
              {site.serviceArea.map((town) => (
                <span
                  key={town}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-water-100"
                >
                  {town}
                </span>
              ))}
            </div>
            <Link
              href="/service-area"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-water-300 transition-colors hover:text-white"
            >
              See our full service area
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

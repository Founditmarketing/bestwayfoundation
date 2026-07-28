import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gutter Services — Installation, Replacement, Repair & Downspouts",
  description: `Seamless gutter installation, gutter replacement, repair, gutter guards, and downspouts for homes in ${site.serviceAreaLabel}. Free estimates.`,
};

type Detail = {
  slug: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  bullets: string[];
  image: string;
  imageAlt: string;
  linkTo?: { href: string; label: string };
};

const details: Detail[] = [
  {
    slug: "seamless-gutter-installation",
    kicker: "01 · Installation",
    title: "Seamless gutter installation",
    paragraphs: [
      "This is the heart of what we do. We bring the machine to your house and roll-form each gutter run as one continuous piece of aluminum — measured off your actual roofline and cut to the inch, right there in the driveway.",
      "No factory sections. No joints stitched together with sealant. The only openings in the whole system are the ones we design in: the outlets that feed your downspouts.",
    ],
    bullets: [
      "Formed on site from continuous aluminum coil",
      "Pitched precisely so water always moves toward the downspouts",
      "Hidden hangers for a clean face — no spikes through the front",
      "Color options to match your fascia and trim",
    ],
    image: "/images/install-closeup.jpg",
    imageAlt: "Installer fitting a seamless aluminum gutter at the fascia board",
  },
  {
    slug: "gutter-replacement",
    kicker: "02 · Replacement",
    title: "Gutter replacement",
    paragraphs: [
      "Sagging runs, rust streaks, seams that drip long after the rain stops — old sectional gutters don't fail all at once, they fail a little more every storm.",
      "We take down the tired system, check the fascia behind it while we're there, and hang a seamless system sized for your roof — not whatever length the store had on the shelf.",
    ],
    bullets: [
      "Haul-away of your old gutters included in the job",
      "Fascia inspection before the new system goes up",
      "Correct sizing for your roof area — not one-size-fits-all",
      "A straight, unbroken line that upgrades the whole exterior",
    ],
    image: "/images/gutter-overflow.jpg",
    imageAlt: "Rainwater pouring over the edge of a failed gutter",
  },
  {
    slug: "gutter-guards",
    kicker: "03 · Protection",
    title: "Gutter guards & leaf protection",
    paragraphs: [
      "A gutter only works while it's open. Guards keep leaves and debris out so water keeps moving — and you stay off the ladder.",
    ],
    bullets: [
      "Keeps debris out, lets water through",
      "Fits new installs or your existing gutters",
      "Fewer clogs, fewer overflows, fewer ladder trips",
    ],
    image: "/images/gutter-old-drip.jpg",
    imageAlt: "An aging, debris-worn gutter dripping water",
    linkTo: { href: "/gutter-guards", label: "See the full Gutter Guards page" },
  },
  {
    slug: "gutter-repair",
    kicker: "04 · Repair",
    title: "Gutter repair",
    paragraphs: [
      "Not every problem needs a whole new system. A run pulled loose in a storm, a low spot where water stands, a downspout that came apart — we fix the piece that failed and make sure the rest is hung right.",
      "If a repair won't hold, we'll tell you straight and show you what replacement would look like instead. No drama, no upsell.",
    ],
    bullets: [
      "Re-pitching runs where water stands",
      "Re-securing gutters pulled from the fascia",
      "Resealing and replacing failed corners and outlets",
      "Storm damage assessments with straight answers",
    ],
    image: "/images/roofline-gutter.jpg",
    imageAlt: "Roof gable with gutter and downspout detail",
  },
  {
    slug: "downspouts-drainage",
    kicker: "05 · Downspouts",
    title: "Downspouts & drainage",
    paragraphs: [
      "Gutters catch the water — downspouts decide where it ends up. A downspout that dumps at the corner of the slab just moves the problem six feet.",
      "We size, place, and extend downspouts so the water your gutters collect actually leaves the building line, instead of soaking in beside it.",
    ],
    bullets: [
      "Downspouts sized to move your roof's real water volume",
      "Placement that works with your landscaping, not against it",
      "Extensions and splash control to carry water clear of the slab",
    ],
    image: "/images/drop-metal.jpg",
    imageAlt: "Water droplet clinging to a metal edge",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Everything between your roof and the ground."
        body={`Installation, replacement, guards, repair, and downspouts — done by the same local crew, across ${site.serviceAreaLabel}.`}
        image="/images/install-roof.jpg"
        imageAlt="Gutter installer working along a roofline under a blue sky"
      />

      {/* quick anchor nav */}
      <nav aria-label="Services on this page" className="bg-white pt-2 pb-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2.5 px-4 sm:px-6 lg:px-8">
          {details.map((d) => (
            <a
              key={d.slug}
              href={`#${d.slug}`}
              className="rounded-full border border-steel-300 px-4 py-2 text-sm font-semibold text-navy-800 transition-colors hover:border-brand-500 hover:bg-brand-600 hover:text-white"
            >
              {d.title}
            </a>
          ))}
        </div>
      </nav>

      {details.map((d, i) => (
        <section
          key={d.slug}
          id={d.slug}
          className={`scroll-mt-24 py-16 md:py-24 ${i % 2 ? "bg-mist-50" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl shadow-lift">
                  <Image
                    src={d.image}
                    alt={d.imageAlt}
                    width={960}
                    height={720}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-navy-900/10 ring-inset" />
                </div>
              </Reveal>
              <Reveal delay={120}>
                <p className="font-display text-sm font-bold tracking-[0.25em] text-brand-600 uppercase">
                  {d.kicker}
                </p>
                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
                  {d.title}
                </h2>
                {d.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-navy-800/80">
                    {p}
                  </p>
                ))}
                <ul className="mt-6 space-y-3">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] font-medium text-navy-900">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M4.5 12.5l5 5 10-11" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Link
                    href="/contact"
                    className="rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500"
                  >
                    Get a Free Estimate
                  </Link>
                  {d.linkTo && (
                    <Link
                      href={d.linkTo.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-navy-900"
                    >
                      {d.linkTo.label}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Not sure which one you need?"
        body={`That's what the free estimate is for. We'll look at what the water is doing and give you a straight answer — ${site.serviceAreaLabel}.`}
      />
    </>
  );
}

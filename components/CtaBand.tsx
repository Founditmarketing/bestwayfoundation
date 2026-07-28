import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CtaBand({
  title = "Ready to stop worrying about rain?",
  body = `Free, no-pressure estimates across ${site.serviceAreaLabel}. We measure, you get a straight answer.`,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="water-gradient relative overflow-hidden">
      {/* faint oversized J watermark */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -right-6 -bottom-24 text-[22rem] leading-none font-extrabold text-white/5 select-none"
      >
        J
      </div>
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-water-100/90 md:text-lg">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-base font-bold text-navy-900 shadow-lift transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

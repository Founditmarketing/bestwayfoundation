import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  heading?: string;
  text?: string;
};

export default function CtaBanner({
  heading = "Ready for a free estimate?",
  text = `Call, text, or send us the details — ${site.responsePromise.toLowerCase()}`,
}: Props) {
  return (
    <section aria-label="Get a free estimate" className="bg-ink-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-12 text-center sm:py-16">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{heading}</h2>
        <p className="max-w-xl text-ink-100">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.phoneHref}
            className="rounded-md bg-amber-450 px-6 py-3 font-bold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Call {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:border-amber-450 hover:text-amber-450"
          >
            Request a Quote
          </Link>
        </div>
        <p className="text-sm text-ink-100/80">
          Free estimates · No obligation · Licensed &amp; insured
        </p>
      </div>
    </section>
  );
}

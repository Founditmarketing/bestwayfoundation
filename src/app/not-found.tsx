import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-bold tracking-widest text-amber-450 uppercase">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
        That page took on water
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-md bg-amber-450 px-6 py-3 font-bold text-ink-950">
          Back to Home
        </Link>
        <a href={site.phoneHref} className="rounded-md border-2 border-ink-900 px-6 py-3 font-bold text-ink-900">
          Call {site.phone}
        </a>
      </div>
    </section>
  );
}

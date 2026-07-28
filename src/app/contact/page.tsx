import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Contact Us — Free Gutter & Siding Estimates",
  description:
    "Get a free, no-obligation gutter or siding estimate in Southeast Texas. Call (409) 338-6602, text (409) 204-1469, or send the form — we respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Get Your Free Estimate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-100">
            Tell us what&apos;s going on with your gutters or siding.{" "}
            {site.responsePromise} No obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 sm:py-16 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-xl font-extrabold text-ink-900">
            Request an estimate online
          </h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <aside className="space-y-8 lg:border-l lg:border-ink-100 lg:pl-8">
          <div>
            <h2 className="text-sm font-bold tracking-wide text-slate-500 uppercase">
              Prefer to talk?
            </h2>
            <p className="mt-2">
              <a href={site.phoneHref} className="text-2xl font-extrabold text-ink-900 hover:text-ink-700">
                {site.phone}
              </a>
            </p>
            <p className="mt-1 text-slate-600">
              Or text us:{" "}
              <a href={site.textHref} className="font-semibold text-ink-700 hover:underline">
                {site.textLine}
              </a>
            </p>
            <p className="mt-1 text-slate-600">
              Email:{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-ink-700 hover:underline">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-slate-500 uppercase">
              Hours
            </h2>
            <p className="mt-2 text-slate-700">
              {site.hours.display}
              <br />
              {site.hours.weekend}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-slate-500 uppercase">
              Service area
            </h2>
            <p className="mt-2 leading-relaxed text-slate-700">
              {cities.map((c) => c.name).join(", ")}, and surrounding Southeast
              Texas communities.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wide text-slate-500 uppercase">
              Find us online
            </h2>
            <p className="mt-2 space-x-4">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-700 hover:underline">
                Facebook
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-700 hover:underline">
                Instagram
              </a>
            </p>
          </div>

          <p className="rounded-md bg-ink-50 p-4 text-sm text-slate-600">
            Licensed &amp; Insured · {site.license}
          </p>
        </aside>
      </section>
    </>
  );
}

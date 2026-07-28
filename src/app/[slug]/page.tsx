import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SitePhoto from "@/components/SitePhoto";
import FaqList from "@/components/FaqList";
import CtaBanner from "@/components/CtaBanner";
import StatsStrip from "@/components/StatsStrip";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { allServiceSlugs, lookupSlug } from "@/lib/slugs";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = lookupSlug(slug);
  if (!entry) return {};

  if (entry.kind === "hub") {
    const s = entry.service;
    return {
      title: `${s.name} in Southeast Texas`,
      description: `${s.tagline} Serving Nederland, Port Arthur, Beaumont & the Golden Triangle. Free estimates: ${site.phone}.`,
      alternates: { canonical: `/${slug}` },
    };
  }

  const { service: s, city: c } = entry;
  return {
    title: `${s.name} in ${c.name}, TX`,
    description: `${s.short} in ${c.name}, TX (${c.zip}) by an owner-operated, licensed & insured local contractor. Free estimates — call ${site.phone}.`,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const entry = lookupSlug(slug);
  if (!entry) notFound();

  const { service } = entry;
  const city = entry.kind === "city" ? entry.city : undefined;
  const locationLabel = city ? `${city.name}, TX` : "Southeast Texas";

  return (
    <>
      {/* Hero */}
      <section className="bg-ink-950 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-widest text-amber-450 uppercase">
              {city ? `Serving ${city.name} & surrounding areas` : `Serving ${site.region}`}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {service.name} in {locationLabel}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-100">
              {service.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
          </div>
          <SitePhoto
            src={service.image}
            alt={service.imageAlt}
            width={720}
            height={540}
            priority
            className="w-full rounded-lg object-cover shadow-2xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* City context strip */}
      {city && (
        <section className="border-b border-ink-100 bg-ink-50">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <p className="leading-relaxed text-slate-700">
              <strong className="text-ink-900">
                Why {city.name} homeowners call us:
              </strong>{" "}
              {city.blurb}
            </p>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
          Why Choose Top Notch for {service.short}
          {city ? ` in ${city.name}` : ""}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b) => (
            <div key={b.title} className="rounded-lg border border-ink-100 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-ink-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <StatsStrip />

      <FaqList
        faqs={service.faqs}
        heading={`${service.short} Questions${city ? ` — ${city.name}, TX` : ""}`}
      />

      {/* Nearby cities for the same service */}
      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl font-extrabold text-ink-900 sm:text-2xl">
            {service.short} Across Southeast Texas
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== city?.slug)
              .map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${service.slug}-${c.slug}-tx`}
                    className="block rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-amber-450 hover:text-ink-900"
                  >
                    {c.name}, TX
                  </Link>
                </li>
              ))}
          </ul>

          <h2 className="mt-10 text-xl font-extrabold text-ink-900 sm:text-2xl">
            Other Services{city ? ` in ${city.name}` : " We Offer"}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <li key={s.slug}>
                  <Link
                    href={city ? `/${s.slug}-${city.slug}-tx` : s.hasHubPage ? `/${s.slug}` : "/services"}
                    className="block rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-amber-450 hover:text-ink-900"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        heading={`Need ${service.short.toLowerCase()}${city ? ` in ${city.name}` : ""}?`}
      />
    </>
  );
}

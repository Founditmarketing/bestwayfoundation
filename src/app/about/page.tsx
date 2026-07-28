import type { Metadata } from "next";
import SitePhoto from "@/components/SitePhoto";
import StatsStrip from "@/components/StatsStrip";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Owner-Operated Since 2009",
  description:
    "Meet Top Notch Seamless Rain Gutters & Siding: owner-operated by Southeast Texas native Jason since 2009. 1,200+ jobs across the Golden Triangle. Licensed & insured.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            The Contractor We Always Wished Existed
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-100">
            Owner-operated, Southeast Texas born and raised, and building a
            reputation one roofline at a time since {site.founded}.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Our Story
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
            <p>
              Top Notch started in {site.founded} with a simple frustration:
              hiring a contractor shouldn&apos;t feel like a gamble. Owner
              Jason — a Southeast Texas native — set out to build the company
              he&apos;d always wished existed as a homeowner: one that shows up
              when it says it will, quotes what the job actually costs, and
              does the work like its own name is on the house. Because it is.
            </p>
            <p>
              Fifteen-plus years and more than 1,200 jobs later, that&apos;s
              still how it runs. Jason personally manages every project rather
              than handing it off to crews you&apos;ve never met — which is why
              the finished work looks the same on job #1,201 as it did on job
              #1.
            </p>
            <p>
              We work across the Golden Triangle — Jefferson, Orange, and
              Hardin counties — installing seamless gutters, gutter guards,
              and siding, and repairing the soffit and fascia that Gulf Coast
              weather loves to chew up.
            </p>
          </div>
        </div>
        <SitePhoto
          src="/images/about/about-owner-jason-portrait.svg"
          alt="Portrait of Jason, owner of Top Notch Seamless Rain Gutters & Siding"
          width={560}
          height={640}
          className="w-full rounded-lg object-cover shadow-lg"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </section>

      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">
            What We Stand On
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              ["Honest & Transparent", "Fair pricing, no upsells, no surprise charges. If you don't need the work, we'll say so."],
              ["Quality Workmanship", "Every job is done to the owner's personal standard and backed by a written workmanship warranty."],
              ["Locally Owned", "This region is home. Our reputation with your neighbors matters more to us than any single job."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-ink-100 bg-white p-6">
                <h3 className="text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Licensed contractor, State of Texas ({site.license}) · Fully
            insured · Free estimates
          </p>
        </div>
      </section>

      <StatsStrip />
      <CtaBanner heading="Let's talk about your project" />
    </>
  );
}

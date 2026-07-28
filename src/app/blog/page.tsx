import type { Metadata } from "next";
import Link from "next/link";
import SitePhoto from "@/components/SitePhoto";
import CtaBanner from "@/components/CtaBanner";
import { postsByDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Gutter & Siding Tips for Southeast Texas Homeowners",
  description:
    "Practical advice from a working contractor: gutter cleaning schedules, seamless vs. sectional, siding materials for Gulf weather, fascia warning signs & more.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Gutter &amp; Siding Tips for Southeast Texas Homeowners
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-100">
            Straight answers from the crew that does the work — no fluff, no
            scare tactics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {postsByDate.map((post) => (
            <li key={post.slug}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                <SitePhoto
                  src={post.image}
                  alt={post.imageAlt}
                  width={640}
                  height={400}
                  className="aspect-[8/5] w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="rounded-full bg-ink-50 px-2.5 py-0.5 font-semibold text-ink-700">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{post.dateDisplay}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readMinutes} min read</span>
                  </p>
                  <h2 className="mt-3 text-lg font-bold leading-snug text-ink-900">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.description}
                  </p>
                  <p className="mt-4 text-sm font-bold text-amber-450 group-hover:underline">
                    Read article →
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner heading="Have a question we didn't answer?" />
    </>
  );
}

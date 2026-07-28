import { site } from "@/lib/site";

/* VERIFY with client before launch — numbers sourced from the previous site. */
const stats = [
  { value: site.stats.years, label: "Years in business" },
  { value: site.stats.jobs, label: "Jobs completed" },
  { value: site.stats.satisfaction, label: "Customer satisfaction" },
  { value: `${site.stats.rating}★`, label: "Average rating" },
];

export default function StatsStrip() {
  return (
    <section aria-label="Company track record" className="border-y border-ink-100 bg-ink-50">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <dt className="order-2 text-xs font-medium tracking-wide text-slate-500 uppercase sm:text-sm">
              {s.label}
            </dt>
            <dd className="text-2xl font-extrabold text-ink-900 sm:text-3xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

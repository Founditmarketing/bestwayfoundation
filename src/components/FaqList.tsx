import type { Faq } from "@/lib/services";
import { faqSchema, jsonLd } from "@/lib/schema";

type Props = {
  faqs: Faq[];
  heading?: string;
};

export default function FaqList({ faqs, heading = "Frequently Asked Questions" }: Props) {
  return (
    <section aria-label="Frequently asked questions" className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />
      <h2 className="text-2xl font-extrabold text-ink-900 sm:text-3xl">{heading}</h2>
      <div className="mt-6 divide-y divide-ink-100">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden
                className="shrink-0 text-amber-450 transition-transform group-open:rotate-45"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

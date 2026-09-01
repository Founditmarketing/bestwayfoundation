import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface Faq {
  q: string;
  a: string;
}

/**
 * FAQ list built on <details>/<summary>.
 *
 * Deliberately not a JS accordion: an answer that only enters the DOM when a
 * user clicks is an answer no crawler ever reads, and FAQ content is the
 * single most quoted format in AI search. Every answer is in the HTML from
 * the first byte; the disclosure is presentation only.
 */
export default function FaqAccordion({
  faqs,
  defaultOpenFirst = true,
}: {
  faqs: Faq[];
  defaultOpenFirst?: boolean;
}) {
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {faqs.map((faq, i) => (
        <details key={faq.q} open={defaultOpenFirst && i === 0} className="group">
          <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-lg md:text-xl uppercase text-jac-green pr-4">{faq.q}</h3>
            <ChevronDown className="w-5 h-5 text-jac-lime shrink-0 transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div className="pb-6 -mt-1">
            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";

/** Fixed bottom bar on mobile — click-to-call is the #1 action for this business. */
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-navy-800 bg-navy-950/95 backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-white active:bg-navy-800"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-brand-600 py-4 text-sm font-bold text-white active:bg-brand-500"
      >
        Free Estimate
      </Link>
    </div>
  );
}

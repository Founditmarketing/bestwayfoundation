import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={52} height={52} />
              <span className="leading-tight">
                <span className="font-display block text-lg font-extrabold tracking-wide uppercase">
                  J Seamless
                </span>
                <span className="font-display block text-lg font-extrabold tracking-[0.28em] text-water-300 uppercase">
                  Gutters
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-300">
              Custom seamless gutters, roll-formed on site and fit to your home
              — serving {site.serviceAreaLabel}. One continuous piece. Zero
              seams to leak.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-water-300 transition-colors hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
              </svg>
              Find us on Facebook
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-steel-500 uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/services", "Services"],
                ["/gutter-guards", "Gutter Guards"],
                ["/service-area", "Service Area"],
                ["/about", "About"],
                ["/contact", "Free Estimate"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-steel-300 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold tracking-[0.2em] text-steel-500 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-steel-300">
              <li>
                <a href={site.phoneHref} className="font-bold text-white transition-colors hover:text-water-300">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                {site.city}, {site.state}
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-500"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-steel-500">
          © {new Date().getFullYear()} {site.name} · {site.city}, {site.state}
        </div>
      </div>
    </footer>
  );
}

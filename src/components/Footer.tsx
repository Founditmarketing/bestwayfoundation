import Link from "next/link";
import { site } from "@/lib/site";
import { services, hubServices } from "@/lib/services";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{site.shortName}</p>
          <p className="mt-1 text-sm">Seamless Rain Gutters &amp; Siding L.L.C.</p>
          <p className="mt-4 text-sm leading-relaxed">
            Owner-operated exterior contractor serving the Golden Triangle
            since {site.founded}. We don&apos;t cut corners.
          </p>
          <p className="mt-4 text-sm">
            <a href={site.phoneHref} className="block font-semibold text-white hover:text-amber-450">
              {site.phone}
            </a>
            <a href={site.textHref} className="block hover:text-amber-450">
              Text: {site.textLine}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-amber-450">
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-xs">
            {site.hours.display}
            <br />
            {site.hours.weekend}
          </p>
        </div>

        <nav aria-label="Services">
          <p className="text-sm font-bold tracking-wide text-white uppercase">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-amber-450">All Services</Link>
            </li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.hasHubPage ? `/${s.slug}` : "/services"}
                  className="hover:text-amber-450"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas">
          <p className="text-sm font-bold tracking-wide text-white uppercase">Service Areas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/seamless-gutter-installation-${c.slug}-tx`}
                  className="hover:text-amber-450"
                >
                  {c.name}, TX
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="font-semibold hover:text-amber-450">
                All areas →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <p className="text-sm font-bold tracking-wide text-white uppercase">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-amber-450">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-amber-450">Project Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-amber-450">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-amber-450">Get a Free Quote</Link></li>
            {hubServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-amber-450">{s.short}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-bold tracking-wide text-white uppercase">Follow</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href={site.social.facebook} rel="noopener noreferrer" target="_blank" className="hover:text-amber-450">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.social.instagram} rel="noopener noreferrer" target="_blank" className="hover:text-amber-450">
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-ink-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · Licensed &amp; Insured · {site.license}
          </p>
          <p>Serving Nederland, Port Arthur, Beaumont &amp; Southeast Texas</p>
        </div>
      </div>
    </footer>
  );
}

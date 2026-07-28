"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gutter-cleaning", label: "Gutter Cleaning" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink-950 text-white shadow-lg">
      {/* Utility bar: license + hours (desktop only) */}
      <div className="hidden border-b border-white/10 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs text-ink-100">
          <p>
            Licensed &amp; Insured · {site.license} · {site.hours.display}
          </p>
          <p>
            Text us:{" "}
            <a href={site.textHref} className="font-semibold text-amber-450 hover:underline">
              {site.textLine}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          {/* TODO: swap for real logo — /images/brand/logo-topnotch-horizontal.svg */}
          <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded bg-amber-450 text-base font-black text-ink-950">
            TN
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold sm:text-base">
              Top Notch
            </span>
            <span className="block truncate text-[11px] text-ink-100 sm:text-xs">
              Seamless Rain Gutters &amp; Siding
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={`transition-colors hover:text-amber-450 ${
                    pathname === l.href ? "text-amber-450" : "text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Click-to-call: primary action, always visible on mobile */}
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-amber-450 px-3 py-2 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03] sm:px-4"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-md p-2 hover:bg-white/10 lg:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className={`block border-b border-white/5 py-3 text-base font-medium ${
                    pathname === l.href ? "text-amber-450" : "text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-3 py-3 text-sm">
              <a href={site.textHref} className="font-semibold text-amber-450">
                Text: {site.textLine}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
    </svg>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gutter-guards", label: "Gutter Guards" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 shadow-[0_4px_24px_rgb(10_27_61/0.10)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          solid ? "h-16" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center gap-3" aria-label="J Seamless Gutters — home">
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            priority
            className={`transition-all duration-300 ${solid ? "h-10 w-10" : "h-11 w-11"}`}
          />
          <span className="leading-tight">
            <span
              className={`font-display block text-[15px] font-extrabold tracking-wide uppercase transition-colors ${
                solid ? "text-navy-900" : "text-white"
              }`}
            >
              J Seamless
            </span>
            <span
              className={`font-display block text-[15px] font-extrabold tracking-[0.28em] uppercase transition-colors ${
                solid ? "text-brand-600" : "text-water-300"
              }`}
            >
              Gutters
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`nav-link text-sm font-semibold transition-colors ${
                solid
                  ? "text-navy-800 hover:text-brand-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`text-sm font-bold transition-colors ${
              solid ? "text-navy-900 hover:text-brand-600" : "text-white hover:text-water-300"
            }`}
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-lg"
          >
            Get a Free Estimate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-11 w-11 items-center justify-center rounded-lg lg:hidden ${
            solid ? "text-navy-900" : "text-white"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[420px] border-t border-steel-100 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`border-b border-steel-100 py-3.5 text-base font-semibold last:border-0 ${
                pathname === item.href ? "text-brand-600" : "text-navy-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 mb-1 rounded-full bg-brand-600 px-5 py-3 text-center text-base font-bold text-white"
          >
            Get a Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-lg border border-steel-300 bg-white px-4 py-3 text-navy-900 placeholder:text-steel-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-400/40 focus:outline-none transition-shadow";

export default function EstimateForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real handler before launch — options:
    //   1. A form service (Formspree, Basin, Web3Forms) — fastest, no backend.
    //   2. A Next.js route handler (app/api/estimate/route.ts) that emails
    //      via Resend/SendGrid to the owner's inbox.
    // For now we just log and show the success state so the UX is complete.
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Estimate request (stub):", data);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-brand-400/40 bg-water-100 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 12.5l5 5 10-11" />
          </svg>
        </div>
        <h3 className="font-display mt-4 text-xl font-extrabold text-navy-900">
          Request received!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-800">
          We&apos;ll reach out shortly to set up your free estimate. Need us
          sooner? Call{" "}
          <a href={site.phoneHref} className="font-bold text-brand-600 underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold text-navy-900">
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold text-navy-900">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" placeholder="(361) 555-0000" className={inputClass} />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold text-navy-900">
        Address
        <input
          name="address"
          required
          autoComplete="street-address"
          placeholder="Street address, city"
          className={inputClass}
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy-900">
        What do you need?
        <select name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Choose a service…
          </option>
          {site.services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
          <option value="not-sure">Not sure — take a look for me</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-semibold text-navy-900">
        <span>
          Anything we should know?{" "}
          <span className="font-normal text-steel-500">(optional)</span>
        </span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Overflowing corner, sagging run, new build…"
          className={inputClass}
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-lg"
      >
        Request My Free Estimate
      </button>
      <p className="text-center text-xs text-steel-500">
        No spam, no obligation — we&apos;ll call to schedule a time that works.
      </p>
    </form>
  );
}

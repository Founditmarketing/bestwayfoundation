"use client";

import { useState } from "react";

const serviceOptions = [
  "Seamless Gutter Installation",
  "Gutter Cleaning",
  "Gutter Guards",
  "Siding Installation",
  "Siding Repair",
  "Soffit Repair",
  "Fascia Repair",
  "Other / Not Sure",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-bold text-green-800">Request received!</p>
        <p className="mt-2 text-green-700">
          Thanks for reaching out — we&apos;ll get back to you within 24 hours
          (usually much sooner).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Phone number" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <Field label="Email (optional)" name="email" type="email" autoComplete="email" />
      <Field label="Property address" name="address" required autoComplete="street-address" />

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-semibold text-ink-900">
          Service needed <span aria-hidden className="text-red-600">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-800"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="mb-1 block text-sm font-semibold text-ink-900">
          Additional details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us about your project — home size, what's going on, timing…"
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-800 placeholder:text-slate-400"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Something went wrong sending your request. Please try again, or call
          us directly at (409) 338-6602.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-amber-450 px-6 py-3 font-bold text-ink-950 transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Estimate"}
      </button>
      <p className="text-xs text-slate-500">
        No obligation. We respond within 24 hours. Your info is only used to
        contact you about your estimate.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-semibold text-ink-900">
        {label}{" "}
        {required && (
          <span aria-hidden className="text-red-600">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-800"
      />
    </div>
  );
}

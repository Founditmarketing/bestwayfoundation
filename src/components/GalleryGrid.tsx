"use client";

import { useState } from "react";
import SitePhoto from "./SitePhoto";
import { galleryCategories, galleryItems } from "@/lib/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("All");
  const items =
    active === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              active === c
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-ink-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.image} className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm">
            <SitePhoto
              src={item.image}
              alt={item.alt}
              width={640}
              height={480}
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <figcaption className="flex items-center justify-between gap-2 p-4">
              <span className="text-sm font-semibold text-ink-900">{item.caption}</span>
              <span className="shrink-0 rounded-full bg-ink-50 px-2.5 py-0.5 text-xs font-medium text-ink-700">
                {item.category}
              </span>
            </figcaption>
          </li>
        ))}
      </ul>
    </div>
  );
}

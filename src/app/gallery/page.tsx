import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Project Gallery — Gutter & Siding Work Across Southeast Texas",
  description:
    "Real photos from real jobs: seamless gutter installations, gutter guards, and siding projects in Nederland, Port Arthur, Beaumont, Groves & beyond.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl">Our Work</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-100">
            Real photos from real jobs across the Golden Triangle. No stock
            photography — this is what your project will actually look like.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <GalleryGrid />
      </section>

      <CtaBanner heading="Want your house in this gallery?" />
    </>
  );
}

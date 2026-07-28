import type { MetadataRoute } from "next";

const base = "https://jseamlessgutters.com"; // TODO: set the real production domain

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/gutter-guards`, priority: 0.9 },
    { url: `${base}/service-area`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.9 },
  ];
}

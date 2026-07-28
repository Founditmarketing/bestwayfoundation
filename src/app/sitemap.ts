import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allServiceSlugs } from "@/lib/slugs";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/service-areas",
    "/gallery",
    "/about",
    "/contact",
    "/blog",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...allServiceSlugs.map((slug) => ({
      url: `${site.url}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

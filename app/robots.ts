import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jseamlessgutters.com/sitemap.xml", // TODO: set the real production domain
  };
}

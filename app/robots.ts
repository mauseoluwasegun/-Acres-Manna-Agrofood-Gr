import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const isIndexable = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.SITE_INDEXABLE === "true";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isIndexable ? "/" : undefined,
      disallow: isIndexable ? undefined : "/",
    },
    sitemap: isIndexable ? `${SITE_URL}/sitemap.xml` : undefined,
  };
}

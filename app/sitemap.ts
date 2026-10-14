import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { NAV_LINKS, SITE_URL } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";

const ADDITIONAL_ROUTES = [
  "/become-a-supplier",
  "/become-a-distributor",
  "/business-enquiries",
  "/privacy",
  "/terms",
  "/cookies",
  ...PRODUCTS.map(({ slug }) => `/products/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) => {
    const localeRoot = locale === routing.defaultLocale ? "" : `/${locale}`;
    const routes = [
      ...NAV_LINKS.map(({ href }) => href),
      ...ADDITIONAL_ROUTES,
    ];

    return routes.map((href) => ({
      url: `${SITE_URL}${localeRoot}${href === "/" ? "" : href}`,
      changeFrequency: "monthly" as const,
      priority: href === "/" ? 1 : 0.7,
    }));
  });
}

import type { MetadataRoute } from "next";

import { DEMOS, SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Generira `/sitemap.xml` ob buildu.
 * URL-ji uporabljajo kanonično domeno https://www.strannakljuc.si
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = SITE.url; // https://www.strannakljuc.si

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/primeri`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...DEMOS.map((demo) => ({
      url: `${base}/primeri/${demo.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/zasebnost`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

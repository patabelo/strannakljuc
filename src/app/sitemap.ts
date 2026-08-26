import type { MetadataRoute } from "next";

import { DEMOS, SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Generira `/sitemap.xml` ob buildu (Next.js Metadata Route).
 * Vključuje domačo stran, pravno, seznam primerov in vsak primer posebej.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/primeri`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...DEMOS.map((demo) => ({
      url: `${SITE.url}/primeri/${demo.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE.url}/zasebnost`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Generira `/robots.txt` ob buildu.
 * Dovoli vsem iskalnikom indeksiranje celotne strani.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.strannakljuc.si/sitemap.xml",
    host: "https://www.strannakljuc.si",
  };
}

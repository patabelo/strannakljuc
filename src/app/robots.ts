import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Allow search crawlers (Google, Bing) and citation-style AI crawlers
 * (ChatGPT, Gemini, Perplexity, Claude). Cloudflare may still prepend
 * a managed block for some of these — turn off
 * "Set your preference to block training in robots.txt" in the zone
 * Security settings if ChatGPT/Perplexity should be able to cite the site.
 */
const SEARCH_AND_CITATION_BOTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SEARCH_AND_CITATION_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
      {
        userAgent: ["Amazonbot", "Bytespider", "CCBot"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

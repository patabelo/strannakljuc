import type { Metadata } from "next";

import { Services } from "@/components/site/services";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Storitve",
  description:
    "Izdelam enostranske strani, strani za podjetja, SEO za Google in GEO za odgovore v ChatGPT, Gemini in Perplexity. Dodam kalkulator ponudbe in zajem računov.",
  alternates: { canonical: "/storitve" },
};

export default function StoritvePage() {
  return (
    <SiteFrame>
      <Services />
    </SiteFrame>
  );
}

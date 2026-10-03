import type { Metadata } from "next";

import { Faq } from "@/components/site/faq";
import { FaqJsonLd } from "@/components/site/json-ld";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Vprašanja",
  description:
    "Odgovori o ceni, roku, gostovanju, WordPressu, kalkulatorju ponudbe in zajemu računov.",
  alternates: { canonical: "/vprasanja" },
};

export default function VprasanjaPage() {
  return (
    <SiteFrame>
      <FaqJsonLd />
      <Faq />
    </SiteFrame>
  );
}

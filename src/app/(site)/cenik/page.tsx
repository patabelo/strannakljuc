import type { Metadata } from "next";

import { Pricing } from "@/components/site/pricing";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Cenik",
  description:
    "Uvodna cena enostranske strani je 290 €. Do 5 podstrani stane 490 €, do 10 podstrani 890 €. Kalkulator ponudbe in zajem računov se dodata k strani.",
  alternates: { canonical: "/cenik" },
};

export default function CenikPage() {
  return (
    <SiteFrame>
      <Pricing />
    </SiteFrame>
  );
}

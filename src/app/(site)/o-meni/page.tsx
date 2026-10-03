import type { Metadata } from "next";

import { About } from "@/components/site/about";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "O meni",
  description:
    "Sem Patrick Belcl s.p. iz Ljutomera. Spletne strani izdelujem sam, brez agencije in brez posrednika. Delam po vsej Sloveniji.",
  alternates: { canonical: "/o-meni" },
};

export default function OMeniPage() {
  return (
    <SiteFrame>
      <About />
    </SiteFrame>
  );
}

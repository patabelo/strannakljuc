import type { Metadata } from "next";

import { Contact } from "@/components/site/contact";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napišite mi za ponudbo. Telefon 070 914 756, e-pošta patrick@strannakljuc.si. Odgovorim običajno isti dan.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <SiteFrame>
      <Contact />
    </SiteFrame>
  );
}

import type { Metadata } from "next";

import { Process } from "@/components/site/process";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Postopek izdelave",
  description:
    "Izdelava gre v štirih korakih: pogovor, osnutek, izdelava in objava. Enostranska stran je pripravljena v 5–7 delovnih dneh po potrditvi osnutka.",
  alternates: { canonical: "/kako-deluje" },
};

export default function KakoDelujePage() {
  return (
    <SiteFrame>
      <Process />
    </SiteFrame>
  );
}

import type { Metadata } from "next";

import { Collaboration } from "@/components/site/collaboration";
import { SiteFrame } from "@/components/site/site-frame";

export const metadata: Metadata = {
  title: "Sodelovanje",
  description:
    "Po objavi gostovanje stane 29 € na mesec ali 290 € na leto. V ceni so .si domena, https, varnostne kopije in do 2 manjša popravka na mesec.",
  alternates: { canonical: "/sodelovanje" },
};

export default function SodelovanjePage() {
  return (
    <SiteFrame>
      <Collaboration />
    </SiteFrame>
  );
}

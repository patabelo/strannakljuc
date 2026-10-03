import type { Metadata } from "next";

import { SettingsDesk } from "@/components/app/settings-desk";

export const metadata: Metadata = {
  title: "Nastavitve orodij",
  description:
    "Cenik podjetja in e-pošta, na katero prispejo povpraševanja iz kalkulatorja ponudbe.",
  alternates: { canonical: "/aplikacija/nastavitve" },
};

export default function NastavitvePage() {
  return <SettingsDesk />;
}

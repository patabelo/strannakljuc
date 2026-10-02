import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppShell } from "@/components/app/app-shell";

export const metadata: Metadata = {
  title: "Orodja za obrtnike",
  description:
    "Demo portal za obrtnike: bralnik računov in kalkulatorji ponudb za fasaderstvo, kovinarstvo, gipsarijo in strehe.",
  alternates: { canonical: "/aplikacija" },
};

export default function AplikacijaLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}

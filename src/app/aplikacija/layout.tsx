import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppShell } from "@/components/app/app-shell";

export const metadata: Metadata = {
  title: "Kalkulator ponudbe in zajem računov",
  description:
    "Kalkulator ponudbe izračuna okvirno ceno in zbere kontakt. Zajem računov prebere fotografijo ali PDF v znesek, DDV in TRR.",
  alternates: { canonical: "/aplikacija" },
};

export default function AplikacijaLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}

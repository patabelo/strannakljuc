import type { Metadata } from "next";

import { InvoiceDesk } from "@/components/app/invoice-desk";

export const metadata: Metadata = {
  title: "Zajem računov",
  description:
    "Zajem računov prebere znesek, DDV, TRR in sklic s fotografije ali iz PDF. Podatke preverite in izvozite preglednico za računovodjo.",
  alternates: { canonical: "/aplikacija/racuni" },
};

export default function RacuniPage() {
  return <InvoiceDesk />;
}

import type { Metadata } from "next";

import { InvoiceDesk } from "@/components/app/invoice-desk";

export const metadata: Metadata = {
  title: "Bralnik računov",
  description: "Bralnik računov prebere izdajatelja, znesek, DDV, IBAN, sklic, EOR in ZOI neposredno s fotografije.",
  alternates: { canonical: "/aplikacija/racuni" },
};

export default function RacuniPage() {
  return <InvoiceDesk />;
}

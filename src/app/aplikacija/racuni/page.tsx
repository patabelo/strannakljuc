import type { Metadata } from "next";

import { InvoiceDesk } from "@/components/app/invoice-desk";

export const metadata: Metadata = {
  title: "Bralnik računov",
  description: "Bralnik računov prebere podatke s fotografije ali iz PDF dokumenta.",
  alternates: { canonical: "/aplikacija/racuni" },
};

export default function RacuniPage() {
  return <InvoiceDesk />;
}

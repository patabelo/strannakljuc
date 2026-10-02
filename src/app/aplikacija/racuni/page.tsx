import type { Metadata } from "next";

import { InvoiceDesk } from "@/components/app/invoice-desk";

export const metadata: Metadata = {
  title: "Bralnik računov",
  description: "Demo bralnik računov: iz fotografije pripravi izdajatelja, znesek, IBAN in sklic.",
  alternates: { canonical: "/aplikacija/racuni" },
};

export default function RacuniPage() {
  return <InvoiceDesk />;
}

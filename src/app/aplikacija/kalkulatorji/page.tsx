import type { Metadata } from "next";

import { QuoteDesk } from "@/components/app/quote-desk";

export const metadata: Metadata = {
  title: "Kalkulator ponudbe",
  description:
    "Kalkulator ponudbe na vaši spletni strani: stranka vnese mere, vidi okvirno ceno in pusti povpraševanje. Fasade, kovina, suhomontaža in strehe.",
  alternates: { canonical: "/aplikacija/kalkulatorji" },
};

export default function KalkulatorjiPage() {
  return <QuoteDesk />;
}

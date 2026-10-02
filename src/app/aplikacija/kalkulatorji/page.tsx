import type { Metadata } from "next";

import { QuoteDesk } from "@/components/app/quote-desk";

export const metadata: Metadata = {
  title: "Kalkulatorji ponudb",
  description:
    "Okvirne ponudbe za fasaderstvo, kovinarstvo, gipsarijo in strehe, z obrazcem za povpraševanje.",
  alternates: { canonical: "/aplikacija/kalkulatorji" },
};

export default function KalkulatorjiPage() {
  return <QuoteDesk />;
}

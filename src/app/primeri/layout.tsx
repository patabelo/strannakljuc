import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Primer izdelave — Stran na ključ",
    default: "Primeri izdelave spletnih strani",
  },
};

export default function DemosLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-svh bg-white text-zinc-900">{children}</div>;
}

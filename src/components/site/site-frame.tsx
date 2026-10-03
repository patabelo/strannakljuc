import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/site-header";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

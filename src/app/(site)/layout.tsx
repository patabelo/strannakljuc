import type { ReactNode } from "react";

import { ParallaxSky } from "@/components/site/parallax-sky";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col text-foreground">
      <ParallaxSky />
      {children}
    </div>
  );
}

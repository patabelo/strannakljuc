import type { ReactNode } from "react";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark flex min-h-svh flex-col bg-background text-foreground">
      {children}
    </div>
  );
}

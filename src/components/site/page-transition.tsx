import type { ReactNode } from "react";

/**
 * Wraps a route segment so it fades/slides in on every navigation (see
 * app/(site)/template.tsx and app/primeri/template.tsx). Next.js remounts
 * `template.tsx` on each visit, so this plain CSS animation replays
 * automatically — no client JS, no animation library.
 *
 * `flex min-h-0 flex-1 flex-col` keeps this wrapper transparent to the
 * surrounding flex layout (sticky header, `flex-1` main, footer at the
 * bottom) so it behaves as if the children were direct flex items.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="page-transition flex min-h-0 flex-1 flex-col">
      {children}
    </div>
  );
}

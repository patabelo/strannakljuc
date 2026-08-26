import type { ReactNode } from "react";

import { PageTransition } from "@/components/site/page-transition";

export default function PrimeriTemplate({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}

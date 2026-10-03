import type { Metadata } from "next";

import { HowIBuild } from "@/components/site/how-i-build";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Kako je narejena spletna stran",
  description:
    "Strani ne delam v WordPressu. Next.js stran sestavim vnaprej in jo objavim na Cloudflare, zato ob obisku ni baze in ni vtičnikov.",
  alternates: { canonical: "/kako-delam" },
  openGraph: {
    title: "Kako je narejena spletna stran",
    description:
      "Next.js stran sestavim vnaprej in jo objavim na Cloudflare. Običajni WordPress stran zgradi ob vsakem obisku.",
    url: "/kako-delam",
  },
};

export default function HowIBuildPage() {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="mx-auto w-full max-w-3xl flex-1 px-5 py-16 sm:px-8">
        <HowIBuild />
      </main>
      <SiteFooter />
    </>
  );
}

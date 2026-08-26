import type { Metadata } from "next";

import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { About } from "@/components/site/about";
import { Portfolio } from "@/components/site/portfolio";
import { Pricing } from "@/components/site/pricing";
import { Audience } from "@/components/site/audience";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: SITE.title,
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.ogTitle,
    description: SITE.description,
    url: SITE.url,
    type: "website",
    locale: "sl_SI",
    siteName: SITE.name,
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="vsebina" className="flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <Portfolio />
        <Pricing />
        <Audience />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

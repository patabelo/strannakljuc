import { About } from "@/components/site/about";
import { Audience } from "@/components/site/audience";
import { Collaboration } from "@/components/site/collaboration";
import { Contact } from "@/components/site/contact";
import { Faq } from "@/components/site/faq";
import { SiteFooter } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { HowIBuild } from "@/components/site/how-i-build";
import { FaqJsonLd } from "@/components/site/json-ld";
import { Portfolio } from "@/components/site/portfolio";
import { Pricing } from "@/components/site/pricing";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { SiteHeader } from "@/components/site/site-header";
import { Takeaways } from "@/components/site/takeaways";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <SiteHeader />
      <main id="vsebina" className="flex-1">
        <Hero />
        <Takeaways />
        <Services />
        <Audience />
        <Process />
        <HowIBuild embedded />
        <Portfolio />
        <Pricing />
        <Collaboration />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

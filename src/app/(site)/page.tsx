import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Takeaways } from "@/components/site/takeaways";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Portfolio } from "@/components/site/portfolio";
import { About } from "@/components/site/about";
import { Pricing } from "@/components/site/pricing";
import { Collaboration } from "@/components/site/collaboration";
import { Audience } from "@/components/site/audience";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/footer";
import { FaqJsonLd } from "@/components/site/json-ld";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <SiteHeader />
      <main id="vsebina" className="flex-1">
        <Hero />
        <Takeaways />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Pricing />
        <Collaboration />
        <Audience />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

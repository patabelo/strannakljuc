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
import { HomepageJsonLd } from "@/components/site/json-ld";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <HomepageJsonLd />
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichText } from "@/components/site/rich-text";
import { SectionHeading } from "@/components/site/services";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="vprasanja" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          index="08"
          eyebrow="Vprašanja"
          title="Pogosta vprašanja o ceni, roku in orodjih"
        />

        <Accordion className="glass-panel mt-8 px-4 sm:px-6">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-b border-white/12 last:border-b-0"
            >
              <AccordionTrigger className="py-4 font-display text-lg font-medium tracking-[-0.02em] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-foreground/80">
                <RichText text={faq.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

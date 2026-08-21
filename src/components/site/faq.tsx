import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/services";

const FAQS = [
  {
    question: "Koliko časa traja izdelava spletne strani?",
    answer:
      "Enostavna landing stran je običajno pripravljena v 5–7 delovnih dneh po tem, ko potrdimo vsebino in design. Večje spletne strani z več podstranmi lahko trajajo od dva do tri tedne.",
  },
  {
    question: "Ali imam potem možnost sam urejati vsebino?",
    answer:
      "Da. Glede na paket lahko stran opremim z enostavnim urejevalnikom vsebine, ali pa vam po zagonu razložim, kako sami posodobite besedila in slike.",
  },
  {
    question: "Ali skrbite tudi za domeno in gostovanje?",
    answer:
      "Lahko vam svetujem in uredim registracijo domene ter postavitev gostovanja, ali pa stran objavim na vaš obstoječi sistem — kakor vam bolj ustreza.",
  },
  {
    question: "Kaj če potrebujem samo eno stran, ne celotne spletne strani?",
    answer:
      "To je prav tiste vrste projekt, s katerim se največ ukvarjam. Landing strani so idealne za promocijo enega izdelka, storitve ali dogodka in jih izdelam hitro in učinkovito.",
  },
  {
    question: "Ali je stran prilagojena za mobilne telefone?",
    answer:
      "Vsaka stran, ki jo izdelam, je zasnovana najprej za mobilne naprave, saj tam prihaja večina obiskovalcev. Nato jo prilagodim za tablice in velike zaslone.",
  },
  {
    question: "Kako poteka plačilo?",
    answer:
      "Običajno se dogovorimo za predplačilo 50 % ob začetku projekta in preostanek ob predaji žive strani. Za manjše projekte je možno tudi plačilo v celoti ob zaključku.",
  },
];

export function Faq() {
  return (
    <section
      id="vprasanja"
      className="border-t border-border bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pogosta vprašanja"
          title="Vse, kar bi radi vedeli vnaprej"
        />

        <Accordion className="mt-10">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

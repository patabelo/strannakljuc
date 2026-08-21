import { MessageCircle, Palette, Code2, Rocket } from "lucide-react";

import { SectionHeading } from "@/components/site/services";

const STEPS = [
  {
    icon: <MessageCircle className="size-5" />,
    title: "1. Kratek pogovor",
    description:
      "Spoznam vaše podjetje, cilje in ciljno publiko. Skupaj določimo obseg strani in kaj mora doseči.",
  },
  {
    icon: <Palette className="size-5" />,
    title: "2. Osnutek in design",
    description:
      "Pripravim vizualni osnutek strani, ki ga uskladimo z vašo blagovno znamko, preden se lotim kodiranja.",
  },
  {
    icon: <Code2 className="size-5" />,
    title: "3. Izdelava",
    description:
      "Stran zgradim po meri — hitro, varno in prilagojeno vsem napravam, od mobitela do velikega zaslona.",
  },
  {
    icon: <Rocket className="size-5" />,
    title: "4. Zagon in podpora",
    description:
      "Stran objavim na vaši domeni, poskrbim za osnovni SEO in po zagonu ostanem na voljo za popravke.",
  },
];

export function Process() {
  return (
    <section
      id="kako-deluje"
      className="border-t border-border bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Postopek"
          title="Kako deluje sodelovanje"
          description="Preprost, pregleden proces v štirih korakih — brez presenečenj in skritih stroškov."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block"
          />
          {STEPS.map((step) => (
            <div key={step.title} className="relative flex flex-col items-start">
              <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full border border-border bg-background text-indigo-400 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

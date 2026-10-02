import { SectionHeading } from "@/components/site/services";

const STEPS = [
  {
    title: "Pogovor",
    description:
      "Določiva, kaj stran mora doseči: koga nagovarja, katere storitve pokaže in kam vodi obiskovalca.",
  },
  {
    title: "Osnutek",
    description:
      "Pred izdelavo vidite postavitev in besedilo. Uskladiva videz z vašo dejavnostjo, šele nato gre stran v izdelavo.",
  },
  {
    title: "Izdelava",
    description:
      "Stran je narejena po meri: prilagojena mobitelu, hitra pri odpiranju in pripravljena za objavo na vaši domeni.",
  },
  {
    title: "Objava",
    description:
      "Stran gre v živo, z osnovno pripravo za Google. Po predaji lahko sodelovanje nadaljujeva.",
  },
];

export function Process() {
  return (
    <section id="kako-deluje" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Postopek"
        title="Štirje koraki do objave"
        description="Jasen potek, dogovorjen obseg in cena, preden se delo začne. Brez skritih postavk."
      />

      <ol className="mt-12 grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <li key={step.title} className="bg-background p-6">
            <span className="font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-xl tracking-[-0.02em]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

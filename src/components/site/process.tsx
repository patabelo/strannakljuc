import { SectionHeading } from "@/components/site/services";

const STEPS = [
  {
    title: "Kratek pogovor",
    description:
      "Pogovor je po telefonu ali videoklicu z Patrickom Belclom. Določimo obseg: ena stran, do 5 ali do 10 podstrani, in ali potrebujete kalkulator ali zajem računov.",
  },
  {
    title: "Osnutek in oblikovanje",
    description:
      "Pred izdelavo dobite vizualni osnutek. Popravki gredo po e-pošti ali na kratkem klicu. Izdelava steče šele po potrditvi osnutka.",
  },
  {
    title: "Izdelava",
    description:
      "Stran sestavim vnaprej z Next.js. Ni WordPressa. Najprej je narejena za telefon, nato za večji zaslon.",
  },
  {
    title: "Objava in podpora",
    description:
      "Stran objavim na vaši domeni s https. Enostranska stran je pripravljena v 5–7 delovnih dneh po potrditvi osnutka. Gostovanje zatem stane 29 € na mesec ali pa stran gostujete sami.",
  },
];

export function Process() {
  return (
    <section id="kako-deluje" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Postopek"
        title="Kako poteka izdelava?"
        description="Štirje koraki: pogovor, osnutek, izdelava in objava. Enostranska stran je objavljena v 5–7 delovnih dneh po potrditvi osnutka. Več podstrani traja 2–3 tedne."
      />

      <ol className="mt-12 grid gap-px bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <li key={step.title} className="bg-black/40 p-6 backdrop-blur-sm">
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

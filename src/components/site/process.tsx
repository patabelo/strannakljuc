import { SectionHeading } from "@/components/site/services";

const STEPS = [
  {
    title: "Kratek pogovor",
    description:
      "Spoznam vaše podjetje, cilje in ciljno publiko. Skupaj določimo obseg strani in kaj mora doseči.",
  },
  {
    title: "Osnutek in oblikovanje",
    description:
      "Pripravim vizualni osnutek strani, ki ga uskladimo z vašo blagovno znamko, preden se lotim izdelave.",
  },
  {
    title: "Izdelava",
    description:
      "Stran zgradim po meri — hitro, varno in prilagojeno vsem napravam, od mobitela do velikega zaslona.",
  },
  {
    title: "Objava in podpora",
    description:
      "Stran objavim na vaši domeni, poskrbim za osnovno vidnost na Googlu in po objavi ostanem na voljo za popravke.",
  },
];

export function Process() {
  return (
    <section id="kako-deluje" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Postopek"
        title="Kako deluje sodelovanje"
        description="Preprost, pregleden proces v štirih korakih — brez presenečenj in skritih stroškov."
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

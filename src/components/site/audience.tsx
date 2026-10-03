import { SectionHeading } from "@/components/site/services";

const AUDIENCE = [
  {
    title: "Samostojni podjetniki",
    description:
      "Obrtniki in s.p., ki rabijo ponudbo, območje dela in klic na isti strani. Fasader, krovec, kovinar ali suhomontažer lahko doda kalkulator ponudbe.",
  },
  {
    title: "Zasebniki",
    description:
      "Svetovanje, ustvarjanje ali osebna storitev. Stran pove, kdo ste, kje delate in kako vas dosežejo.",
  },
  {
    title: "Družbe in večja podjetja",
    description:
      "D.o.o. in ekipe z več storitvami. Obseg je od ene strani do 10 podstrani, po potrebi z zajemom računov za preglednico računovodji.",
  },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Za koga"
        title="Za koga je Stran na ključ?"
        description="Za samostojne podjetnike, zasebnike, d.o.o. in večja podjetja v Sloveniji. Manjšo obrtno stran in stran z več podstranmi vodim sam."
      />

      <ul className="mt-12 grid gap-10 sm:grid-cols-3">
        {AUDIENCE.map((item) => (
          <li key={item.title} className="border-t border-foreground/15 pt-5">
            <h3 className="font-display text-xl tracking-[-0.02em]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

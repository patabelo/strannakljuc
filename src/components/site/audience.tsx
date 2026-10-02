import { SectionHeading } from "@/components/site/services";

const AUDIENCE = [
  {
    title: "Gostinstvo in lokalne storitve",
    description:
      "Kavarne, restavracije, saloni in obrtniki, ki potrebujejo jasno stran z urnikom, ponudbo in spodbudo k povpraševanju.",
  },
  {
    title: "Ordinacije in svetovalci",
    description:
      "Fizioterapevti, trenerji, pravniki in drugi strokovnjaki, kjer je zaupanje na prvem mestu — in enostavno naročanje.",
  },
  {
    title: "Podjetniki, ki šele začenjajo",
    description:
      "Če še nimate spletne strani ali je stara in počasna, pripravim sodoben nastop, ki na mobitelu deluje enako dobro kot na računalniku.",
  },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="07"
        eyebrow="Za koga"
        title="Za podjetja, ki potrebujejo jasno stran"
        description="Ne delam velikih portalov. Delam strani za lokale, obrti in strokovnjake, kjer mora obiskovalec hitro razumeti ponudbo in vedeti, kako vas doseže."
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

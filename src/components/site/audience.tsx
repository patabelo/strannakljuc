import { SectionHeading } from "@/components/site/services";

const AUDIENCE = [
  {
    title: "Samostojni podjetniki",
    description:
      "Obrtniki, s.p. in manjši posli, ki potrebujejo jasno stran: ponudbo, območje dela in preprost način, da vas stranka pokliče.",
  },
  {
    title: "Zasebniki",
    description:
      "Če nastopate v svojem imenu — svetovanje, ustvarjanje, storitev — stran pove, kdo ste in kako vas dosežejo.",
  },
  {
    title: "Družbe in večja podjetja",
    description:
      "Tudi za d.o.o. in ekipe z več storitvami. Obseg prilagodim podjetju: od predstavitvene strani do več podstrani.",
  },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        index="07"
        eyebrow="Za koga"
        title="Spletne strani za vse"
        description="Izdelujem spletne strani za vse: za male podjetnike, zasebnike in d.o.o. Enak pristop za manjši obrat in za večje podjetje. Po objavi lahko sodelovanje ostane dolgoročno."
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

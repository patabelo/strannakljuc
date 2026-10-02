import Link from "next/link";
import { Calculator, Receipt } from "lucide-react";

const TOOLS = [
  {
    href: "/aplikacija/racuni",
    eyebrow: "01",
    title: "Bralnik računov",
    text: "Slika računa se odpre v pregled: izdajatelj, znesek, IBAN in sklic. Podatke preverite in shranite v seznam.",
    icon: Receipt,
  },
  {
    href: "/aplikacija/kalkulatorji",
    eyebrow: "02",
    title: "Kalkulatorji ponudb",
    text: "Fasaderstvo, kovinarstvo, gipsarija in strehe. Stranka vnese mere, vidi okvirno ceno in pusti kontakt.",
    icon: Calculator,
  },
];

export default function AplikacijaPage() {
  return (
    <div>
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-[#f2792c] uppercase">
        Demo portal
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-[-0.03em] sm:text-6xl">
        Orodja, ki jih obrtnik da stranki na svojo stran.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-white/70">
        Dva primera, ki delata takoj: branje računa iz fotografije in izračun
        okvirne ponudbe. To je prikaz, kako lahko spletna stran zbira delo,
        ne samo obiske.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col border border-white/10 bg-[#10151f] p-6 transition-colors hover:border-[#f2792c]/70"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.68rem] tracking-[0.14em] text-[#f2792c]">
                  {tool.eyebrow}
                </span>
                <Icon className="size-5 text-white/50 group-hover:text-[#f2792c]" />
              </div>
              <h2 className="mt-6 font-display text-3xl tracking-[-0.03em]">{tool.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{tool.text}</p>
              <span className="mt-6 text-sm text-[#ffe1c4]">Odpri orodje →</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

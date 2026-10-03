import Link from "next/link";
import { Calculator, Receipt } from "lucide-react";

const TOOLS = [
  {
    href: "/aplikacija/kalkulatorji",
    eyebrow: "01",
    title: "Kalkulator ponudbe",
    text: "Stranka izbere dejavnost, vnese mere in vidi okvirno ceno po vašem ceniku. Kontakt pusti v obrazcu.",
    icon: Calculator,
  },
  {
    href: "/aplikacija/racuni",
    eyebrow: "02",
    title: "Zajem računov",
    text: "Fotografija ali PDF prejetega računa. Izpišejo se znesek, DDV, TRR in sklic, kadar so na dokumentu.",
    icon: Receipt,
  },
];

export default function AplikacijaPage() {
  return (
    <div>
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-[#f2792c] uppercase">
        Orodja
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-[-0.03em] sm:text-6xl">
        Kalkulator ponudbe in zajem računov.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-white/70">
        Kalkulator ponudbe stranki takoj pokaže okvirno ceno in zbere kontakt.
        Zajem računov iz fotografije ali PDF pripravi znesek, DDV in TRR. Podatke
        preverite in izvozite za računovodjo.
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

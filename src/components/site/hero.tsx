import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Timer, Smartphone, Gauge } from "lucide-react";

import { Button } from "@/components/ui/button";

const STATS = [
  { value: "5–7 dni", label: "do žive strani" },
  { value: "Ljutomer", label: "delo po vsej Sloveniji" },
  { value: "Uvodne cene", label: "za prve stranke" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-400/20 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-3.5 text-fuchsia-500" />
            Na voljo za nove projekte v tem mesecu
          </div>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Landing strani, ki spremenijo{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              obiskovalce v stranke
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
            Izdelam vam hitro, lepo in prodajno naravnano spletno stran ali
            landing stran — brez odvečnih zapletov, s poudarkom na rezultatih
            in izkušnji na mobitelu.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="h-12 gap-2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 px-6 text-base text-white shadow-lg shadow-indigo-500/20 hover:opacity-90"
              render={<Link href="/#kontakt" />}
            >
              Naročite brezplačen posvet
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 px-6 text-base"
              render={<Link href="/#referencie" />}
            >
              Poglejte primere strani
            </Button>
          </div>

          <div className="mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-semibold sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-center text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <FeaturePill
            icon={<Smartphone className="size-4" />}
            text="100% prilagojeno mobitelom"
          />
          <FeaturePill
            icon={<Gauge className="size-4" />}
            text="Hitro nalaganje strani"
          />
          <FeaturePill
            icon={<Timer className="size-4" />}
            text="Živa stran v enem tednu"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm font-medium text-foreground">
      <span className="text-indigo-400">{icon}</span>
      {text}
    </div>
  );
}

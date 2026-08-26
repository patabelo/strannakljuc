import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Sparkle, Timer, Smartphone, Gauge } from "lucide-react";

import { Button } from "@/components/ui/button";

const STATS = [
  { value: "5–7 dni", label: "do žive strani" },
  { value: "Ljutomer", label: "delo po vsej Sloveniji" },
  { value: "Uvodne cene", label: "za prve stranke" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
      <div
        aria-hidden
        className="animate-ember-pulse absolute -top-40 left-1/2 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/30 blur-[110px]"
      />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div
            className="animate-stamp-in mb-7 inline-flex items-center gap-2 rounded-sm border-[1.5px] border-dashed border-ink/50 bg-card px-3.5 py-1.5 font-mono text-xs font-medium tracking-tight text-muted-foreground shadow-sm"
          >
            <Sparkle className="size-3.5 text-primary" />
            Na voljo za nove projekte v tem mesecu
          </div>

          <h1
            className="animate-rise-in max-w-3xl text-balance font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl md:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            Landing strani, ki spremenijo{" "}
            <em className="text-primary not-italic">
              obiskovalce v stranke
            </em>
          </h1>

          <p
            className="animate-rise-in mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl"
            style={{ animationDelay: "180ms" }}
          >
            Izdelam vam hitro, lepo in prodajno naravnano spletno stran ali
            landing stran — brez odvečnih zapletov, s poudarkom na rezultatih
            in izkušnji na mobitelu.
          </p>

          <div
            className="animate-rise-in mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: "270ms" }}
          >
            <Button
              size="lg"
              nativeButton={false}
              className="shine-hover h-12 gap-2 border-[1.5px] border-ink bg-primary px-6 text-base text-primary-foreground shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--ink)]"
              render={<Link href="/#kontakt" />}
            >
              Naročite brezplačen posvet
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="h-12 border-[1.5px] border-ink/70 px-6 text-base"
              render={<Link href="/#referencie" />}
            >
              Poglejte primere strani
            </Button>
          </div>

          <div
            className="animate-rise-in mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border pt-8"
            style={{ animationDelay: "360ms" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-2xl font-medium italic sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-center font-mono text-xs text-muted-foreground sm:text-[0.8rem]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-rise-in mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
          style={{ animationDelay: "450ms" }}
        >
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
    <div className="flex items-center justify-center gap-2 rounded-sm border border-border bg-card/60 px-4 py-3 text-sm font-medium text-foreground">
      <span className="text-primary">{icon}</span>
      {text}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { DemoBanner } from "@/components/demos/demo-banner";
import { DEMOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primeri izdelave spletnih strani",
  description:
    "Trije živi primeri sloga: kavarna, fizioterapija in frizerski salon. Oglejte si, kako izgledajo strani, ki jih izdelujem pri Stran na ključ.",
  alternates: { canonical: "/primeri" },
};

export default function DemosIndexPage() {
  return (
    <>
      <DemoBanner name="primeri sloga" />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Primeri izdelave
        </h1>
        <p className="mt-3 text-zinc-600">
          To niso resnične stranke — so trije popolnoma izdelani zgledi, da
          vidite kakovost in različne sloge.
        </p>
        <ul className="mt-10 space-y-4">
          {DEMOS.map((demo) => (
            <li key={demo.slug}>
              <Link
                href={`/primeri/${demo.slug}`}
                className="block rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-zinc-400"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {demo.category}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-zinc-950">
                  {demo.name}
                </h2>
                <p className="mt-1 text-sm text-zinc-600">{demo.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

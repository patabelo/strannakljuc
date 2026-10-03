import { RichText } from "@/components/site/rich-text";

const POINTS = [
  "Spletno stran izdelam v **5–7 dneh**. Uvodna cena enostranske strani je **290 €**.",
  "Stran je sestavljena vnaprej z **Next.js** in gostuje na **Cloudflare**. Ni WordPressa in ni vtičnikov, ki bi se nalagali ob vsakem obisku.",
  "**Kalkulator ponudbe** (250 €) stranki pokaže okvirno ceno in zbere kontakt. **Zajem računov** (350 €) prebere fotografijo ali PDF v znesek, DDV in TRR.",
  "Gostovanje po objavi stane **29 € na mesec** ali **290 € na leto**. Nisem zavezanec za DDV. Delam po vsej Sloveniji.",
];

export function Takeaways() {
  return (
    <section aria-labelledby="poudarki" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <h2 id="poudarki" className="font-display text-2xl tracking-[-0.03em] sm:text-3xl">
        Ključni poudarki
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {POINTS.map((point) => (
          <li key={point} className="border-t border-foreground/15 pt-4 text-sm leading-relaxed text-muted-foreground">
            <RichText text={point} />
          </li>
        ))}
      </ul>
    </section>
  );
}

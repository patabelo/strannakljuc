import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-xl">
        <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:p-16">
          <div className="text-white">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Naslednji korak
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Pripravljeni na svojo novo spletno stran?
            </h2>
            <p className="mt-4 max-w-md text-balance text-white/85">
              Napišite mi nekaj besed o svojem projektu. Odgovorim v enem
              delovnem dnevu z okvirno ponudbo in predlogom naslednjih
              korakov.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href="mailto:patrick.belcl.web@gmail.com"
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                  <Mail className="size-4" />
                </span>
                patrick.belcl.web@gmail.com
              </a>
              <a
                href="tel:+38670914756"
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                  <Phone className="size-4" />
                </span>
                070 914 756
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mota+51e%2C+9240+Ljutomer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                  <MapPin className="size-4" />
                </span>
                Mota 51e, 9240 Ljutomer · delo po vsej Sloveniji
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 shadow-lg">
              <iframe
                title="Zemljevid — Mota 51e, 9240 Ljutomer"
                src="https://www.google.com/maps?q=Mota+51e,+9240+Ljutomer,+Slovenija&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[15%]"
              />
            </div>
          </div>

          <form className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-zinc-900">
                Ime in priimek
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Janez Novak"
                className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-zinc-900">
                E-poštni naslov
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="janez@podjetje.si"
                className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-zinc-900">
                O vašem projektu
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Rad bi spletno stran za..."
                className="resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-1 gap-2 bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white hover:opacity-90"
            >
              Pošlji povpraševanje
              <ArrowRight className="size-4" />
            </Button>
            <p className="text-center text-xs text-zinc-500">
              Brez obveznosti — odgovorim v 24 urah.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

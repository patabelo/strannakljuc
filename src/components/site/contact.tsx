import { Mail, Phone, MapPin } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { ADDRESS_LINE, MAPS_EMBED_URL, MAPS_LINK_URL, SITE } from "@/lib/site";

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
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                  <Mail className="size-4" />
                </span>
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                  <Phone className="size-4" />
                </span>
                {SITE.phoneDisplay}
              </a>
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white/15">
                  <MapPin className="size-4" />
                </span>
                {ADDRESS_LINE} · delo po vsej Sloveniji
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 shadow-lg">
              <iframe
                title={`Zemljevid — ${ADDRESS_LINE}`}
                src={MAPS_EMBED_URL}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[15%]"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

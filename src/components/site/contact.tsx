import { Mail, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="border-t border-border bg-muted/30 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="font-mono text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              {"// Naslednji korak"}
            </span>
            <h2 className="mt-2 text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Pripravljeni na svojo novo spletno stran?
            </h2>
            <p className="mt-4 max-w-md text-balance text-muted-foreground">
              Napišite mi nekaj besed o svojem projektu. Odgovorim v enem
              delovnem dnevu z okvirno ponudbo in predlogom naslednjih
              korakov.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
              >
                <span className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-ink/25 bg-card">
                  <Mail className="size-4" />
                </span>
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
              >
                <span className="flex size-9 items-center justify-center rounded-full border-[1.5px] border-ink/25 bg-card">
                  <Phone className="size-4" />
                </span>
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

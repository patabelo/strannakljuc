import { ContactForm } from "@/components/site/contact-form";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="kontakt" className="border-t border-foreground/15">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-[0.72rem] tracking-[0.16em] text-primary uppercase">
            Kontakt
          </p>
          <h2 className="mt-3 max-w-[16ch] font-display text-3xl leading-[1.05] tracking-[-0.03em] sm:text-[2.6rem]">
            Pripravljeni na svojo novo spletno stran?
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Napišite mi nekaj besed o svojem projektu. Odgovorim v enem
            delovnem dnevu z okvirno ponudbo in predlogom naslednjih korakov.
            Velja za male podjetnike, zasebnike, d.o.o. in za dolgoročno
            sodelovanje.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                E-pošta
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-lg underline decoration-foreground/25 underline-offset-4 hover:decoration-foreground"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
                Telefon
              </dt>
              <dd className="mt-1">
                <a href={`tel:${SITE.phoneTel}`} className="font-display text-3xl tracking-[-0.03em]">
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

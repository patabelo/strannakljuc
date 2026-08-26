"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

type Status = "idle" | "sent" | "error";

function buildSubjectAndBody(name: string, email: string, message: string) {
  const subject = `Povpraševanje s ${SITE.domain} — ${name}`;
  const body = `Ime: ${name}\nE-pošta: ${email}\n\n${message}`;
  return { subject, body };
}

function buildMailtoUrl(subject: string, body: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildGmailComposeUrl(subject: string, body: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: SITE.email,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [links, setLinks] = useState<{ mailto: string; gmail: string } | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!name || !email || !message || !consent) {
      setStatus("error");
      setErrorMessage("Prosim izpolnite vsa polja in potrdite soglasje.");
      return;
    }

    const { subject, body } = buildSubjectAndBody(name, email, message);
    const mailto = buildMailtoUrl(subject, body);
    const gmail = buildGmailComposeUrl(subject, body);

    setLinks({ mailto, gmail });
    setStatus("sent");
    form.reset();

    // Try the visitor's own configured mail app first. If they don't have
    // one set up, the "sent" screen below offers a direct Gmail link as a
    // fallback — no backend or paid e-mail service required.
    window.location.href = mailto;
  }

  if (status === "sent" && links) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm border-2 border-spotlight-foreground/80 bg-spotlight p-8 text-center text-spotlight-foreground shadow-[6px_6px_0_0_var(--primary)] sm:p-10">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="font-display text-lg font-medium">
          Odpiram vaš e-poštni program …
        </h3>
        <p className="text-sm text-spotlight-foreground/75">
          Sporočilo je pripravljeno — samo še pošljite iz svoje e-pošte. Če se
          nič ni odprlo, uporabite eno od spodnjih možnosti.
        </p>
        <div className="mt-2 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <Button
            type="button"
            className="gap-2 border-[1.5px] border-spotlight-foreground bg-primary text-primary-foreground"
            render={
              <a href={links.gmail} target="_blank" rel="noopener noreferrer" />
            }
          >
            <Mail className="size-4" />
            Odpri v Gmailu
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-[1.5px] border-spotlight-foreground/50 text-spotlight-foreground hover:bg-spotlight-foreground/10"
            render={<a href={links.mailto} />}
          >
            Odpri v drugem programu
          </Button>
        </div>
        <p className="mt-1 text-sm text-spotlight-foreground/75">
          Ali pišite kar neposredno na{" "}
          <a className="font-medium underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-2 border-[1.5px] border-spotlight-foreground/50 text-spotlight-foreground hover:bg-spotlight-foreground/10"
          onClick={() => setStatus("idle")}
        >
          Pošlji novo sporočilo
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-sm border-2 border-spotlight-foreground/80 bg-spotlight p-6 text-spotlight-foreground shadow-[6px_6px_0_0_var(--primary)] sm:p-8"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Ime in priimek
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Janez Novak"
          className="h-10 rounded-sm border-[1.5px] border-spotlight-foreground/25 bg-background/[0.04] px-3 text-sm text-spotlight-foreground placeholder:text-spotlight-foreground/45 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          E-poštni naslov
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="janez@podjetje.si"
          className="h-10 rounded-sm border-[1.5px] border-spotlight-foreground/25 bg-background/[0.04] px-3 text-sm text-spotlight-foreground placeholder:text-spotlight-foreground/45 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          O vašem projektu
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Rad bi spletno stran za..."
          className="resize-none rounded-sm border-[1.5px] border-spotlight-foreground/25 bg-background/[0.04] px-3 py-2 text-sm text-spotlight-foreground placeholder:text-spotlight-foreground/45 outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-spotlight-foreground/70">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-3.5 rounded-xs border-spotlight-foreground/40"
        />
        <span>
          Strinjam se z obdelavo podatkov za odgovor na povpraševanje. Več v{" "}
          <Link href="/zasebnost" className="underline">
            politiki zasebnosti
          </Link>
          .
        </span>
      </label>
      {status === "error" ? (
        <p className="text-sm text-destructive">{errorMessage}</p>
      ) : null}
      <Button
        type="submit"
        size="lg"
        className="shine-hover mt-1 gap-2 border-[1.5px] border-spotlight-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--spotlight-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--spotlight-foreground)]"
      >
        Pošlji povpraševanje
        <ArrowRight className="size-4" />
      </Button>
      <p className="text-center font-mono text-xs text-spotlight-foreground/60">
        Brez obveznosti — odgovorim v 24 urah.
      </p>
    </form>
  );
}

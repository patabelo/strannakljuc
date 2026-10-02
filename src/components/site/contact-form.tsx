"use client";

import { useState } from "react";
import Link from "next/link";

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

const fieldClass =
  "w-full border-0 border-b border-foreground/25 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-foreground";

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

    window.location.href = mailto;
  }

  if (status === "sent" && links) {
    return (
      <div className="border border-foreground/15 px-6 py-8">
        <h3 className="font-display text-2xl tracking-[-0.03em]">
          Odpiram vaš e-poštni program
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Sporočilo je pripravljeno — samo še pošljite iz svoje e-pošte. Če se
          nič ni odprlo, uporabite eno od spodnjih možnosti.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href={links.gmail}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground px-4 py-2.5 text-background"
          >
            Odpri v Gmailu
          </a>
          <a href={links.mailto} className="self-center underline underline-offset-4">
            Odpri v drugem programu
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Ali pišite kar neposredno na{" "}
          <a className="text-foreground underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-6 text-sm underline underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Pošlji novo sporočilo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          Ime in priimek
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Janez Novak"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          E-poštni naslov
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="janez@podjetje.si"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-mono text-[0.68rem] tracking-[0.14em] uppercase">
          O vašem projektu
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Rad bi spletno stran za..."
          className={`${fieldClass} resize-none`}
        />
      </div>
      <label className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-3.5 accent-foreground"
        />
        <span>
          Strinjam se z obdelavo podatkov za odgovor na povpraševanje. Več v{" "}
          <Link href="/zasebnost" className="text-foreground underline">
            politiki zasebnosti
          </Link>
          .
        </span>
      </label>
      {status === "error" ? (
        <p className="text-sm text-destructive">{errorMessage}</p>
      ) : null}
      <button
        type="submit"
        className="mt-1 w-fit bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-primary"
      >
        Pošlji povpraševanje
      </button>
      <p className="text-xs text-muted-foreground">Brez obveznosti — odgovorim v 24 urah.</p>
    </form>
  );
}

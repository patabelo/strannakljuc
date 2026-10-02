"use client";

import { useState } from "react";
import Link from "next/link";

import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const shellClass =
  "relative isolate overflow-hidden border border-white/15 bg-[#070b18] px-6 py-8 shadow-[0_24px_70px_-28px_rgba(0,0,0,0.85)] sm:px-8";

const fieldClass =
  "w-full border border-white/15 bg-[#10182c] px-3 py-2.5 text-sm text-[#f6f1e8] outline-none placeholder:text-white/45 focus:border-[#e7c27a]";

function FormSky() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundColor: "#070b18",
        backgroundImage: `
          radial-gradient(1.2px 1.2px at 18% 24%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1px 1px at 74% 18%, rgba(255,255,255,0.75), transparent),
          radial-gradient(1.5px 1.5px at 88% 70%, rgba(255,214,170,0.9), transparent),
          radial-gradient(1px 1px at 32% 78%, rgba(255,255,255,0.6), transparent),
          linear-gradient(165deg, rgba(10,16,36,0.94), rgba(7,11,24,0.92) 55%, rgba(22,14,40,0.94)),
          url("/space-bg.jpg")
        `,
        backgroundSize: "auto, auto, auto, auto, cover, cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";
    const company = String(data.get("company") ?? "");

    if (!name || !email || !message || !consent) {
      setStatus("error");
      setErrorMessage("Prosim izpolnite vsa polja in potrdite soglasje.");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/povprasevanje", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, consent: true, company }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Sporočila ni bilo mogoče poslati.");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage("Sporočila ni bilo mogoče poslati. Pišite na patrick@strannakljuc.si.");
    }
  }

  if (status === "sent") {
    return (
      <div className={shellClass}>
        <FormSky />
        <div className="relative">
          <h3 className="font-display text-2xl tracking-[-0.03em]">Sporočilo je poslano</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Dobil sem ga na {SITE.email}. Odgovorim v enem delovnem dnevu.
          </p>
          <button
            type="button"
            className="mt-6 text-sm underline underline-offset-4"
            onClick={() => setStatus("idle")}
          >
            Pošlji novo sporočilo
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${shellClass} flex flex-col gap-6`} noValidate>
      <FormSky />
      <div className="relative flex flex-col gap-6">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0"
      />
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
        disabled={status === "sending"}
        className="mt-1 w-fit bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-primary disabled:opacity-60"
      >
        {status === "sending" ? "Pošiljam…" : "Pošlji povpraševanje"}
      </button>
      <p className="text-xs text-white/60">Brez obveznosti — odgovorim v 24 urah.</p>
      </div>
    </form>
  );
}

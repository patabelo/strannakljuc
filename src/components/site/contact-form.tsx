"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fieldClass(invalid: boolean) {
  return [
    "rounded-sm border-[1.5px] bg-background/[0.04] px-3 text-sm text-spotlight-foreground placeholder:text-spotlight-foreground/45 outline-none",
    invalid
      ? "border-destructive focus:border-destructive focus:ring-2 focus:ring-destructive/25"
      : "border-spotlight-foreground/25 focus:border-primary focus:ring-2 focus:ring-primary/25",
  ].join(" ");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const emailOk = isValidEmail(trimmedEmail);
  const nameInvalid = attempted && !trimmedName;
  const emailInvalid = attempted && !emailOk;
  const messageInvalid = attempted && !trimmedMessage;
  const consentInvalid = attempted && !consent;
  const canSubmit = Boolean(
    trimmedName && emailOk && trimmedMessage && consent
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);

    if (!canSubmit) {
      setStatus("error");
      setErrorMessage(
        trimmedEmail && !emailOk
          ? "Prosim vnesite veljaven e-poštni naslov."
          : "Prosim izpolnite vsa polja in potrdite soglasje — sicer sporočila ni mogoče poslati."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          consent,
        }),
      });
      const payload = await res.json().catch(() => ({}));
      if (!res.ok || !payload.ok) {
        throw new Error(
          typeof payload.error === "string"
            ? payload.error
            : "Pošiljanje ni uspelo. Poskusite kasneje ali pišite neposredno."
        );
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
      setAttempted(false);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Pošiljanje ni uspelo. Poskusite kasneje."
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm border-2 border-spotlight-foreground/80 bg-spotlight p-8 text-center text-spotlight-foreground shadow-[6px_6px_0_0_var(--primary)] sm:p-10">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="font-display text-lg font-medium">
          Povpraševanje je poslano
        </h3>
        <p className="text-sm text-spotlight-foreground/75">
          Hvala za sporočilo. Odgovorim v enem delovnem dnevu.
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
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={nameInvalid}
          className={`h-10 ${fieldClass(nameInvalid)}`}
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={emailInvalid}
          className={`h-10 ${fieldClass(emailInvalid)}`}
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
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={messageInvalid}
          className={`resize-none py-2 ${fieldClass(messageInvalid)}`}
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-spotlight-foreground/70">
        <input
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          aria-invalid={consentInvalid}
          className={`mt-0.5 size-3.5 rounded-xs ${
            consentInvalid ? "border-destructive" : "border-spotlight-foreground/40"
          }`}
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
        disabled={status === "sending"}
        className="shine-hover mt-1 gap-2 border-[1.5px] border-spotlight-foreground bg-primary text-primary-foreground shadow-[3px_3px_0_0_var(--spotlight-foreground)] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--spotlight-foreground)] disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Pošiljam …
          </>
        ) : (
          <>
            Pošlji povpraševanje
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
      <p className="text-center font-mono text-xs text-spotlight-foreground/60">
        Brez obveznosti — odgovorim v 24 urah.
      </p>
    </form>
  );
}

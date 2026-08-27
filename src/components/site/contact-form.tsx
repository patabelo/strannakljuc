"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!name || !message || !consent) {
      setStatus("error");
      setErrorMessage("Prosim izpolnite ime in sporočilo ter potrdite soglasje.");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message, consent }),
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
      form.reset();
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

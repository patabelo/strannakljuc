"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

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
      return;
    }

    const subject = encodeURIComponent(`Povpraševanje s ${SITE.domain} — ${name}`);
    const body = encodeURIComponent(
      `Ime: ${name}\nE-pošta: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center text-zinc-900 shadow-lg sm:p-10">
        <CheckCircle2 className="size-10 text-indigo-600" />
        <h3 className="text-lg font-semibold">Odpiram vaš e-poštni program</h3>
        <p className="text-sm text-zinc-600">
          Če se sporočilo ni odprlo samodejno, mi pišite na{" "}
          <a className="font-medium underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-2 text-zinc-900"
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
      className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-zinc-900">
          Ime in priimek
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
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
          required
          autoComplete="email"
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
          required
          rows={4}
          placeholder="Rad bi spletno stran za..."
          className="resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-zinc-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-3.5 rounded border-zinc-300"
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
        <p className="text-sm text-red-600">
          Prosim izpolnite vsa polja in potrdite soglasje.
        </p>
      ) : null}
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
  );
}

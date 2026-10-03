"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { Camera, ImagePlus, Trash2, X } from "lucide-react";

import {
  commitInvoices,
  getInvoiceServerSnapshot,
  getInvoiceSnapshot,
  subscribeInvoices,
  type SavedInvoice,
  type ScannedInvoice,
} from "@/lib/invoices";
import { readInvoiceImage } from "@/lib/read-invoice";

const FIELDS: { key: keyof ScannedInvoice; label: string }[] = [
  { key: "izdajatelj", label: "Izdajatelj" },
  { key: "naslov", label: "Naslov" },
  { key: "telefon", label: "Telefon" },
  { key: "email", label: "E-pošta" },
  { key: "kupec", label: "Kupec" },
  { key: "stevilkaRacuna", label: "Številka dokumenta" },
  { key: "datumIzdaje", label: "Datum izdaje" },
  { key: "osnova", label: "Osnova brez DDV" },
  { key: "ddv", label: "DDV" },
  { key: "znesek", label: "Znesek za plačilo" },
  { key: "iban", label: "IBAN / TRR" },
  { key: "sklic", label: "Sklic" },
  { key: "davcnaStevilka", label: "Davčna številka" },
  { key: "idZaDdv", label: "ID za DDV" },
  { key: "eor", label: "EOR" },
  { key: "zoi", label: "ZOI" },
];

const ACCEPT = "image/jpeg,image/png,image/webp,image/heic,image/heif";

export function InvoiceDesk() {
  const inputId = useId();
  const cameraId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const previewRef = useRef<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [draft, setDraft] = useState<ScannedInvoice | null>(null);
  const [draftName, setDraftName] = useState("vzorcni-racun.jpg");
  const invoices = useSyncExternalStore(
    subscribeInvoices,
    getInvoiceSnapshot,
    getInvoiceServerSnapshot,
  );

  useEffect(() => {
    return () => {
      if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    };
  }, []);

  useEffect(() => {
    if (!draft) return;
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setDraft(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [draft]);

  function takeFile(next: File | null) {
    setError(null);
    if (!next) return;
    if (!next.type.startsWith("image/")) {
      setError("Izberite sliko računa (JPG, PNG ali WEBP).");
      return;
    }
    if (next.size > 15 * 1024 * 1024) {
      setError("Slika je prevelika. Izberite datoteko do 15 MB.");
      return;
    }
    if (previewRef.current) URL.revokeObjectURL(previewRef.current);
    const url = URL.createObjectURL(next);
    previewRef.current = url;
    setPreview(url);
    setFile(next);
    setDraftName(next.name);
  }

  async function scan() {
    if (!file) return;
    setScanning(true);
    setError(null);
    try {
      const result = await readInvoiceImage(file);
      if (!result.ok || !result.invoice) {
        setError(result.error ?? "Računa ni bilo mogoče prebrati.");
        return;
      }
      setDraft(result.invoice);
      setDraftName(file.name);
    } catch {
      setError("Besedila na sliki ni bilo mogoče prebrati. Poskusite z jasnejšo fotografijo.");
    } finally {
      setScanning(false);
    }
  }

  function saveDraft() {
    if (!draft) return;
    if (!draft.izdajatelj.trim() || !draft.znesek.trim()) {
      setError("Izdajatelj in znesek sta obvezna.");
      return;
    }
    const saved = {
      ...draft,
      id: crypto.randomUUID(),
      filename: draftName,
      savedAt: new Date().toISOString(),
    } satisfies SavedInvoice;
    for (const field of FIELDS) saved[field.key] = draft[field.key].trim();
    commitInvoices([saved, ...invoices]);
    setDraft(null);
    setError(null);
  }

  return (
    <div>
      <p className="font-mono text-[0.72rem] tracking-[0.16em] text-[#f2792c] uppercase">
        Bralnik računov
      </p>
      <h1 className="mt-3 max-w-xl font-display text-4xl tracking-[-0.03em] sm:text-5xl">
        Fotografija računa, pripravljeni podatki.
      </h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Spustite sliko računa ali jo zajemite s kamero. Prebere se samo besedilo,
        ki je na sliki: izdajatelj, znesek, DDV, IBAN, sklic, EOR in ZOI. Če
        fotografija ni račun, se podatki ne izmislijo. Slika ostane v brskalniku.
      </p>

      <div
        className={`mt-8 border border-dashed px-5 py-10 text-center transition-colors ${
          dragging ? "border-[#f2792c] bg-[#f2792c]/10" : "border-white/20 bg-[#10151f]"
        }`}
        onDragEnter={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          takeFile(event.dataTransfer.files[0] ?? null);
        }}
      >
        {preview ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="" className="mx-auto mb-5 max-h-48 object-contain" />
        ) : (
          <ImagePlus className="mx-auto size-8 text-[#f2792c]" />
        )}
        <p className="mt-3 text-lg">{file ? file.name : "Spustite sliko računa sem"}</p>
        <p className="mt-1 text-sm text-white/55">JPG, PNG ali WEBP, do 15 MB</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <label
            htmlFor={inputId}
            className="cursor-pointer bg-[#f6f1e8] px-4 py-2.5 text-sm text-[#14120f]"
          >
            Izberi sliko
          </label>
          <label
            htmlFor={cameraId}
            className="inline-flex cursor-pointer items-center gap-2 border border-white/20 px-4 py-2.5 text-sm"
          >
            <Camera className="size-4" />
            Zajemi s kamero
          </label>
          <input
            id={inputId}
            type="file"
            accept={ACCEPT}
            className="sr-only"
            onChange={(event) => takeFile(event.target.files?.[0] ?? null)}
          />
          <input
            id={cameraId}
            type="file"
            accept="image/*"
            capture="environment"
            className="sr-only"
            onChange={(event) => takeFile(event.target.files?.[0] ?? null)}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={!file || scanning}
          onClick={() => scan()}
          className="bg-[#f2792c] px-4 py-2.5 text-sm text-[#1a1008] disabled:opacity-40"
        >
          {scanning ? "Berem besedilo na sliki…" : "Preberi račun"}
        </button>
      </div>
      {error && !draft ? (
        <p className="mt-3 text-sm text-[#ffb4a8]" role="alert">
          {error}
        </p>
      ) : null}

      <section className="mt-12">
        <h2 className="font-display text-2xl tracking-[-0.03em]">Shranjeni računi</h2>
        {invoices.length === 0 ? (
          <p className="mt-3 text-sm text-white/55">Še ni shranjenih računov.</p>
        ) : (
          <div className="mt-4 overflow-x-auto border border-white/10">
            <table className="w-full min-w-[56rem] text-left text-sm">
              <thead className="bg-[#10151f] font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">
                <tr>
                  <th className="px-3 py-3 font-medium">Izdajatelj</th>
                  <th className="px-3 py-3 font-medium">Št. računa</th>
                  <th className="px-3 py-3 font-medium">Datum računa</th>
                  <th className="px-3 py-3 font-medium">Znesek</th>
                  <th className="px-3 py-3 font-medium">IBAN</th>
                  <th className="px-3 py-3 font-medium">Sklic</th>
                  <th className="px-3 py-3 font-medium">
                    <span className="sr-only">Odstrani</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-t border-white/10">
                    <td className="px-3 py-3">{invoice.izdajatelj}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{invoice.stevilkaRacuna}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{invoice.datumIzdaje}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{invoice.znesek}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{invoice.iban}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{invoice.sklic}</td>
                    <td className="px-3 py-3 text-right">
                      <button
                        type="button"
                        aria-label={`Odstrani račun ${invoice.izdajatelj}`}
                        onClick={() =>
                          commitInvoices(invoices.filter((item) => item.id !== invoice.id))
                        }
                        className="inline-flex p-1 text-white/50 hover:text-[#f6f1e8]"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {draft ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDraft(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="racun-naslov"
            className="max-h-[92svh] w-full overflow-y-auto border border-white/15 bg-[#10151f] p-5 shadow-2xl sm:max-w-2xl sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[#f2792c] uppercase">
                  Pregled
                </p>
                <h2 id="racun-naslov" className="mt-1 font-display text-2xl tracking-[-0.03em]">
                  Prebrani podatki
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                aria-label="Zapri"
                onClick={() => setDraft(null)}
                className="p-1 text-white/60 hover:text-[#f6f1e8]"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-2 text-sm text-white/55">
              Izpolnjena so samo polja, prebrana s slike. Prazna dopolnite sami, preden shranite.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <DraftField
                  key={field.key}
                  label={field.label}
                  value={draft[field.key]}
                  onChange={(value) => setDraft({ ...draft, [field.key]: value })}
                />
              ))}
            </div>
            {error ? (
              <p className="mt-3 text-sm text-[#ffb4a8]" role="alert">
                {error}
              </p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={saveDraft}
                className="bg-[#f6f1e8] px-4 py-2.5 text-sm text-[#14120f]"
              >
                Shrani račun
              </button>
              <button
                type="button"
                onClick={() => setDraft(null)}
                className="px-4 py-2.5 text-sm text-white/70"
              >
                Zavrzi
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DraftField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[0.68rem] tracking-[0.12em] text-white/50 uppercase">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full border border-white/15 bg-[#0c111b] px-3 py-2.5 text-sm outline-none focus:border-[#f2792c]"
      />
    </label>
  );
}

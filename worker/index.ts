interface Env {
  ASSETS: Fetcher;
  EMAIL: {
    send(message: {
      to: string;
      from: { email: string; name?: string };
      replyTo?: { email: string; name?: string };
      subject: string;
      text: string;
      html: string;
    }): Promise<{ messageId: string }>;
  };
}

const TO = "patrick@strannakljuc.si";
const FROM = { email: "povprasevanje@strannakljuc.si", name: "Stran na ključ" };

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  consent?: unknown;
  company?: unknown;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/povprasevanje") {
      return handleInquiry(request, env);
    }

    if (url.pathname === "/api/scan-invoice") {
      return handleScan(request);
    }

    if (url.pathname === "/api/submit-lead") {
      return handleLead(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function handleInquiry(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Dovoljena je samo metoda POST." }, 405);
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return json({ ok: false, error: "Sporočilo ni veljavno." }, 400);
  }

  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return json({ ok: true });
  }

  const name = clean(payload.name, 80);
  const email = clean(payload.email, 120);
  const message = clean(payload.message, 4000);

  if (!name || !email || !message || payload.consent !== true) {
    return json({ ok: false, error: "Prosim izpolnite vsa polja in potrdite soglasje." }, 400);
  }

  if (!isEmail(email)) {
    return json({ ok: false, error: "E-poštni naslov ni veljaven." }, 400);
  }

  const subject = `Povpraševanje s strannakljuc.si — ${name}`;
  const text = `Ime: ${name}\nE-pošta: ${email}\n\n${message}`;
  const html = `<p><strong>Ime:</strong> ${escapeHtml(name)}</p><p><strong>E-pošta:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`;

  try {
    await env.EMAIL.send({
      to: TO,
      from: FROM,
      replyTo: { email, name },
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("contact email failed", error instanceof Error ? error.message : error);
    return json(
      { ok: false, error: "Sporočila trenutno ni bilo mogoče poslati. Pišite na patrick@strannakljuc.si." },
      502,
    );
  }

  return json({ ok: true });
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const TRADES = new Set(["fasaderstvo", "kovinarstvo", "gipsarija", "strehe"]);

type LeadPayload = {
  firstName?: unknown;
  lastName?: unknown;
  phone?: unknown;
  email?: unknown;
  trade?: unknown;
  tradeLabel?: unknown;
  summary?: unknown;
  priceLow?: unknown;
  priceHigh?: unknown;
  priceLabel?: unknown;
  companyName?: unknown;
  consent?: unknown;
  company?: unknown;
};

/** Reading happens in the browser. This route no longer invents invoice data. */
async function handleScan(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Dovoljena je samo metoda POST." }, 405);
  }

  return json(
    {
      ok: false,
      error: "Račun se prebere iz slike v brskalniku. Vzorčnih podatkov ne ustvarjamo.",
    },
    400,
  );
}

/** Calculator leads go to the site inbox; the customer's email is reply-to only. */
async function handleLead(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Dovoljena je samo metoda POST." }, 405);
  }

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return json({ ok: false, error: "Povpraševanje ni veljavno." }, 400);
  }

  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return json({ ok: true });
  }

  const firstName = clean(payload.firstName, 80);
  const lastName = clean(payload.lastName, 80);
  const phone = clean(payload.phone, 40);
  const email = clean(payload.email, 120);
  const trade = clean(payload.trade, 40);
  const tradeName = clean(payload.tradeLabel, 40);
  const summary = clean(payload.summary, 2500);
  const priceLabel = clean(payload.priceLabel, 160);
  const companyName = clean(payload.companyName, 80);
  const priceLow = numberInRange(payload.priceLow);
  const priceHigh = numberInRange(payload.priceHigh);

  if (!firstName || !lastName || !phone || !email || !TRADES.has(trade) || !summary) {
    return json({ ok: false, error: "Prosim izpolnite vsa polja." }, 400);
  }
  if (!isEmail(email) || !isPhone(phone)) {
    return json({ ok: false, error: "Telefon ali e-pošta nista veljavna." }, 400);
  }
  if (payload.consent !== true || priceLow === null || priceHigh === null) {
    return json({ ok: false, error: "Ponudba ni popolna." }, 400);
  }

  const subject = `${companyName || "Kalkulator ponudbe"} — ${tradeName || trade} — ${firstName} ${lastName}`;
  const text = [
    companyName ? `Podjetje: ${companyName}` : "",
    `Ime: ${firstName} ${lastName}`,
    `Telefon: ${phone}`,
    `E-pošta: ${email}`,
    `Dejavnost: ${tradeName || trade}`,
    summary,
    priceLabel || `Okvirna cena: ${priceLow}–${priceHigh} €`,
  ]
    .filter(Boolean)
    .join("\n");
  // Always deliver calculator leads to the site inbox — never trust client notifyEmail for routing.
  const html = text
    .split("\n")
    .map((line) => `<p>${escapeHtml(line)}</p>`)
    .join("");

  try {
    const message = {
      from: FROM,
      to: TO,
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject,
      text,
      html,
    };
    await env.EMAIL.send(message);
  } catch (error) {
    console.error("lead email failed", error instanceof Error ? error.message : error);
    return json(
      { ok: false, error: "Povpraševanja trenutno ni bilo mogoče poslati." },
      502,
    );
  }

  return json({ ok: true });
}

function isPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

function numberInRange(value: unknown) {
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  if (value < 0 || value > 10_000_000) return null;
  return Math.round(value);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

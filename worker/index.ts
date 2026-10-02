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

function json(body: { ok: boolean; error?: string }, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

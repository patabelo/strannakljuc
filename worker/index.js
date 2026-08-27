/**
 * Stran na ključ — kontaktni Worker.
 *
 * Statična spletna stran (Next.js `output: "export"`) je postrežena
 * prek `assets`. Ta Worker dodatno obdeluje POST `/api/contact`, ki
 * ga pošlje kontaktni obrazec, in ga posreduje naprej prek Resend API
 * na patrick@strannakljuc.si.
 *
 * Za delovanje je potrebna skrivnost `RESEND_API_KEY`:
 *   wrangler secret put RESEND_API_KEY
 * (brezplačen račun na resend.com, 3000 sporočil/mesec).
 * Prav tako mora biti domena strannakljuc.si overjena v Resend-u,
 * da lahko pošiljamo kot spletna-stran@strannakljuc.si.
 */

const CONTACT_TO = "patrick@strannakljuc.si";
const CONTACT_FROM = "spletna-stran@strannakljuc.si";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function handleContact(request, env) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "Neveljaven zahtevek." }, 400);
  }

  const name = String(payload?.name ?? "").trim().slice(0, 120);
  const email = String(payload?.email ?? "").trim().slice(0, 254);
  const message = String(payload?.message ?? "").trim().slice(0, 4000);
  const consent = payload?.consent === true;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !email || !message || !consent) {
    return json(
      { ok: false, error: "Manjkajo obvezni podatki ali soglasje." },
      400
    );
  }

  if (!emailOk) {
    return json({ ok: false, error: "E-poštni naslov ni veljaven." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return json(
      {
        ok: false,
        error:
          "Pošiljanje e-pošte trenutno ni nastavljeno. Pišite neposredno na " +
          CONTACT_TO +
          ".",
      },
      503
    );
  }

  const subject = `Povpraševanje s strannakljuc.si — ${name}`;
  const text = `Novo povpraševanje prek spletne strani.\n\nIme: ${name}\nE-pošta: ${email}\n\nSporočilo:\n${message}\n`;
  const html = [
    `<p>Novo povpraševanje prek spletne strani.</p>`,
    `<p><strong>Ime:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>E-pošta:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>Sporočilo:</strong></p>`,
    `<pre style="white-space:pre-wrap;font-family:sans-serif">${escapeHtml(
      message
    )}</pre>`,
  ].join("");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        reply_to: email,
        subject,
        text,
        html,
        tags: [{ name: "source", value: "contact-form" }],
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("Resend error", res.status, errText);
      return json(
        {
          ok: false,
          error: "Pošiljanje e-pošte ni uspelo. Poskusite kasneje.",
        },
        502
      );
    }

    return json({ ok: true });
  } catch (err) {
    console.error("Resend fetch failed", err);
    return json(
      {
        ok: false,
        error: "Pošiljanje e-pošte ni uspelo. Poskusite kasneje.",
      },
      502
    );
  }
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method === "POST" && url.pathname === "/api/contact") {
      const res = await handleContact(request, env);
      for (const [k, v] of Object.entries(CORS_HEADERS)) {
        res.headers.set(k, v);
      }
      return res;
    }

    // Vse ostalo postrežejo statični viri (assets).
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("Not found", { status: 404 });
  },
};

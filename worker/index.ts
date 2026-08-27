import {
  CONTACT_FROM,
  CONTACT_LIMITS,
  CONTACT_TO,
  isValidEmail,
} from "../src/lib/contact";
import { SITE } from "../src/lib/site";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

const API_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
} as const;

const ALLOWED_ORIGINS = new Set([
  SITE.url,
  `https://www.${SITE.domain}`,
]);

function json(data: unknown, status = 200, headers?: HeadersInit) {
  return Response.json(data, {
    status,
    headers: { ...API_HEADERS, ...headers },
  });
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("Origin");
  if (!origin) return true;

  return (
    ALLOWED_ORIGINS.has(origin) ||
    /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
  );
}

async function readPayload(request: Request): Promise<
  | { ok: true; payload: ContactPayload }
  | { ok: false; response: Response }
> {
  const contentType = request.headers.get("Content-Type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return {
      ok: false,
      response: json(
        { ok: false, error: "Zahtevek mora biti v obliki JSON." },
        415
      ),
    };
  }

  const declaredLength = Number(request.headers.get("Content-Length") ?? 0);
  if (
    Number.isFinite(declaredLength) &&
    declaredLength > CONTACT_LIMITS.requestBody
  ) {
    return {
      ok: false,
      response: json({ ok: false, error: "Zahtevek je prevelik." }, 413),
    };
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return {
      ok: false,
      response: json({ ok: false, error: "Neveljaven zahtevek." }, 400),
    };
  }

  if (new TextEncoder().encode(rawBody).byteLength > CONTACT_LIMITS.requestBody) {
    return {
      ok: false,
      response: json({ ok: false, error: "Zahtevek je prevelik." }, 413),
    };
  }

  try {
    const payload: unknown = JSON.parse(rawBody);
    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      throw new TypeError("Contact payload must be an object");
    }
    return { ok: true, payload: payload as ContactPayload };
  } catch {
    return {
      ok: false,
      response: json({ ok: false, error: "Neveljaven zahtevek." }, 400),
    };
  }
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (!isAllowedOrigin(request)) {
    return json({ ok: false, error: "Zahtevek ni dovoljen." }, 403);
  }

  const parsed = await readPayload(request);
  if (!parsed.ok) return parsed.response;

  const name = readString(parsed.payload.name);
  const email = readString(parsed.payload.email);
  const message = readString(parsed.payload.message);
  const consent = parsed.payload.consent === true;
  const website = readString(parsed.payload.website);

  // A filled hidden field is a common signal of automated form spam.
  // Return a neutral success response without sending an email.
  if (website) return json({ ok: true });

  if (!name || !email || !message || !consent) {
    return json(
      { ok: false, error: "Manjkajo obvezni podatki ali soglasje." },
      400
    );
  }

  if (
    name.length > CONTACT_LIMITS.name ||
    email.length > CONTACT_LIMITS.email ||
    message.length > CONTACT_LIMITS.message
  ) {
    return json({ ok: false, error: "Eno od polj je predolgo." }, 400);
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, error: "E-poštni naslov ni veljaven." }, 400);
  }

  const subject = `Povpraševanje s ${SITE.domain} — ${name}`;
  const text = `Novo povpraševanje prek spletne strani.\n\nIme: ${name}\nE-pošta: ${email}\n\nSporočilo:\n${message}\n`;
  const html = [
    "<p>Novo povpraševanje prek spletne strani.</p>",
    `<p><strong>Ime:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>E-pošta:</strong> ${escapeHtml(email)}</p>`,
    "<p><strong>Sporočilo:</strong></p>",
    `<pre style="white-space:pre-wrap;font-family:sans-serif">${escapeHtml(message)}</pre>`,
  ].join("");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
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

    if (!response.ok) {
      console.error(
        JSON.stringify({
          event: "resend_error",
          status: response.status,
          ray: request.headers.get("cf-ray"),
        })
      );
      return json(
        {
          ok: false,
          error: "Pošiljanje e-pošte ni uspelo. Poskusite kasneje.",
        },
        502
      );
    }

    return json({ ok: true });
  } catch (error) {
    console.error(
      JSON.stringify({
        event: "resend_fetch_failed",
        error: error instanceof Error ? error.name : "UnknownError",
        ray: request.headers.get("cf-ray"),
      })
    );
    return json(
      {
        ok: false,
        error: "Pošiljanje e-pošte ni uspelo. Poskusite kasneje.",
      },
      502
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function withStaticSecurityHeaders(response: Response) {
  const headers = new Headers(response.headers);
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${SITE.domain}`) {
      url.hostname = SITE.domain;
      return Response.redirect(url.toString(), 308);
    }

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return json(
          { ok: false, error: "Metoda ni dovoljena." },
          405,
          { Allow: "POST" }
        );
      }
      return handleContact(request, env);
    }

    return withStaticSecurityHeaders(await env.ASSETS.fetch(request));
  },
} satisfies ExportedHandler<Env>;

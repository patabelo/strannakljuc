const CONTACT_TO = "patrick.belcl.web@gmail.com";
const CONTACT_FROM = { email: "povprasevanje@strannakljuc.si", name: "Stran na ključ" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return jsonResponse({ error: "Method not allowed" }, 405);
      }
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;

async function handleContact(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Neveljavna zahteva." }, 400);
  }

  const name = typeof body?.name === "string" ? body.name.trim().slice(0, 200) : "";
  const email = typeof body?.email === "string" ? body.email.trim().slice(0, 200) : "";
  const message = typeof body?.message === "string" ? body.message.trim().slice(0, 5000) : "";

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return jsonResponse(
      { error: "Prosimo, izpolnite vsa polja s pravilnimi podatki." },
      400
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    await env.EMAIL.send({
      to: CONTACT_TO,
      from: CONTACT_FROM,
      replyTo: email,
      subject: `Novo povpraševanje s strannakljuc.si — ${name}`,
      text: `Ime: ${name}\nE-pošta: ${email}\n\n${message}`,
      html: `<p><strong>Ime:</strong> ${safeName}</p><p><strong>E-pošta:</strong> ${safeEmail}</p><p>${safeMessage}</p>`,
    });
  } catch (error) {
    console.error("Napaka pri pošiljanju povpraševanja:", error);
    return jsonResponse(
      {
        error: `Sporočila trenutno ni bilo mogoče poslati. Prosimo, pišite neposredno na ${CONTACT_TO}.`,
      },
      502
    );
  }

  return jsonResponse({ ok: true });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

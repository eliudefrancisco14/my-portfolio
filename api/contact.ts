import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  buildEmail,
  createRateLimiter,
  isAllowedOrigin,
  isHoneypotFilled,
  validatePayload,
  type ContactPayload,
} from "./_lib/contact.js";

const allow = createRateLimiter(3, 10 * 60 * 1000);

const clientIp = (req: VercelRequest): string => {
  const fwd = req.headers["x-forwarded-for"];
  const first = Array.isArray(fwd) ? fwd[0] : fwd;
  return (first?.split(",")[0] || (req.headers["x-real-ip"] as string) || "unknown").trim();
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }

  if (!isAllowedOrigin(req.headers.origin)) {
    return res.status(403).json({ error: "Origem não permitida." });
  }

  const body: ContactPayload = typeof req.body === "string" ? safeJson(req.body) : (req.body ?? {});

  // Armadilha anti-spam preenchida: responde sucesso sem enviar nada.
  if (isHoneypotFilled(body)) return res.status(200).json({ success: true });

  const result = validatePayload(body);
  if (result.ok === false) return res.status(400).json({ error: result.error });

  if (!allow(clientIp(req))) {
    return res.status(429).json({ error: "Demasiadas mensagens. Tente novamente mais tarde." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não está configurada");
    return res.status(500).json({ error: "O envio está temporariamente indisponível. Use o email ou o LinkedIn." });
  }

  const to = process.env.CONTACT_TO_EMAIL || "eliudepauloquintasf@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfólio <no-reply@eliudefrancisco.com>";
  const email = buildEmail(result.data);

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to,
        subject: email.subject,
        html: email.html,
        text: email.text,
        ...(email.replyTo ? { reply_to: email.replyTo } : {}),
      }),
    });
    if (!r.ok) {
      console.error("Erro do Resend:", r.status, await r.text());
      return res.status(502).json({ error: "Falha ao enviar o email. Tente novamente." });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar:", err);
    return res.status(500).json({ error: "Erro interno. Tente novamente." });
  }
}

function safeJson(raw: string): ContactPayload {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

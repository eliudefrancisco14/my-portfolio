// Lógica do formulário de contacto, separada do handler para poder ser testada.

export type ContactPayload = {
  name?: unknown;
  message?: unknown;
  contactType?: unknown;
  contactInfo?: unknown;
  website?: unknown;
};

export type ValidContact = {
  name: string;
  message: string;
  contactType: "email" | "phone";
  contactInfo: string;
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?\d{1,4}\s?\d{6,15}$/;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isHoneypotFilled(body: ContactPayload): boolean {
  return typeof body.website === "string" && body.website.trim() !== "";
}

export function validatePayload(body: ContactPayload): { ok: true; data: ValidContact } | { ok: false; error: string } {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const contactType = body.contactType;
  const contactInfo = typeof body.contactInfo === "string" ? body.contactInfo.trim() : "";

  if (name.length < 2 || name.length > 100) return { ok: false, error: "Indique o seu nome (2 a 100 caracteres)." };
  if (message.length < 10 || message.length > 2000)
    return { ok: false, error: "A mensagem deve ter entre 10 e 2000 caracteres." };
  if (contactType !== "email" && contactType !== "phone")
    return { ok: false, error: "Indique como prefere ser contactado." };
  if (contactType === "email" && (!EMAIL_RE.test(contactInfo) || contactInfo.length > 255))
    return { ok: false, error: "Indique um email válido." };
  if (contactType === "phone" && !PHONE_RE.test(contactInfo))
    return { ok: false, error: "Indique um telefone válido (6 a 15 dígitos)." };

  return { ok: true, data: { name, message, contactType, contactInfo } };
}

// Limite simples por IP: no máximo `max` mensagens por janela.
// Fica em memória de cada instância da função, por isso é um travão, não uma garantia.
export function createRateLimiter(max = 3, windowMs = 10 * 60 * 1000) {
  const hits = new Map<string, number[]>();
  return (key: string, now = Date.now()): boolean => {
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= max) {
      hits.set(key, recent);
      return false;
    }
    recent.push(now);
    hits.set(key, recent);
    if (hits.size > 5000) hits.clear();
    return true;
  };
}

const ALLOWED_ORIGIN_RE = /^https:\/\/(www\.)?eliudefrancisco\.com$|^https:\/\/[a-z0-9-]+\.vercel\.app$|^http:\/\/localhost(:\d+)?$/;

export function isAllowedOrigin(origin: string | undefined): boolean {
  // Pedidos sem Origin (ex.: mesmo site em alguns navegadores) são aceites.
  if (!origin) return true;
  return ALLOWED_ORIGIN_RE.test(origin);
}

export function buildEmail(data: ValidContact, date = new Date()) {
  const name = escapeHtml(data.name);
  const message = escapeHtml(data.message);
  const contactInfo = escapeHtml(data.contactInfo);
  const contactLabel = data.contactType === "email" ? "Email" : "Telefone";
  const dateStr = date.toLocaleString("pt-PT", { timeZone: "Africa/Luanda", dateStyle: "full", timeStyle: "short" });
  const subject = `Nova mensagem de ${data.name}`.replace(/[\r\n]+/g, " ").slice(0, 150);

  const html = `<!DOCTYPE html>
<html lang="pt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#f2f2f7;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f2f7;padding:40px 16px;"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
<tr><td style="padding:0 0 32px 0;text-align:center;"><p style="margin:0;font-size:15px;font-weight:600;color:#1d1d1f;">eliudefrancisco.com</p></td></tr>
<tr><td style="background-color:#ffffff;border-radius:20px;box-shadow:0 2px 20px rgba(0,0,0,0.06);padding:32px;">
<p style="margin:0 0 4px 0;font-size:13px;font-weight:500;color:#86868b;text-transform:uppercase;letter-spacing:0.8px;">Nova mensagem</p>
<h1 style="margin:0 0 24px 0;font-size:28px;font-weight:700;color:#1d1d1f;line-height:1.2;">${name}</h1>
<p style="margin:0 0 3px 0;font-size:11px;font-weight:600;color:#86868b;text-transform:uppercase;letter-spacing:0.6px;">${contactLabel}</p>
<p style="margin:0 0 24px 0;font-size:15px;font-weight:500;color:#0071e3;">${contactInfo}</p>
<p style="margin:0 0 8px 0;font-size:11px;font-weight:600;color:#86868b;text-transform:uppercase;letter-spacing:0.6px;">Mensagem</p>
<div style="background-color:#f9f9fb;border-radius:14px;padding:20px;"><p style="margin:0;font-size:16px;line-height:1.6;color:#1d1d1f;white-space:pre-wrap;">${message}</p></div>
</td></tr>
<tr><td style="padding:24px 0 0 0;text-align:center;"><p style="margin:0;font-size:12px;color:#aeaeb2;line-height:1.5;">${escapeHtml(dateStr)}<br>Enviado pelo formulário de contacto</p></td></tr>
</table></td></tr></table></body></html>`;

  const text = `Nova mensagem de ${data.name}\n${contactLabel}: ${data.contactInfo}\n\n${data.message}\n\n${dateStr}`;

  return { subject, html, text, replyTo: data.contactType === "email" ? data.contactInfo : undefined };
}

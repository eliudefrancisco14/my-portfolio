import { describe, it, expect } from "vitest";
import { buildEmail, createRateLimiter, escapeHtml, isAllowedOrigin, isHoneypotFilled, validatePayload } from "./contact";

const valid = { name: "Ana Silva", message: "Olá, tenho um projeto de dados.", contactType: "email", contactInfo: "ana@exemplo.com" };

describe("validatePayload", () => {
  it("aceita um pedido válido por email", () => {
    expect(validatePayload(valid)).toEqual({ ok: true, data: valid });
  });
  it("aceita telefone com indicativo", () => {
    expect(validatePayload({ ...valid, contactType: "phone", contactInfo: "+244 912345678" }).ok).toBe(true);
  });
  it("rejeita email inválido, nome curto, mensagem curta e tipo desconhecido", () => {
    expect(validatePayload({ ...valid, contactInfo: "x" }).ok).toBe(false);
    expect(validatePayload({ ...valid, name: "A" }).ok).toBe(false);
    expect(validatePayload({ ...valid, message: "curta" }).ok).toBe(false);
    expect(validatePayload({ ...valid, contactType: "anonymous" }).ok).toBe(false);
    expect(validatePayload({}).ok).toBe(false);
  });
});

describe("escapeHtml / buildEmail", () => {
  it("escapa HTML no nome e na mensagem e limpa quebras de linha do assunto", () => {
    const email = buildEmail({
      name: "<b>Ana</b>\r\nBcc: x@y.z",
      message: "<script>alert(1)</script>",
      contactType: "email",
      contactInfo: "ana@exemplo.com",
    });
    expect(email.html).not.toContain("<script>");
    expect(email.html).toContain("&lt;script&gt;");
    expect(email.html).not.toContain("<b>Ana</b>");
    expect(email.subject).not.toMatch(/[\r\n]/);
    expect(email.replyTo).toBe("ana@exemplo.com");
  });
  it("não define reply-to para telefone", () => {
    expect(buildEmail({ ...valid, contactType: "phone", contactInfo: "+244 912345678" } as never).replyTo).toBeUndefined();
  });
  it("escapa aspas", () => {
    expect(escapeHtml(`"'`)).toBe("&quot;&#39;");
  });
});

describe("proteções", () => {
  it("deteta a armadilha anti-spam", () => {
    expect(isHoneypotFilled({ website: "http://spam" })).toBe(true);
    expect(isHoneypotFilled({ website: "" })).toBe(false);
  });
  it("limita a 3 mensagens por 10 minutos por IP", () => {
    const allow = createRateLimiter(3, 600_000);
    expect([allow("1.1.1.1", 0), allow("1.1.1.1", 1), allow("1.1.1.1", 2), allow("1.1.1.1", 3)]).toEqual([true, true, true, false]);
    expect(allow("2.2.2.2", 3)).toBe(true);
    expect(allow("1.1.1.1", 600_001)).toBe(true);
  });
  it("aceita só origens do próprio site", () => {
    expect(isAllowedOrigin("https://eliudefrancisco.com")).toBe(true);
    expect(isAllowedOrigin("https://www.eliudefrancisco.com")).toBe(true);
    expect(isAllowedOrigin("https://my-portfolio-abc.vercel.app")).toBe(true);
    expect(isAllowedOrigin("https://evil.com")).toBe(false);
    expect(isAllowedOrigin("https://eliudefrancisco.com.evil.com")).toBe(false);
  });
});

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { countryCodes } from "@/data/countryCodes";
import { validateContact, type ContactType, type ContactErrors } from "@/lib/contact-validation";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full px-4 py-3 rounded-2xl border bg-card/40 backdrop-blur-sm text-[17px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 transition-all duration-200 disabled:opacity-50";
const inputClass = (hasError?: string) =>
  `${inputBase} ${hasError ? "border-destructive/60" : "border-border/60"}`;
const labelClass = "block text-[13px] font-medium text-muted-foreground mb-2 uppercase tracking-wider";

const FieldError = ({ id, msg }: { id: string; msg?: string }) =>
  msg ? (
    <p id={id} className="mt-1.5 text-[13px] text-destructive">
      {msg}
    </p>
  ) : null;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [contactType, setContactType] = useState<ContactType>("email");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+244");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setName("");
    setMessage("");
    setEmail("");
    setPhone("");
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Bots preenchem campos escondidos: fingimos sucesso e não enviamos nada.
    if (website.trim()) {
      setStatus("success");
      resetForm();
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    const found = validateContact({ name, message, contactType, email, phone });
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const contactInfo = contactType === "email" ? email.trim() : `${countryCode} ${phone.trim()}`;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), contactType, contactInfo, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.error) {
        throw new Error(data?.error || "Erro ao enviar. Tente novamente.");
      }

      setStatus("success");
      resetForm();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    }
  };

  const busy = status === "loading";

  return (
    <section id="contact" className="py-24 px-6" aria-label="Contacto">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-[28px] font-display font-semibold text-foreground mb-3 text-center">
            Vamos conversar
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[17px] text-muted-foreground mb-4 max-w-md mx-auto text-center">
            Tem um projeto, uma ideia ou um desafio com dados? Conte-me. Respondo normalmente em 24 a 48 horas.
          </p>
          <p className="text-[15px] text-muted-foreground mb-10 text-center">
            Prefere escrever diretamente?{" "}
            <a href={`mailto:${personalInfo.email}`} className="text-foreground underline underline-offset-4 rounded">
              email
            </a>{" "}
            ·{" "}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 rounded"
            >
              LinkedIn
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
            {/* Armadilha anti-spam: invisível para pessoas, tentadora para bots */}
            <div
              className="absolute w-px h-px -m-px overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)]"
              aria-hidden="true"
            >
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Nome
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
                disabled={busy}
                placeholder="O seu nome"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={inputClass(errors.name)}
              />
              <FieldError id="contact-name-error" msg={errors.name} />
            </div>

            <div>
              <span id="contact-method-label" className={labelClass}>
                Como prefere ser contactado?
              </span>
              <div
                role="radiogroup"
                aria-labelledby="contact-method-label"
                className="flex gap-1 p-1 rounded-2xl bg-muted/40 backdrop-blur-sm border border-border/40 mb-3"
              >
                {(
                  [
                    { value: "email", label: "Email" },
                    { value: "phone", label: "Telefone" },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={contactType === opt.value}
                    disabled={busy}
                    onClick={() => {
                      setContactType(opt.value);
                      setErrors((e) => ({ ...e, contact: undefined }));
                    }}
                    className={`flex-1 text-[13px] py-2 rounded-xl font-medium transition-all duration-200 ${
                      contactType === opt.value
                        ? "bg-card text-foreground shadow-sm border border-border/60"
                        : "text-muted-foreground hover:text-foreground"
                    } disabled:opacity-50`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {contactType === "email" ? (
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    required
                    disabled={busy}
                    placeholder="email@exemplo.com"
                    aria-invalid={!!errors.contact}
                    aria-describedby={errors.contact ? "contact-info-error" : undefined}
                    className={inputClass(errors.contact)}
                  />
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="w-[120px] shrink-0">
                    <label htmlFor="contact-country" className={labelClass}>
                      Indicativo
                    </label>
                    <select
                      id="contact-country"
                      name="country"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      disabled={busy}
                      className="w-full px-3 py-3 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all duration-200 disabled:opacity-50"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code + c.country} value={c.code}>
                          {c.country} {c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="contact-phone" className={labelClass}>
                      Telefone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                      maxLength={15}
                      required
                      disabled={busy}
                      placeholder="912345678"
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? "contact-info-error" : undefined}
                      className={inputClass(errors.contact)}
                    />
                  </div>
                </div>
              )}
              <FieldError id="contact-info-error" msg={errors.contact} />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                required
                rows={5}
                disabled={busy}
                placeholder="Conte-me sobre o projeto..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`${inputClass(errors.message)} resize-none`}
              />
              <FieldError id="contact-message-error" msg={errors.message} />
            </div>

            {status === "error" && errorMsg && (
              <p role="alert" className="flex items-center gap-2 text-[15px] text-destructive">
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                {errorMsg}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={busy || status === "success"}
              className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-medium text-[15px] transition-all duration-300 ${
                status === "success"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              } disabled:cursor-not-allowed`}
              whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
              whileTap={status === "idle" || status === "error" ? { scale: 0.98 } : {}}
            >
              {busy && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />A enviar...
                </>
              )}
              {(status === "idle" || status === "error") && (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Enviar mensagem
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle className="w-4 h-4" aria-hidden="true" />
                  Mensagem enviada. Obrigado!
                </>
              )}
            </motion.button>
            <p className="sr-only" aria-live="polite">
              {status === "success" ? "Mensagem enviada com sucesso." : ""}
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;

export type ContactType = "email" | "phone";

export type ContactErrors = { name?: string; contact?: string; message?: string };

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^\d{6,15}$/;

export function validateContact(input: {
  name: string;
  message: string;
  contactType: ContactType;
  email: string;
  phone: string;
}): ContactErrors {
  const errors: ContactErrors = {};
  const name = input.name.trim();
  const message = input.message.trim();
  if (name.length < 2 || name.length > 100) errors.name = "Indique o seu nome (2 a 100 caracteres).";
  if (message.length < 10 || message.length > 2000)
    errors.message = "A mensagem deve ter entre 10 e 2000 caracteres.";
  if (input.contactType === "email") {
    if (!EMAIL_RE.test(input.email.trim())) errors.contact = "Indique um email válido.";
  } else if (!PHONE_RE.test(input.phone.trim())) {
    errors.contact = "Indique um telefone válido (6 a 15 dígitos).";
  }
  return errors;
}

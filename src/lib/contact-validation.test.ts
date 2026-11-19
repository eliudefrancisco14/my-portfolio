import { describe, it, expect } from "vitest";
import { validateContact } from "./contact-validation";

const base = { name: "Ana", message: "Olá, tenho um projeto.", contactType: "email" as const, email: "a@b.co", phone: "" };

describe("validateContact", () => {
  it("accepts a valid email submission", () => {
    expect(validateContact(base)).toEqual({});
  });
  it("requires a valid email when Email is chosen", () => {
    expect(validateContact({ ...base, email: "nao-e-email" }).contact).toBeDefined();
    expect(validateContact({ ...base, email: "" }).contact).toBeDefined();
  });
  it("phone must have 6 to 15 digits", () => {
    const p = { ...base, contactType: "phone" as const };
    expect(validateContact({ ...p, phone: "12345" }).contact).toBeDefined();
    expect(validateContact({ ...p, phone: "123456" }).contact).toBeUndefined();
    expect(validateContact({ ...p, phone: "1234567890123456" }).contact).toBeDefined();
  });
  it("message must be 10 to 2000 characters and name 2 to 100", () => {
    expect(validateContact({ ...base, message: "curta" }).message).toBeDefined();
    expect(validateContact({ ...base, name: "A" }).name).toBeDefined();
  });
});

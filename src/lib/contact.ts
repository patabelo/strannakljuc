import { SITE } from "./site";

export const CONTACT_LIMITS = {
  name: 120,
  email: 254,
  message: 4000,
  requestBody: 8_192,
} as const;

export const CONTACT_TO = SITE.email;
export const CONTACT_FROM = `spletna-stran@${SITE.domain}`;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

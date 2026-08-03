// Server-side input hardening for public form endpoints.
// Escapes HTML, validates formats, clamps length, and provides a
// lightweight in-memory rate limiter (per server instance).

export function escapeHtml(value: unknown): string {
 return String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");
}

export function clamp(value: unknown, max: number): string {
 return String(value ?? "").trim().slice(0, max);
}

export function isEmail(value: string): boolean {
 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 150;
}

export function isPhone(value: string): boolean {
 // + optional, then 7–20 digits allowing spaces, dashes, parens
 const digits = value.replace(/[^\d]/g, "");
 return /^[+\d][\d\s()\-]{6,24}$/.test(value) && digits.length >= 7 && digits.length <= 15;
}

type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(
 key: string,
 limit = 5,
 windowMs = 60_000
): { allowed: boolean; retryAfter: number } {
 const now = Date.now();
 const b = buckets.get(key);
 if (!b || now > b.reset) {
  buckets.set(key, { count: 1, reset: now + windowMs });
  return { allowed: true, retryAfter: 0 };
 }
 if (b.count >= limit) {
  return { allowed: false, retryAfter: Math.ceil((b.reset - now) / 1000) };
 }
 b.count++;
 return { allowed: true, retryAfter: 0 };
}

export function clientIp(req: Request): string {
 const fwd = req.headers.get("x-forwarded-for");
 if (fwd) return fwd.split(",")[0].trim();
 return req.headers.get("x-real-ip") || "unknown";
}

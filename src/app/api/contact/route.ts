import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { escapeHtml, clamp, isEmail, isPhone, rateLimit, clientIp } from "@/lib/validate";

export async function POST(req: Request) {
 try {
  const { allowed, retryAfter } = rateLimit(`contact:${clientIp(req)}`);
  if (!allowed) {
   return NextResponse.json(
    { error: "Too many requests. Please try again shortly." },
    { status: 429, headers: { "Retry-After": String(retryAfter) } }
   );
  }

  const body = await req.json();

  const name = clamp(body?.name, 100);
  const email = clamp(body?.email, 150);
  const phone = clamp(body?.phone, 30);
  const message = clamp(body?.message, 3000);

  if (!name || !email || !message) {
   return NextResponse.json(
    { error: "Missing required fields" },
    { status: 400 }
   );
  }
  if (!isEmail(email)) {
   return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (phone && !isPhone(phone)) {
   return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const html = `
   <h2>New Contact Form Submission</h2>
   <p><strong>Name:</strong> ${escapeHtml(name)}</p>
   <p><strong>Email:</strong> ${escapeHtml(email)}</p>
   <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p>
   <hr />
   <h3>Message:</h3>
   <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  await sendEmail({
   to: process.env.CLINIC_EMAIL || "contact@happytoothdental.in",
   subject: `Website Inquiry from ${name}`,
   html,
  });

  return NextResponse.json({ success: true });
 } catch (error) {
  console.error("Contact API Error:", error);
  return NextResponse.json(
   { error: "Failed to submit message" },
   { status: 500 }
  );
 }
}

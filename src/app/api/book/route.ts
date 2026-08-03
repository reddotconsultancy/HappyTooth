import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { escapeHtml, clamp, isPhone, rateLimit, clientIp } from "@/lib/validate";

export async function POST(req: Request) {
 try {
  const { allowed, retryAfter } = rateLimit(`book:${clientIp(req)}`);
  if (!allowed) {
   return NextResponse.json(
    { error: "Too many requests. Please try again shortly." },
    { status: 429, headers: { "Retry-After": String(retryAfter) } }
   );
  }

  const body = await req.json();

  const service = clamp(body?.service, 100);
  const location = clamp(body?.location, 100);
  const name = clamp(body?.name, 100);
  const phone = clamp(body?.phone, 30);

  if (!service || !location || !name || !phone) {
   return NextResponse.json(
    { error: "Missing required fields" },
    { status: 400 }
   );
  }
  if (!isPhone(phone)) {
   return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const html = `
   <h2>New Appointment Request</h2>
   <p><strong>Patient Name:</strong> ${escapeHtml(name)}</p>
   <p><strong>Phone Number:</strong> ${escapeHtml(phone)}</p>
   <p><strong>Requested Service:</strong> ${escapeHtml(service)}</p>
   <p><strong>Preferred Clinic:</strong> ${escapeHtml(location)}</p>
   <hr />
   <p><em>This request was submitted via the QuickBook widget on the HappyTooth website.</em></p>
  `;

  await sendEmail({
   to: process.env.CLINIC_EMAIL || "appointments@happytoothdental.in",
   subject: `New Appointment Request - ${name}`,
   html,
  });

  return NextResponse.json({ success: true });
 } catch (error) {
  console.error("Booking API Error:", error);
  return NextResponse.json(
   { error: "Failed to submit booking" },
   { status: 500 }
  );
 }
}

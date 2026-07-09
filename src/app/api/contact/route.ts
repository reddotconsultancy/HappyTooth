import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
 try {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name || !email || !message) {
   return NextResponse.json(
    { error: "Missing required fields" },
    { status: 400 }
   );
  }

  const html = `
   <h2>New Contact Form Submission</h2>
   <p><strong>Name:</strong> ${name}</p>
   <p><strong>Email:</strong> ${email}</p>
   <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
   <hr />
   <h3>Message:</h3>
   <p>${message.replace(/\n/g, "<br/>")}</p>
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

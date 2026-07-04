import { NextResponse } from "next";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
 try {
  const body = await req.json();
  const { service, location, name, phone } = body;

  if (!service || !location || !name || !phone) {
   return NextResponse.json(
    { error: "Missing required fields" },
    { status: 400 }
   );
  }

  const html = `
   <h2>New Appointment Request</h2>
   <p><strong>Patient Name:</strong> ${name}</p>
   <p><strong>Phone Number:</strong> ${phone}</p>
   <p><strong>Requested Service:</strong> ${service}</p>
   <p><strong>Preferred Clinic:</strong> ${location}</p>
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

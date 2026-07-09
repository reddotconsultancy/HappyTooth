import nodemailer from "nodemailer";

interface SendEmailParams {
 to: string;
 subject: string;
 html: string;
}

export const sendEmail = async ({ to, subject, html }: SendEmailParams) => {
 // Mock implementation if env variables are missing
 const isMock = !process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS;

 if (isMock) {
  if (process.env.NODE_ENV === "production") {
   // In production with no SMTP config, fail loudly rather than silently losing submissions
   throw new Error("SMTP credentials not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in Vercel Environment Variables.");
  }
  // In development, log to console (safe to ignore)
  console.log("==========================================" );
  console.log("MOCK EMAIL (DEVELOPMENT ONLY — configure SMTP for production)");
  console.log(`TO: ${to}`);
  console.log(`SUBJECT: ${subject}`);
  console.log("CONTENT:", html);
  console.log("==========================================");
  return { success: true, message: "Mock email logged to console." };
 }

 try {
  const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: Number(process.env.SMTP_PORT) || 587,
   secure: process.env.SMTP_PORT === "465",
   auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
   },
  });

  const info = await transporter.sendMail({
   from: `"HappyTooth Notifications" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
   to,
   subject,
   html,
  });

  console.log("Message sent: %s", info.messageId);
  return { success: true, messageId: info.messageId };
 } catch (error) {
  console.error("Error sending email:", error);
  return { success: false, error: error instanceof Error ? error.message : String(error) };
 }
};

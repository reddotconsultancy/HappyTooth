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
  console.log("==========================================");
  console.log("MOCK EMAIL SENT (Add SMTP credentials to .env to send real emails)");
  console.log(`TO: ${to}`);
  console.log(`SUBJECT: ${subject}`);
  console.log("CONTENT:");
  console.log(html);
  console.log("==========================================");
  return { success: true, message: "Mock email sent successfully." };
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
  throw new Error("Failed to send email");
 }
};

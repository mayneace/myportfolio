import nodemailer from "nodemailer";
import dns from "node:dns";

interface EmailOptions {
  name: string;
  email: string;
  message: string;
}

dns.setDefaultResultOrder("ipv4first");

export const sendNotificationEmail = async ({
  name,
  email,
  message,
}: EmailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
  });
};

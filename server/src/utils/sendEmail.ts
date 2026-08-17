import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  name: string;
  email: string;
  message: string;
}

export const sendNotificationEmail = async ({ name, email, message }: EmailOptions) => {
  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>", // swap once you verify your own domain
    to: process.env.NOTIFY_EMAIL as string,
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
  });

  if (error) {
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }

  return data;
};
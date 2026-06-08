import { Resend } from "resend";
import nodemailer from "nodemailer";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@ucbsltd.co.uk";

function buildEmailContent(data: ContactEmailPayload) {
  const subject = `New quote request — ${data.name} (${data.company})`;

  const text = [
    "New contact form submission from ucbsltd.co.uk",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company: ${data.company}`,
    `Service: ${data.service}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <h2>New quote request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;

  return { subject, text, html };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(data: ContactEmailPayload) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { subject, html, text } = buildEmailContent(data);
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "UCBS Website <onboarding@resend.dev>";

  const result = await resend.emails.send({
    from,
    to: TO_EMAIL,
    replyTo: data.email,
    subject,
    html,
    text,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
}

async function sendViaSmtp(data: ContactEmailPayload) {
  const { subject, html, text } = buildEmailContent(data);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER,
    to: TO_EMAIL,
    replyTo: data.email,
    subject,
    html,
    text,
  });
}

export async function sendContactEmail(data: ContactEmailPayload) {
  if (process.env.RESEND_API_KEY) {
    await sendViaResend(data);
    return;
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    await sendViaSmtp(data);
    return;
  }

  throw new Error(
    "Email delivery is not configured. Set RESEND_API_KEY or SMTP credentials in your environment."
  );
}

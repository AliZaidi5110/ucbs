"use server";

import { db } from "@/lib/db";
import { sendContactEmail } from "@/lib/send-contact-email";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service option"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

async function saveSubmission(data: ContactInput) {
  try {
    await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        message: data.message,
      },
    });
  } catch (error) {
    console.warn("Contact submission saved to email only (database unavailable):", error);
  }
}

export async function submitContactForm(data: ContactInput) {
  try {
    const validatedData = contactSchema.parse(data);

    await sendContactEmail(validatedData);
    await saveSubmission(validatedData);

    return {
      success: true,
      message:
        "Your request has been sent successfully. A UCBS specialist will contact you shortly.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed: " + error.errors.map((e) => e.message).join(", "),
      };
    }

    const isConfigError =
      error instanceof Error &&
      error.message.includes("Email delivery is not configured");

    return {
      success: false,
      message: isConfigError
        ? "Our email service is being set up. Please contact us directly at info@ucbsltd.co.uk or call +44 1437 957009."
        : "We could not send your request right now. Please email info@ucbsltd.co.uk or call +44 1437 957009.",
    };
  }
}

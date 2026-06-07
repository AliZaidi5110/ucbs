"use server";

import { db } from "@/lib/db";
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

export async function submitContactForm(data: ContactInput) {
  try {
    // Validate inputs server-side
    const validatedData = contactSchema.parse(data);

    // Write to SQLite database
    const submission = await db.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        service: validatedData.service,
        message: validatedData.message,
      },
    });

    return {
      success: true,
      message: "Your request has been successfully submitted! A specialist will contact you shortly.",
      submissionId: submission.id,
    };
  } catch (error) {
    console.error("Prisma insertion error in submitContactForm:", error);
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed: " + error.errors.map(e => e.message).join(", "),
      };
    }
    return {
      success: false,
      message: "An internal server error occurred. Please try again or email us directly.",
    };
  }
}

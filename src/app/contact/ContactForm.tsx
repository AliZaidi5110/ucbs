"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitContactForm } from "./actions";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

// Form Validation Schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitResult(null);
    startTransition(async () => {
      const response = await submitContactForm(data);
      setSubmitResult(response);
      if (response.success) {
        reset();
      }
    });
  };

  const servicesList = [
    "Merchant Services (Card Terminals)",
    "Business Funding (Loans / Asset Funding)",
    "Business Energy (Electricity & Gas)",
    "Broadband & Telecoms (VoIP / Fibre)",
    "Waste Management & Recycling",
    "Water Bills & Consolidation Reviews",
    "Web & Digital Marketing Consultation",
  ];

  return (
    <div className="surface-card w-full p-6 sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">Request a Free Quote</h2>

      {/* Dynamic Accessible Alert Message */}
      {submitResult && (
        <div
          role="alert"
          aria-live="assertive"
          className={`p-6 rounded-2xl mb-8 flex items-start gap-4 border ${
            submitResult.success
              ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 text-emerald-800 dark:text-emerald-300"
              : "bg-red-50 dark:bg-red-950/30 border-red-200 text-red-800 dark:text-red-300"
          }`}
        >
          {submitResult.success ? (
            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" aria-hidden="true" />
          ) : (
            <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" aria-hidden="true" />
          )}
          <div>
            <h3 className="font-extrabold text-base mb-1">
              {submitResult.success ? "Submission Successful" : "Submission Failed"}
            </h3>
            <p className="text-sm font-medium leading-relaxed">{submitResult.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-[14px] font-bold text-foreground mb-[6px]">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`h-11 w-full rounded-lg border-2 bg-background px-3 text-base text-foreground transition-shadow placeholder:text-muted-foreground focus:border-brand-blue focus:outline-none ${
                errors.name ? "border-red-500" : "border-border"
              }`}
              placeholder="e.g. John Smith"
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-xs font-bold text-red-500" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-[14px] font-bold text-foreground mb-[6px]">
              Corporate Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`h-11 w-full rounded-lg border-2 bg-background px-3 text-base text-foreground transition-shadow placeholder:text-muted-foreground focus:border-brand-blue focus:outline-none ${
                errors.email ? "border-red-500" : "border-border"
              }`}
              placeholder="e.g. john@yourcompany.co.uk"
              required
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-xs font-bold text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-[14px] font-bold text-foreground mb-[6px]">
              Contact Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`h-11 w-full rounded-lg border-2 bg-background px-3 text-base text-foreground transition-shadow placeholder:text-muted-foreground focus:border-brand-blue focus:outline-none ${
                errors.phone ? "border-red-500" : "border-border"
              }`}
              placeholder="e.g. 07123456789"
              required
            />
            {errors.phone && (
              <p id="phone-error" className="mt-2 text-xs font-bold text-red-500" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label htmlFor="company" className="block text-[14px] font-bold text-foreground mb-[6px]">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              aria-invalid={errors.company ? "true" : "false"}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={`h-11 w-full rounded-lg border-2 bg-background px-3 text-base text-foreground transition-shadow placeholder:text-muted-foreground focus:border-brand-blue focus:outline-none ${
                errors.company ? "border-red-500" : "border-border"
              }`}
              placeholder="e.g. Apex Ltd"
              required
            />
            {errors.company && (
              <p id="company-error" className="mt-2 text-xs font-bold text-red-500" role="alert">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Service Selector Dropdown */}
        <div>
          <label htmlFor="service" className="block text-[14px] font-bold text-foreground mb-[6px]">
            Primary Service
          </label>
          <select
            id="service"
            {...register("service")}
            aria-invalid={errors.service ? "true" : "false"}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={`h-11 w-full rounded-lg border-2 bg-background px-3 text-base text-foreground transition-shadow focus:border-brand-blue focus:outline-none ${
              errors.service ? "border-red-500" : "border-border"
            }`}
            required
          >
            <option value="">-- Select Business Service --</option>
            {servicesList.map((serviceName) => (
              <option key={serviceName} value={serviceName}>
                {serviceName}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-2 text-xs font-bold text-red-500" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-[14px] font-bold text-foreground mb-[6px]">
            Details of Inquiry
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full rounded-lg border-2 bg-background px-3 py-3 text-base text-foreground transition-shadow placeholder:text-muted-foreground focus:border-brand-blue focus:outline-none ${
              errors.message ? "border-red-500" : "border-border"
            }`}
            placeholder="Please detail your current supplier or contract dates if known..."
            required
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-xs font-bold text-red-500" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Mock reCAPTCHA verification checkbox */}
        <div className="flex items-start bg-muted p-4 rounded-xl border border-border">
          <div className="flex items-center h-5">
            <input
              id="recaptcha-bypass"
              type="checkbox"
              defaultChecked
              disabled
              className="w-4 h-4 rounded text-indigo-600 border-border focus:ring-indigo-500"
            />
          </div>
          <div className="ml-3 text-xs">
            <label htmlFor="recaptcha-bypass" className="font-bold text-foreground block">
              Protected by Google reCAPTCHA
            </label>
            <p className="text-muted-foreground mt-0.5">
              This site relies on reCAPTCHA security metrics. Privacy guidelines apply.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 mr-3 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            "Request Free Quote"
          )}
        </button>
      </form>
    </div>
  );
};

"use client";

import React, { useState, useRef } from "react";

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void> | void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  monthlyCardSales: string;
  fundingAmount: string;
  message: string;
}

const serviceOptions = [
  "Card Payment Terminals (£0 Upfront Hardware)",
  "Business Funding / Merchant Cash Advance (£5k–£500k)",
  "Dual Bundle: New Terminal + Fast Funding",
  "Business Telecoms & Cloud VoIP",
  "Commercial Energy Tariff Review",
];

const salesRanges = [
  "Not yet taking card payments (New business)",
  "Under £5,000 / month",
  "£5,000 – £15,000 / month",
  "£15,000 – £40,000 / month",
  "£40,000 – £100,000 / month",
  "£100,000+ / month",
];

const fundingRanges = [
  "Not looking for funding right now",
  "£5,000 – £15,000",
  "£15,000 – £35,000",
  "£35,000 – £75,000",
  "£75,000 – £150,000",
  "£150,000+",
];

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: serviceOptions[0],
    monthlyCardSales: salesRanges[2],
    fundingAmount: fundingRanges[2],
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Your name is required";
    if (!formData.company.trim()) newErrors.company = "Trading business name is required";
    if (!formData.phone.trim()) newErrors.phone = "UK phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:bg-slate-900 dark:text-white ${
      errors[field] ? "border-rose-500" : "border-slate-300 dark:border-slate-700"
    }`;

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-8 text-center dark:bg-emerald-950/20">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-slate-950 mb-4 shadow-lg">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Application Received!
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          Thank you, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. A dedicated UK commercial specialist is reviewing your request for <strong className="text-emerald-600 dark:text-emerald-400">{formData.company}</strong>.
        </p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          We will contact you via phone or email at <span className="font-semibold text-slate-700 dark:text-slate-300">{formData.phone}</span> within 15–30 minutes during business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: serviceOptions[0],
              monthlyCardSales: salesRanges[2],
              fundingAmount: fundingRanges[2],
              message: "",
            });
          }}
          className="mt-6 rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div className="rounded-xl bg-rose-50 p-4 text-xs font-semibold text-rose-800 dark:bg-rose-950/40 dark:text-rose-300" role="alert">
          Something went wrong submitting your form. Please call us directly on 0800 123 4567.
        </div>
      )}

      {/* Row 1: Name and Business Name */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Your Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. David Smith"
            value={formData.name}
            onChange={handleChange}
            className={inputClass("name")}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Trading Business Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Bellini Bistro Ltd"
            value={formData.company}
            onChange={handleChange}
            className={inputClass("company")}
            autoComplete="organization"
          />
          {errors.company && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.company}</p>}
        </div>
      </div>

      {/* Row 2: Phone and Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            UK Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. 07123 456789"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass("phone")}
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Business Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. info@bellinibistro.co.uk"
            value={formData.email}
            onChange={handleChange}
            className={inputClass("email")}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>}
        </div>
      </div>

      {/* Row 3: Primary Solution Needed */}
      <div>
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          What is your primary requirement? *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass("service")}
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Monthly Card Turnover & Funding Amount */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="monthlyCardSales" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Monthly Card Takings
          </label>
          <select
            id="monthlyCardSales"
            name="monthlyCardSales"
            value={formData.monthlyCardSales}
            onChange={handleChange}
            className={inputClass("monthlyCardSales")}
          >
            {salesRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="fundingAmount" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Funding Amount Needed
          </label>
          <select
            id="fundingAmount"
            name="fundingAmount"
            value={formData.fundingAmount}
            onChange={handleChange}
            className={inputClass("fundingAmount")}
          >
            {fundingRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Optional Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
          Notes or Questions <span className="font-normal text-slate-400">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your business or if you have an existing terminal contract..."
          value={formData.message}
          onChange={handleChange}
          className={inputClass("message")}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-emerald-500 py-4 px-6 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-75 flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <span>Checking eligibility &amp; best rates...</span>
        ) : (
          <>
            <span>Submit Eligibility Check &amp; Request Quote</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>

      <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
        <span className="flex items-center gap-1">
          <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          No Impact on Personal Credit Score
        </span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          24h Decision Guarantee
        </span>
      </div>
    </form>
  );
}

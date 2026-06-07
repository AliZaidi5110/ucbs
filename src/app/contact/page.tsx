import React from "react";
import { ContactForm } from "./ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact UCBS Ltd | Free Business Cost Review",
  description:
    "Contact UCBS Ltd for a free UK business cost review. Call +44 1437 957009 or email info@ucbsltd.co.uk to audit energy, merchant services, telecoms, and utilities.",
  path: "/contact",
  keywords: [
    "contact UCBS",
    "free business utility audit",
    "business energy quote UK",
    "merchant services enquiry",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd
        data={generateWebPageSchema(
          "Contact UCBS Ltd | Free Business Cost Review",
          "Contact UCBS Ltd for a free UK business cost review. Call +44 1437 957009 or email info@ucbsltd.co.uk to audit energy, merchant services, telecoms, and utilities.",
          "/contact"
        )}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Connect with Our Advisors"
        description="Find out how much your business can save. Fill out our free audit inquiry or contact our support desk directly."
      />

      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="surface-card p-6 sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-foreground">Contact Channels</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Direct Phone Support</h3>
                      <a href="tel:+441437957009" className="mt-1 block font-semibold text-brand-blue hover:underline">
                        +44 (0) 1437 957009
                      </a>
                      <p className="mt-1 text-xs text-muted-foreground">Local UK mobile: +44 7344 194027</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Brokerage Inquiries</h3>
                      <a href="mailto:info@ucbsltd.co.uk" className="mt-1 block font-semibold text-brand-blue hover:underline">
                        info@ucbsltd.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Headquarters</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        Utility Concepts Business Solutions Ltd
                        <br />
                        12 Scotchwell View, Haverfordwest,
                        <br />
                        Pembrokeshire, Wales, SA61 2RE
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Office Operations</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Monday – Friday: 9:00 AM – 5:30 PM GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted p-6">
                <h3 className="font-bold text-foreground">Your GDPR Protection</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We handle all audit submission details in absolute confidentiality. UCBS will never distribute your details to unapproved advertising networks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

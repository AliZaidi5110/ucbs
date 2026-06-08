import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { getWhatsAppUrl, SITE } from "@/lib/seo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Merchant Services", href: "/services/merchant-services" },
    { name: "Business Funding", href: "/services/business-funding" },
    { name: "Business Utilities", href: "/services/business-energy" },
    { name: "Broadband & Telecoms", href: "/services/broadband-telecoms" },
    { name: "Waste Management", href: "/services/waste-management" },
    { name: "Water Bills", href: "/services/water-bills" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Support", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Cookie Statement", href: "/cookie-statement" },
  ];

  return (
    <footer className="border-t border-slate-800 bg-brand-navy text-slate-300" aria-label="Footer Navigation">
      <div className="page-container section-padding pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="UCBS Utility Concepts Business Solutions Ltd"
                width={220}
                height={60}
                className="h-12 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Utility Concepts Business Solutions delivers expert cost-saving and management services to SMEs across the United Kingdom. We are ICO registered.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+441437957009"
                className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                aria-label="Call UCBS at +44 1437 957009"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                +44 (0) 1437 957009
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                aria-label={`Message UCBS on WhatsApp at ${SITE.whatsappDisplay}`}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center text-[#25D366]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                WhatsApp: {SITE.whatsappDisplay}
              </a>
              <a
                href="mailto:info@ucbsltd.co.uk"
                className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                aria-label="Email UCBS at info@ucbsltd.co.uk"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                info@ucbsltd.co.uk
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                <span>
                  12 Scotchwell View,
                  <br />
                  Haverfordwest, Wales,
                  <br />
                  SA61 2RE
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2.5">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Compliance</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              <strong className="text-slate-300">Regulatory Status:</strong> UCBS acts as a credit broker/introducer, not a lender. We introduce clients to third-party funding providers.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              <strong className="text-slate-300">ICO Registered:</strong> We protect user data and only share details with verified partners to compile comparison options.
            </p>
          </div>
        </div>

        <hr className="my-10 border-slate-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Utility Concepts Business Solutions Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

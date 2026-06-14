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
    { name: "Business Energy and Gas", href: "/services/business-energy" },
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
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#1877F2] hover:text-white"
                  aria-label="Follow UCBS on Facebook"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-[#E4405F] hover:text-white"
                  aria-label="Follow UCBS on Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
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

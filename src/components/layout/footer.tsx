import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "Merchant Services", href: "/services/merchant-services" },
    { name: "Business Funding", href: "/services/business-funding" },
    { name: "Business Energy", href: "/services/business-energy" },
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

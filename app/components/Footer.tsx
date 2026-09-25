import React from "react";
import Link from "next/link";

const serviceLinks = [
  { href: "/services/card-machines", label: "Card Machines & POS" },
  { href: "/services/business-funding", label: "Business Funding (MCA)" },
  { href: "/services/business-funding", label: "Unsecured SME Loans" },
  { href: "/services/telecoms", label: "Business Broadband & VoIP" },
  { href: "/services/business-energy", label: "Commercial Energy Tariffs" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Check Eligibility" },
  { href: "/services", label: "All Services" },
  { href: "/blog", label: "Merchant Insights & Guides" },
  { href: "/contact", label: "Contact Support" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="border-t border-slate-800 bg-slate-950 text-slate-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="UCBS Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black text-lg">
                U
              </div>
              <span>UCBS</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Utility Concepts Business Solutions Ltd (UCBS Ltd) is a trusted UK business solutions provider specialising in modern card payment machines, Merchant Cash Advance funding, business telecoms, and commercial utility reviews.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-300">Direct Phone:</span>
                <a href="tel:+442922716852" className="text-emerald-400 hover:underline">029 2271 6852</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-300">Direct Email:</span>
                <a href="mailto:info@ucbsltd.co.uk" className="text-emerald-400 hover:underline">info@ucbsltd.co.uk</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-300">Address:</span>
                <span>Haverfordwest, Pembrokeshire, Wales SA61 2RE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-300">Hours:</span>
                <span>Mon – Fri: 8:30am – 6:00pm</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <nav aria-label="Services links">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-400">
              Commercial Solutions
            </h2>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Company */}
          <nav aria-label="Company links">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-emerald-400">
              Company &amp; Legal
            </h2>
            <ul className="space-y-2.5" role="list">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Regulatory & Disclaimer Strip */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Disclaimer &amp; Financial Disclosure:</strong> UCBS is a commercial finance and merchant services broker, not a direct lender or bank. We work with leading UK merchant acquirers and FCA-authorised commercial finance providers. Finance is subject to status and minimum eligibility criteria. Terms and conditions apply.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <p>&copy; {currentYear} UCBS Commercial Solutions. All rights reserved.</p>
            <p>Registered in England &amp; Wales • PCI-DSS Compliant</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

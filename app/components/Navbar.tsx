"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/card-machines", label: "Card Machines" },
  { href: "/services/business-funding", label: "Business Funding" },
  { href: "/services/telecoms", label: "Telecoms" },
  { href: "/services/business-energy", label: "Energy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !toggleRef.current?.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-xl backdrop-blur-md border-b border-slate-800"
          : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-900"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 group"
          aria-label="UCBS Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            U
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white block leading-none">
              UCBS
            </span>
            <span className="text-[10px] font-semibold text-emerald-400 tracking-wider uppercase block mt-0.5">
              Card Terminals &amp; Funding
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-6 lg:flex" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-xs font-semibold text-slate-300 transition-colors hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Action: Direct Phone + CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+442922716852"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <span>029 2271 6852</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex min-h-[42px] items-center rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-md transition-all hover:bg-emerald-400 hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            Check Eligibility
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl text-slate-300 transition-colors hover:bg-slate-800 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="border-t border-slate-800 bg-slate-950 px-4 py-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-850 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+442922716852"
                className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-sm font-bold text-emerald-400"
              >
                <span>📞 Call UK Support: 029 2271 6852</span>
              </a>
            </li>
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-xl bg-emerald-500 px-3 py-3 text-center text-sm font-bold text-slate-950 shadow-md"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                Check Eligibility &amp; Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

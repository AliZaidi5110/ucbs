"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import OrderModal from "./OrderModal";

const navLinks = [
  { href: "/#shop-terminals", label: "Products" },
  { href: "/services/business-funding", label: "Business Funding" },
  { href: "/#shop-terminals", label: "Pricing" },
  { href: "/#shop-terminals", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-200/80"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
        }`}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand Logo (Clean, sleek dark typography like reference) */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="UCBS Home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-black text-lg transition-transform group-hover:scale-105">
              U
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-950 block leading-none font-sans">
                UCBS
              </span>
              <span className="text-[9px] font-bold text-emerald-600 tracking-wider uppercase block mt-0.5">
                Merchant &amp; Funding
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+442922716852"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>029 2271 6852</span>
            </a>

            <button
              type="button"
              onClick={() => setOrderModalOpen(true)}
              className="rounded-full bg-[#c6f3ff] hover:bg-[#b0edf7] text-slate-950 font-bold px-5 py-2.5 text-xs sm:text-sm transition-all shadow-xs"
            >
              Order now
            </button>

            <Link
              href="/#shop-terminals"
              className="rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-2.5 text-xs sm:text-sm transition-all shadow-xs"
            >
              Shop now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setOrderModalOpen(true)}
              className="sm:hidden rounded-full bg-slate-950 text-white font-bold px-3.5 py-1.5 text-xs"
            >
              Order now
            </button>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fade-in shadow-xl"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setOrderModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-950 text-white font-bold text-xs text-center shadow-sm"
              >
                Order Card Terminal
              </button>
              <a
                href="https://wa.me/442922716852"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center shadow-sm"
              >
                WhatsApp Desk
              </a>
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-3">
              <a
                href="tel:+442922716852"
                className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-slate-900"
              >
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>Call Sales: 029 2271 6852</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}

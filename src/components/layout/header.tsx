"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-6 focus:py-3 focus:font-semibold focus:text-brand-navy focus:shadow-xl"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-navy shadow-lg">
        <div className="page-container">
          <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
            <Logo />

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-white/15 text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-accent text-sm" aria-label="Get a free business cost review">
                Free Review
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 top-16 z-40 bg-black/50 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="mobile-navigation"
              className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-white/10 bg-brand-navy px-4 py-4 lg:hidden"
              aria-label="Mobile Navigation"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-lg px-4 py-3.5 text-base font-semibold ${
                      isActive(item.href)
                        ? "bg-white/15 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-accent mt-3 w-full text-center"
                >
                  Get a Free Review
                </Link>
              </div>
            </nav>
          </>
        )}
      </header>
    </>
  );
};

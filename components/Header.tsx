"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-espresso/95 backdrop-blur supports-[backdrop-filter]:bg-espresso/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" aria-label="Wood Prime & Renovation home">
          <Logo variant="light" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/90 transition hover:text-brass-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${SITE.phoneHref}`}
          className="hidden rounded-md bg-brass px-5 py-2.5 text-sm font-semibold text-espresso transition hover:bg-brass-light md:inline-block"
        >
          {SITE.phoneDisplay}
        </a>
        <button
          aria-label="Toggle menu"
          className="text-cream md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-cream/10 bg-espresso px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-cream/90"
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneHref}`} className="text-sm font-semibold text-brass-light">
              Call {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

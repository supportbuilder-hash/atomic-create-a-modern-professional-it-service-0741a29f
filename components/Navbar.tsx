"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X } from 'lucide-react';
import { APP_NAME, LOGO_URL, navLinks, primaryCta, type NavLink } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navT = (t.raw("nav") ?? {}) as Record<string, string>;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const resolveHref = (link: NavLink) => {
    if (link.href.startsWith("/#")) {
      return pathname === "/" ? `#${link.href.split("#")[1]}` : link.href;
    }
    return link.href;
  };

  const handleClick = (link: NavLink) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" && link.href.startsWith("/#")) {
      e.preventDefault();
      document.querySelector(`#${link.href.split("#")[1]}`)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(11,42,107,0.08)]"
          : "border-transparent bg-[var(--background)]/60 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
        >
          <img src={LOGO_URL} alt={`${APP_NAME} logo`} className="h-9 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={resolveHref(link)}
              onClick={handleClick(link)}
              className="text-sm font-medium text-[var(--foreground)]/80 transition-colors duration-200 hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)] rounded-sm"
            >
              {navT[link.key] ?? link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href={resolveHref(primaryCta)}
            onClick={handleClick(primaryCta)}
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(11,42,107,0.08)] transition-all duration-300 hover:bg-[var(--accent)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            {navT[primaryCta.key] ?? primaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--foreground)]/5 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={resolveHref(link)}
                  onClick={handleClick(link)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--foreground)]/80 transition-colors duration-200 hover:bg-[var(--foreground)]/5 hover:text-[var(--primary)]"
                >
                  {navT[link.key] ?? link.label}
                </Link>
              ))}
              <Link
                href={resolveHref(primaryCta)}
                onClick={handleClick(primaryCta)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[var(--accent)]"
              >
                {navT[primaryCta.key] ?? primaryCta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

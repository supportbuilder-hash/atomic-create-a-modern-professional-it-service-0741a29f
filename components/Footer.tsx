"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Circle, Mail } from 'lucide-react';
import { APP_NAME, LOGO_URL, navLinks, type NavLink } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const socialIconMap: Record<string, typeof Github> = {
  LinkedIn: Linkedin,
  "Twitter / X": Twitter,
  GitHub: Github,
  Dribbble: Circle,
};

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations();

  const navT = (t.raw("nav") ?? {}) as Record<string, string>;
  const footerT = (t.raw("footer") ?? {}) as {
    tagline?: string;
    navHeading?: string;
    socialHeading?: string;
    contactHeading?: string;
    email?: string;
    phone?: string;
    address?: string;
    copyright?: string;
    socialLinks?: { label: string; href: string }[];
  };

  const socialLinks = Array.isArray(footerT.socialLinks) ? footerT.socialLinks : [];

  const resolveHref = (link: NavLink) => {
    if (!link.href.startsWith("/#")) return link.href;
    if (pathname === "/") return `#${link.href.slice(2)}`;
    return link.href;
  };

  const handleClick = (link: NavLink) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(`#${link.href.slice(2)}`)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[var(--accent)] text-white">
      <Reveal className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="max-w-sm">
            <img src={LOGO_URL} alt={`${APP_NAME} logo`} className="h-9 w-auto brightness-0 invert" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {footerT.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social, i) => {
                const Icon = socialIconMap[social.label] ?? Circle;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              {footerT.navHeading}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={resolveHref(link)}
                    onClick={handleClick(link)}
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              {footerT.contactHeading}
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white/50" aria-hidden="true" />
                <a href={`mailto:${footerT.email}`} className="transition-colors duration-200 hover:text-white">
                  {footerT.email}
                </a>
              </li>
              {footerT.phone && (
                <li className="text-white/75">{footerT.phone}</li>
              )}
              {footerT.address && (
                <li className="text-white/60">{footerT.address}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          {footerT.copyright}
        </div>
      </Reveal>
    </footer>
  );
}

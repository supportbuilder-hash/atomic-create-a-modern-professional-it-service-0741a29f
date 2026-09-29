export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export const APP_NAME = "Datics.ai";

export const TAGLINE =
  "Engineering intelligent software for the next decade of business.";

export const LOGO_URL =
  "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/logos/0741a29f-2fca-4630-8ee5-0d3335bcd307/9a6b73a8d19a421d9e39975b6b5eb553.png";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Services", href: "/services", key: "services" },
  { label: "About", href: "/#about", key: "about" },
  { label: "Portfolio", href: "/case-studies", key: "portfolio" },
  { label: "Process", href: "/#process", key: "process" },
  { label: "Contact", href: "/contact", key: "contact" },
];

export const primaryCta: NavLink = {
  label: "Get Started",
  href: "/contact",
  key: "cta",
};

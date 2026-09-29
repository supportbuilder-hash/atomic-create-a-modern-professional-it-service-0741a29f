# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
Create a modern, professional IT services company website with a clean and premium design. Use a blue, white, and dark color palette with subtle gradients, smooth animations, and a fully responsive layout.

Include:

* Hero section with a strong headline, short description, and “Get Started” / “Contact Us” CTAs
* IT services section covering Web Development, Mobile App Development, AI & Machine Learning, Cloud Solutions, DevOps, and UI/UX Design
* About Us section highlighting expertise and experience
* Technologies/tech stack section with recognizable technology icons
* Portfolio/Case Studies section with project cards
* Why Choose Us section with key benefits and statistics
* Process section showing how we work from discovery to deployment
* Client testimonials
* FAQ section
* Contact form with name, email, company, and project details
* Professional footer with navigation, social links, and contact information

The overall design should feel like a modern technology consultancy similar to a premium SaaS/IT company website, with strong typography, generous spacing, polished cards, and clear visual hierarchy.

Additional details provided by the user:
- What is your company's name?: Datics.ai

## Goal
Build a premium one-page marketing website for Datics.ai, an IT services and technology consultancy, with a complete homepage covering hero, services, about, tech stack, portfolio, why-choose-us, process, testimonials, FAQ, and contact.

## Project type
landing-page

## Design system — match this exactly
- Color tokens: `--background: #f7f9fc`, `--foreground: #0b1220`, `--card: #ffffff`, `--border: #e1e7f0`, `--muted-foreground: #5b6b82`, `--primary: #155eef`, `--accent: #0b2a6b`, `--primary-glow: #5b9dff`
- Fonts: Manrope

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`footer`, `nav`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.

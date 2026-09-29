"use client";

import Link from "next/link";
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description:
      "Best for small, well-scoped projects that need a focused team to ship fast.",
    price: "Project-based",
    priceNote: "Fixed scope, fixed price",
    features: [
      "Single product or feature build",
      "Dedicated project manager",
      "Weekly progress reports",
      "4 to 8 week delivery timelines",
      "30 days post-launch support",
    ],
    cta: "Start a project",
  },
  {
    name: "Growth",
    description:
      "For teams that need a dedicated engineering team embedded in their roadmap.",
    price: "Dedicated team",
    priceNote: "Monthly retainer, scale up or down",
    features: [
      "Cross-functional dedicated team",
      "Senior engineers and a tech lead",
      "Sprint planning and daily standups",
      "Direct Slack and video access",
      "Continuous delivery and QA",
    ],
    highlighted: true,
    cta: "Build my team",
  },
  {
    name: "Enterprise",
    description:
      "Custom engagements for organizations with complex compliance and scale needs.",
    price: "Contact us",
    priceNote: "Custom SLAs and pricing",
    features: [
      "Custom SLAs and uptime guarantees",
      "Dedicated account management",
      "Security and compliance reviews",
      "Multi-team, multi-region delivery",
      "Priority roadmap and support",
    ],
    cta: "Talk to sales",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden px-5 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--primary-glow),transparent)] opacity-20 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Pricing
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Engagement models built around your goals
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              Datics.ai offers flexible, custom engagement models rather than
              one-size-fits-all packages. Whether you need a focused project
              team or a fully dedicated engineering partner, we structure the
              engagement around your scope, timeline, and budget.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 md:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:items-start"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeInUp}
              className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                tier.highlighted
                  ? "border-[var(--primary)] bg-[var(--accent)] text-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-16px_rgba(11,42,107,0.35)] md:-translate-y-4"
                  : "border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-8px_rgba(0,0,0,0.12)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--primary)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                  Most Popular
                </span>
              )}

              <h2 className="text-xl font-bold tracking-tight">{tier.name}</h2>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.highlighted ? "text-white/75" : "text-[var(--muted-foreground)]"
                }`}
              >
                {tier.description}
              </p>

              <div className="mt-6">
                <div className="text-3xl font-extrabold tracking-tight">{tier.price}</div>
                <div
                  className={`mt-1 text-xs font-medium uppercase tracking-wide ${
                    tier.highlighted ? "text-white/60" : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {tier.priceNote}
                </div>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        tier.highlighted ? "text-white" : "text-[var(--primary)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span className={tier.highlighted ? "text-white/90" : "text-[var(--foreground)]/85"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.highlighted
                    ? "bg-white text-[var(--accent)] hover:bg-white/90 focus-visible:outline-white"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--accent)] focus-visible:outline-[var(--primary)]"
                }`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--card)] px-5 py-20 sm:px-8 md:py-24">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--background)] to-[var(--card)] p-10 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)] sm:p-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
            Not sure which model fits?
          </span>
          <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
            Every engagement at Datics.ai is scoped around your team, timeline,
            and budget.
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-[var(--muted-foreground)]">
            Tell us about your project and we will put together a custom quote
            and recommended engagement model within two business days.
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(11,42,107,0.15)] transition-all duration-300 hover:bg-[var(--accent)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            Get a custom quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

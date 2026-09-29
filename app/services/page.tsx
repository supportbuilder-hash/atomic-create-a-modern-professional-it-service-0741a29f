"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCode, Square, Sparkles, Activity, GitBranch, Eye, Check } from 'lucide-react';
import { APP_NAME } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

interface ServiceDetail {
  icon: typeof FileCode;
  title: string;
  description: string;
  capabilities: string[];
}

const services: ServiceDetail[] = [
  {
    icon: FileCode,
    title: "Web Development",
    description:
      "We design and build fast, accessible, and scalable web applications using modern frameworks and rigorous engineering practices. From marketing sites to complex internal tools, our teams ship production-grade code that is built to last.",
    capabilities: [
      "Custom web app architecture and API design",
      "Performance optimization and Core Web Vitals tuning",
      "Ongoing maintenance and feature delivery",
    ],
  },
  {
    icon: Square,
    title: "Mobile App Development",
    description:
      "Our mobile teams craft native and cross-platform experiences that feel fast, look native, and ship on schedule. We handle everything from product strategy to App Store and Play Store release management.",
    capabilities: [
      "iOS, Android, and cross-platform (React Native) builds",
      "Offline-first and real-time data sync",
      "App store submission and release engineering",
    ],
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description:
      "We design custom models, integrate large language models, and build data pipelines that turn your raw data into a durable competitive edge. Our AI engineers pair deep research experience with production discipline.",
    capabilities: [
      "LLM integration, fine-tuning, and RAG pipelines",
      "Predictive models and recommendation systems",
      "MLOps, monitoring, and model lifecycle management",
    ],
  },
  {
    icon: Activity,
    title: "Cloud Solutions",
    description:
      "We architect, migrate, and optimize cloud infrastructure across AWS, Azure, and GCP, built for scale and resilience. Our approach balances cost efficiency with the reliability your business depends on.",
    capabilities: [
      "Cloud architecture design and migration planning",
      "Cost optimization and right-sizing audits",
      "Multi-region, high-availability deployments",
    ],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description:
      "We build CI/CD pipelines, infrastructure as code, and observability so your engineering team can ship confidently, every day. Our DevOps practice reduces deployment risk while increasing release velocity.",
    capabilities: [
      "CI/CD pipeline design and automation",
      "Infrastructure as code (Terraform, Pulumi)",
      "Monitoring, alerting, and incident response tooling",
    ],
  },
  {
    icon: Eye,
    title: "UI/UX Design",
    description:
      "We deliver research-driven product design that balances brand, usability, and conversion across every touchpoint. From discovery workshops to polished design systems, we help teams design with confidence.",
    capabilities: [
      "User research, journey mapping, and wireframing",
      "Design systems and component libraries",
      "Usability testing and conversion optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden border-b border-[var(--border)] px-5 py-24 sm:px-8 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(21,94,239,0.12), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              What we do
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)]">
              {APP_NAME} partners with ambitious teams to design, build, and scale software
              across the full technology stack. Explore how each of our disciplines can
              help move your roadmap forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_36px_-8px_rgba(11,42,107,0.18)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-bold tracking-tight text-[var(--foreground)]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-[var(--border)] pt-5">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <Reveal className="px-5 pb-24 sm:px-8 md:pb-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[var(--accent)] px-8 py-14 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-12px_rgba(11,42,107,0.35)] sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(50% 80% at 50% 0%, rgba(91,157,255,0.25), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/75">
              Tell us about your project and our team will get back to you within one
              business day with next steps.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--accent)] shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-white/90 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

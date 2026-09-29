"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, FileCode, Square, Sparkles, Activity, GitBranch, Eye, Terminal, Star, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

const heroStats = [
  { value: "12+", label: "Years in business" },
  { value: "180+", label: "Projects delivered" },
  { value: "40+", label: "Engineers on staff" },
  { value: "98%", label: "Client retention" },
];

const services = [
  {
    icon: FileCode,
    title: "Web Development",
    description:
      "Fast, accessible, and scalable web applications built with modern frameworks and rigorous engineering practices.",
  },
  {
    icon: Square,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile experiences that feel fast, look native, and ship on schedule.",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description:
      "Custom models, LLM integrations, and data pipelines that turn your data into a durable competitive edge.",
  },
  {
    icon: Activity,
    title: "Cloud Solutions",
    description:
      "Cloud architecture, migration, and cost optimization across AWS, Azure, and GCP built for scale and resilience.",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, and observability so your team ships confidently, every day.",
  },
  {
    icon: Eye,
    title: "UI/UX Design",
    description:
      "Research-driven product design that balances brand, usability, and conversion across every touchpoint.",
  },
];

const techGroups = [
  {
    category: "Frontend",
    icon: FileCode,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Terminal,
    items: ["Node.js", "Python", "Go", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    icon: GitBranch,
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    category: "AI & Data",
    icon: Sparkles,
    items: ["PyTorch", "TensorFlow", "PostgreSQL", "Snowflake"],
  },
];

const caseStudies = [
  {
    tag: "FinTech",
    title: "Real-time risk platform for a payments processor",
    description:
      "Rebuilt a legacy monolith into an event-driven platform, cutting fraud-detection latency from minutes to seconds.",
    metric: "68% faster fraud detection",
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/c7ff3ceef08349d4ba7526887ed87ec6.webp",
  },
  {
    tag: "Healthcare",
    title: "HIPAA-compliant patient engagement app",
    description:
      "Designed and shipped a cross-platform mobile app connecting patients with care teams, adopted across 40 clinics.",
    metric: "3.2x patient engagement",
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/31fa7d4a7a3d4a9382ac732ec6446892.jpg",
  },
  {
    tag: "Retail",
    title: "AI demand-forecasting engine",
    description:
      "Built a machine learning pipeline that predicts inventory needs, reducing overstock while protecting revenue.",
    metric: "24% reduction in overstock",
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/14d7d3a8067847389ec88f06e2deabb5.png",
  },
  {
    tag: "Logistics",
    title: "Cloud migration for a national carrier",
    description:
      "Migrated a fleet-management system to a containerized, multi-region cloud architecture with zero downtime.",
    metric: "99.99% uptime post-migration",
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/eacd14aa492449d695d62cfb95fefc76.jpg",
  },
];

const whyChooseUs = [
  {
    icon: Check,
    title: "Senior engineering talent",
    description: "Every project is staffed with senior engineers, not junior benches learning on your dime.",
  },
  {
    icon: Clock,
    title: "On-time delivery",
    description: "Transparent sprints and fixed milestones mean no surprises on your roadmap.",
  },
  {
    icon: Star,
    title: "Proven track record",
    description: "180+ shipped products across fintech, healthcare, retail, and logistics.",
  },
  {
    icon: Activity,
    title: "Full-lifecycle support",
    description: "From discovery to post-launch operations, we stay accountable for outcomes.",
  },
];

const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "180+", label: "Projects delivered" },
  { value: "40+", label: "In-house engineers" },
  { value: "98%", label: "Client retention rate" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We align on goals, constraints, and success metrics before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design",
    description: "Architecture, UX, and technical specs are validated with stakeholders before build begins.",
  },
  {
    step: "03",
    title: "Build",
    description: "Agile sprints with weekly demos keep your team informed and in control of priorities.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Rigorous QA, staged rollouts, and monitoring ensure a smooth, confident launch.",
  },
];

const testimonials = [
  {
    quote:
      "Datics.ai rebuilt our core platform in four months, something our previous vendor said would take a year. The quality bar never dropped.",
    name: "Elena Marsh",
    role: "VP Engineering, Northline Payments",
  },
  {
    quote:
      "Their AI team shipped a forecasting model that paid for itself in the first quarter. Communication was clear from day one.",
    name: "Rajiv Patel",
    role: "CTO, Orbit Retail Group",
  },
  {
    quote:
      "We've worked with three agencies before Datics.ai. This is the first team that treated our roadmap like their own.",
    name: "Sarah Kim",
    role: "Founder, Meridian Health",
  },
];

const faqs = [
  {
    question: "What industries do you typically work with?",
    answer:
      "We work across fintech, healthcare, retail, and logistics, but our engineering practices translate to any domain with complex data or compliance needs.",
  },
  {
    question: "How do you structure engagements and pricing?",
    answer:
      "Most engagements are fixed-scope sprints or dedicated-team retainers. We'll recommend the right model after a discovery call based on your timeline and budget.",
  },
  {
    question: "Can you work with our existing in-house team?",
    answer:
      "Yes. We regularly embed alongside internal teams, syncing on your existing tools, standups, and code review process.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Most projects range from 8 to 20 weeks depending on scope. We'll give you a detailed timeline after the discovery phase.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer maintenance and support retainers covering monitoring, bug fixes, and iterative feature development post-launch.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)] rounded-2xl"
      >
        <span className="text-base font-semibold text-[var(--foreground)]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[var(--primary)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6 pb-5">
          <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative isolate">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(21,94,239,0.14) 0%, rgba(21,94,239,0) 60%), linear-gradient(180deg, #f7f9fc 0%, #f7f9fc 100%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 md:pb-28 md:pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Software & AI engineering consultancy
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
            >
              Engineering intelligent software for the next decade of business.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg"
            >
              Datics.ai partners with ambitious companies to design, build, and scale web, mobile, and AI-powered products, from first prototype to enterprise-grade platform.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(21,94,239,0.25)] transition-all duration-300 hover:bg-[var(--accent)] hover:shadow-[0_12px_36px_rgba(21,94,239,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)]/40 hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] sm:grid-cols-4 sm:p-10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold tracking-tight text-[var(--primary)] sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-[var(--muted-foreground)] sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">What we do</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
            End-to-end IT services built for growth
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
            From first sketch to production scale, our teams cover the full technology stack your business needs.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(11,42,107,0.18)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted-foreground)]">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)]/40 hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      {/* About */}
      <section id="about" className="bg-[var(--accent)] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary-glow)]">About Datics.ai</span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A decade of shipping software that businesses depend on
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-white/70">
              Datics.ai is a technology consultancy of senior engineers, designers, and AI specialists. We've spent 12+ years partnering with startups and enterprises to build resilient, scalable products, not prototypes that stall at launch.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
              Our teams embed directly with yours, bringing deep expertise across fintech, healthcare, retail, and logistics, while holding every engagement to the same engineering bar we'd expect for our own products.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-white/60 sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <img
                src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/c8b6f52e404242d0bc5ee0aa4bad1adf.jpg"
                alt="Datics.ai engineering team collaborating"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Our toolkit</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Technology we trust in production
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                variants={fadeInUp}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(11,42,107,0.18)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight text-[var(--foreground)]">{group.category}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--muted-foreground)]">{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Portfolio teaser */}
      <section className="bg-[var(--foreground)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary-glow)]">Case studies</span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Real outcomes for real businesses
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                Explore how we've helped fintech, healthcare, retail, and logistics companies ship measurable results, from faster fraud detection to zero-downtime cloud migrations.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(21,94,239,0.25)] transition-all duration-300 hover:bg-[var(--primary-glow)] hover:shadow-[0_12px_36px_rgba(21,94,239,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View our work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {caseStudies.slice(0, 2).map((study) => (
              <motion.div
                key={study.title}
                variants={fadeInUp}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-glow)]">{study.tag}</span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-white">{study.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{study.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Why choose us</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
            A partner that ships and stands behind it
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-8px_rgba(11,42,107,0.18)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted-foreground)]">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[var(--background)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Our process</span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
              From discovery to deployment
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <span className="text-4xl font-extrabold tracking-tight text-[var(--primary)]/15">{step.step}</span>
                <h3 className="mt-3 text-lg font-bold tracking-tight text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted-foreground)]">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Client testimonials</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Trusted by teams who ship
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="flex gap-1 text-[var(--primary)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-[var(--foreground)]/85">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <div className="text-sm font-semibold text-[var(--foreground)]">{testimonial.name}</div>
                <div className="text-xs text-[var(--muted-foreground)]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--background)] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">FAQ</span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 flex flex-col gap-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Contact CTA banner */}
      <section className="relative isolate overflow-hidden bg-[var(--accent)] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 100%, rgba(91,157,255,0.2) 0%, rgba(91,157,255,0) 60%)",
          }}
        />
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70">
            Tell us about your goals and timeline. We'll follow up within one business day with next steps.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(21,94,239,0.3)] transition-all duration-300 hover:bg-[var(--primary-glow)] hover:shadow-[0_12px_36px_rgba(21,94,239,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

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
  {
    tag: "E-commerce",
    title: "Headless commerce replatform for a DTC retailer",
    description:
      "Migrated a monolithic storefront to a headless architecture, unlocking faster releases and a leaner checkout flow.",
    metric: "41% faster page loads",
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/c7ff3ceef08349d4ba7526887ed87ec6.webp",
  },
  {
    tag: "EdTech",
    title: "Adaptive learning platform for a K-12 provider",
    description:
      "Built a personalized learning engine that adjusts course pacing in real time based on student performance data.",
    metric: "31% lift in course completion",
    image:
      "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/31fa7d4a7a3d4a9382ac732ec6446892.jpg",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-[var(--border)] px-5 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-[var(--primary-glow)]/20 blur-[120px]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              Our Work
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Case Studies
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              A closer look at how we partner with ambitious teams to design, build, and ship
              software that moves the metrics that matter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.title}
              variants={fadeInUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_40px_-12px_rgba(11,42,107,0.2)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[var(--accent)]/90 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
                  {study.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-bold leading-snug tracking-tight text-[var(--foreground)]">
                  {study.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {study.description}
                </p>
                <div className="mt-2 border-t border-[var(--border)] pt-4">
                  <p className="text-sm font-semibold text-[var(--primary)]">{study.metric}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[var(--accent)] px-8 py-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] sm:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-[-5%] h-[320px] w-[320px] rounded-full bg-[var(--primary-glow)]/25 blur-[110px]"
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70">
                Let&apos;s talk about your goals and how our team can help you ship the next
                success story.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--accent)] shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

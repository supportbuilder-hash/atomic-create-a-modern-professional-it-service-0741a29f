"use client";

import Link from "next/link";
import { Globe, Wallet, GraduationCap, HeartPulse, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { APP_NAME } from "@/lib/data";

const benefits = [
  {
    icon: Globe,
    title: "Remote-first",
    description:
      "Work from anywhere. We're built around async collaboration and outcomes, not office hours.",
  },
  {
    icon: Wallet,
    title: "Competitive compensation",
    description:
      "Salary bands benchmarked against top-tier tech consultancies, plus performance bonuses.",
  },
  {
    icon: GraduationCap,
    title: "Learning budget",
    description:
      "An annual stipend for courses, conferences, and certifications to keep your skills sharp.",
  },
  {
    icon: HeartPulse,
    title: "Health benefits",
    description:
      "Comprehensive medical, dental, and vision coverage for you and your dependents.",
  },
];

interface OpenRole {
  title: string;
  team: string;
  location: string;
  type: string;
}

const openRoles: OpenRole[] = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Web Development",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Machine Learning Engineer",
    team: "AI & Machine Learning",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Cloud Solutions Architect",
    team: "Cloud Solutions",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    team: "DevOps",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Senior Product Designer",
    team: "UI/UX Design",
    location: "San Francisco, CA",
    type: "Contract",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              Careers
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Careers at {APP_NAME}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              We&apos;re a team of engineers, designers, and strategists obsessed
              with building software that matters. Our mission is to help
              ambitious companies ship intelligent products faster, and we do
              it with a culture built on ownership, craft, and curiosity.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(11,42,107,0.15)] transition-all duration-300 hover:bg-[var(--accent)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                See open roles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why work with us */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Why work with us
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
                We invest in our people the same way we invest in our
                clients&apos; products: deliberately, and for the long term.
              </p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-8px_rgba(11,42,107,0.18)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open roles */}
      <section className="border-t border-[var(--border)] bg-[var(--card)] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Open roles
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
                Don&apos;t see the right fit? Reach out anyway. We&apos;re always
                looking to meet talented people.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 flex flex-col gap-4">
            {openRoles.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.06}>
                <div className="flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-8px_rgba(11,42,107,0.18)] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {role.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[var(--muted-foreground)]">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" aria-hidden="true" />
                        {role.team}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {role.location}
                      </span>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground)]">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  >
                    View role
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl bg-[var(--accent)] px-8 py-14 text-center text-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-8px_rgba(11,42,107,0.25)] sm:px-14">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Don&apos;t see a role that fits?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/75">
              We&apos;re always looking for exceptional people. Send us a note
              and let&apos;s talk about where you could fit in.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--accent)] shadow-lg transition-all duration-300 hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

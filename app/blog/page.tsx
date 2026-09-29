"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from 'lucide-react';
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  gradient: string;
}

const posts: BlogPost[] = [
  {
    id: "scaling-ai-pipelines",
    category: "AI & Machine Learning",
    title: "Scaling AI pipelines without scaling your cloud bill",
    excerpt:
      "How we design inference pipelines that stay fast under load while keeping infrastructure costs predictable for growing teams.",
    date: "March 4, 2025",
    gradient: "from-[var(--primary)]/25 via-[var(--primary)]/10 to-[var(--accent)]/30",
  },
  {
    id: "cloud-migration-playbook",
    category: "Cloud Solutions",
    title: "A zero-downtime playbook for enterprise cloud migration",
    excerpt:
      "The architecture decisions, rollback strategies, and monitoring practices that let us move critical systems without a blip.",
    date: "February 18, 2025",
    gradient: "from-[var(--accent)]/30 via-[var(--primary)]/10 to-[var(--primary-glow)]/20",
  },
  {
    id: "design-systems-that-scale",
    category: "UI/UX Design",
    title: "Building design systems that survive product growth",
    excerpt:
      "Why the best design systems are built around constraints, not components, and how to keep them alive past launch day.",
    date: "February 2, 2025",
    gradient: "from-[var(--primary-glow)]/25 via-[var(--primary)]/10 to-[var(--accent)]/20",
  },
  {
    id: "devops-maturity-model",
    category: "DevOps",
    title: "A practical DevOps maturity model for mid-size teams",
    excerpt:
      "Skip the buzzwords. Here's the concrete checklist we use to move engineering teams from manual deploys to true CI/CD.",
    date: "January 21, 2025",
    gradient: "from-[var(--primary)]/20 via-[var(--accent)]/20 to-[var(--primary-glow)]/25",
  },
  {
    id: "mobile-performance-budget",
    category: "Mobile App Development",
    title: "Setting a performance budget your mobile team will actually keep",
    excerpt:
      "Performance budgets fail when they're abstract. We share the metrics and tooling that make them stick in daily standups.",
    date: "January 9, 2025",
    gradient: "from-[var(--accent)]/25 via-[var(--primary-glow)]/15 to-[var(--primary)]/20",
  },
  {
    id: "web-architecture-decisions",
    category: "Web Development",
    title: "Five architecture decisions that decide if your web app survives launch",
    excerpt:
      "From rendering strategy to data fetching, the early choices that determine whether your app scales gracefully or breaks.",
    date: "December 15, 2024",
    gradient: "from-[var(--primary)]/25 via-[var(--primary-glow)]/15 to-[var(--accent)]/25",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              Blog
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Insights &amp; Articles
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              Notes from our engineers and designers on building resilient software, scaling AI systems, and shipping products that last.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28">
        <motion.div
          className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link
                href="#"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_16px_36px_-8px_rgba(11,42,107,0.18)]"
              >
                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="inline-flex items-center rounded-full bg-[var(--card)]/90 px-3 py-1 text-xs font-semibold text-[var(--accent)] backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold leading-snug tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted-foreground)]">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] transition-transform duration-300 group-hover:translate-x-0.5">
                      Read more
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

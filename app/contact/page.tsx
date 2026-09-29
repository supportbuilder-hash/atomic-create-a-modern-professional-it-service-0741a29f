"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Reveal } from "@/components/Reveal";

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  details: string;
}

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  company: "",
  details: "",
};

export default function ContactPage() {
  const t = useTranslations();
  const footerT = (t.raw("footer") ?? {}) as {
    email?: string;
    phone?: string;
    address?: string;
  };

  const [formData, setFormData] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(INITIAL_FORM_STATE);
  };

  const contactEmail = footerT.email ?? "hello@datics.ai";
  const contactPhone = footerT.phone ?? "+1 (415) 555-0198";
  const contactAddress = footerT.address ?? "548 Market Street, Suite 1100, San Francisco, CA 94104";

  return (
    <main className="bg-[var(--background)]">
      <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(21,94,239,0.14),transparent_70%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--primary)] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              Contact Us
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Let&apos;s build something great
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
              Tell us about your project and our team will get back to you within one business day to discuss how we can help.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)] sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                      <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                      Thanks for reaching out
                    </h2>
                    <p className="max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]">
                      We&apos;ve received your message and will be in touch within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange("name")}
                          placeholder="Jane Cooper"
                          className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/70 transition-all duration-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange("email")}
                          placeholder="jane@company.com"
                          className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/70 transition-all duration-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange("company")}
                        placeholder="Acme Inc."
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/70 transition-all duration-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-[var(--foreground)]">
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        required
                        rows={5}
                        value={formData.details}
                        onChange={handleChange("details")}
                        placeholder="Tell us about your project, timeline, and goals."
                        className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/70 transition-all duration-300 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(11,42,107,0.15)] transition-all duration-300 hover:bg-[var(--accent)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--accent)] p-8 text-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.25)]">
                  <h2 className="text-xl font-semibold tracking-tight">Direct Contact</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Prefer to reach out directly? Here&apos;s how to find us.
                  </p>
                  <ul className="mt-6 flex flex-col gap-5">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <Mail className="h-4 w-4 text-white/80" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-white/50">Email</p>
                        <a href={`mailto:${contactEmail}`} className="mt-0.5 block text-sm text-white/90 transition-colors duration-200 hover:text-white">
                          {contactEmail}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <Phone className="h-4 w-4 text-white/80" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-white/50">Phone</p>
                        <a href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`} className="mt-0.5 block text-sm text-white/90 transition-colors duration-200 hover:text-white">
                          {contactPhone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                        <MapPin className="h-4 w-4 text-white/80" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-white/50">Address</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-white/90">{contactAddress}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                    Response time
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/80">
                    Our team typically responds within one business day. For urgent inquiries, call us directly during business hours.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { CONTACT } from "../data/content";

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const initialForm: FormState = { name: "", phone: "", email: "", interest: "", message: "" };

const validate = (f: FormState) => {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!f.name.trim()) errors.name = "Please share your name";
  if (!/^[+]?[\d\s-]{10,15}$/.test(f.phone.trim()))
    errors.phone = "Please enter a valid phone number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    errors.email = "Please enter a valid email address";
  if (!f.interest) errors.interest = "Please choose one";
  return errors;
};

const inputClass =
  "w-full border-b border-white/20 bg-transparent py-3.5 text-sm text-sand placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-gold";

const Field = ({
  label,
  error,
  children,
  testId,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  testId?: string;
}) => (
  <div data-testid={testId}>
    <label className="text-[0.6rem] uppercase tracking-[0.28em] text-sand_mute">{label}</label>
    {children}
    {error && <p className="mt-2 text-xs text-gold">{error}</p>}
  </div>
);

export const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [ddOpen, setDdOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-ink py-20 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20">
        <div>
          <Reveal>
            <Eyebrow dark testId="contact-eyebrow">{CONTACT.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl font-light leading-tight tracking-tight text-sand sm:text-4xl lg:text-5xl">
              {CONTACT.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sand_mute md:text-lg">
              {CONTACT.blurb}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 space-y-6 text-sm">
              <p data-testid="contact-address" className="flex items-start gap-4 text-sand/80">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                {CONTACT.address}
              </p>
              <p data-testid="contact-phone" className="flex items-center gap-4 text-sand/80">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                  {CONTACT.phone}
                </a>
              </p>
              <p data-testid="contact-email" className="flex items-center gap-4 text-sand/80">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex gap-8">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-testid={`contact-social-${s.label.toLowerCase()}`}
                  className="text-[0.65rem] uppercase tracking-[0.25em] text-sand_mute transition-colors duration-300 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                data-testid="enquiry-success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full min-h-[420px] flex-col items-start justify-center border border-gold/30 p-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                  <Check size={20} />
                </span>
                <h3 className="mt-8 font-serif text-3xl font-light text-sand">
                  Thank you, {form.name.split(" ")[0]}.
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand_mute">
                  Your enquiry has been received. A member of our team will reach out within one
                  working day.
                </p>
                <button
                  data-testid="enquiry-reset-btn"
                  onClick={reset}
                  className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:text-sand cursor-pointer font-medium"
                >
                  Send another enquiry
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                data-testid="enquiry-form"
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-9"
              >
                <Field label="Full Name" error={errors.name} testId="enquiry-field-name">
                  <input
                    data-testid="enquiry-input-name"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className={inputClass}
                    autoComplete="name"
                  />
                </Field>

                <div className="grid gap-9 sm:grid-cols-2">
                  <Field label="Phone" error={errors.phone} testId="enquiry-field-phone">
                    <input
                      data-testid="enquiry-input-phone"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 00000 00000"
                      className={inputClass}
                      autoComplete="tel"
                    />
                  </Field>
                  <Field label="Email" error={errors.email} testId="enquiry-field-email">
                    <input
                      data-testid="enquiry-input-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <Field label="I'm interested in" error={errors.interest} testId="enquiry-field-interest">
                  <div className="relative">
                    <button
                      type="button"
                      data-testid="enquiry-select-residence"
                      onClick={() => setDdOpen(!ddOpen)}
                      aria-expanded={ddOpen}
                      className={`${inputClass} flex items-center justify-between text-left cursor-pointer ${
                        form.interest ? "text-sand" : "text-white/30"
                      }`}
                    >
                      {form.interest || "Select an option"}
                      <ChevronDown
                        size={16}
                        className={`text-gold transition-transform duration-300 ${ddOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {ddOpen && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setDdOpen(false)} />
                          <motion.ul
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="absolute left-0 right-0 top-full z-20 mt-1 border border-white/10 bg-charcoal max-h-60 overflow-y-auto"
                          >
                            {CONTACT.interests.map((opt) => (
                              <li key={opt}>
                                <button
                                  type="button"
                                  data-testid={`enquiry-interest-${opt.toLowerCase().replace(/\s/g, "-")}`}
                                  onClick={() => {
                                    setForm({ ...form, interest: opt });
                                    setDdOpen(false);
                                  }}
                                  className={`w-full px-4 py-3.5 text-left text-sm transition-colors duration-200 hover:bg-gold hover:text-ink cursor-pointer ${
                                    form.interest === opt ? "text-gold font-medium" : "text-sand/80"
                                  }`}
                                >
                                  {opt}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </Field>

                <Field label="Message (Optional)" testId="enquiry-field-message">
                  <textarea
                    data-testid="enquiry-input-message"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us a little about what you're looking for"
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  data-testid="enquiry-submit-btn"
                  className="group inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-golddark cursor-pointer font-medium"
                >
                  Submit Enquiry
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
};

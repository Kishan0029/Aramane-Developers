"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CONTACT } from "@/data/content";

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
  "w-full border-b border-ink/20 bg-transparent py-3.5 text-sm text-ink placeholder:text-stone_mute/40 outline-none transition-colors duration-300 focus:border-gold";

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
    <label className="text-[0.6rem] uppercase tracking-[0.28em] text-stone_mute font-medium">{label}</label>
    {children}
    {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
  </div>
);

export default function ContactPage() {
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
    <div className="min-h-screen bg-sand font-sans text-ink antialiased">
      <Navbar forceSolid={true} />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          {/* 2-Column Lighter Contact Section (Exact match to home section but with light aesthetics) */}
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left Column */}
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.28em] text-gold font-medium">
                {CONTACT.eyebrow}
              </p>
              <h1 className="mt-6 font-serif text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {CONTACT.heading}
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone_mute md:text-lg">
                {CONTACT.blurb}
              </p>

              <div className="mt-12 space-y-6 text-sm">
                <p data-testid="contact-address" className="flex items-start gap-4 text-ink/85">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                  {CONTACT.address}
                </p>
                <p data-testid="contact-phone" className="flex items-center gap-4 text-ink/85">
                  <Phone size={16} className="shrink-0 text-gold" />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                    {CONTACT.phone}
                  </a>
                </p>
                <p data-testid="contact-email" className="flex items-center gap-4 text-ink/85">
                  <Mail size={16} className="shrink-0 text-gold" />
                  <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                    {CONTACT.email}
                  </a>
                </p>
              </div>

              <div className="mt-12 flex gap-8">
                {CONTACT.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    data-testid={`contact-social-${s.label.toLowerCase()}`}
                    className="text-[0.65rem] uppercase tracking-[0.25em] text-stone_mute transition-colors duration-300 hover:text-gold"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column (Light Form) */}
            <div>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    data-testid="enquiry-success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex h-full min-h-[420px] flex-col items-start justify-center border border-gold/40 bg-white p-10 shadow-sm"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold bg-gold/10">
                      <Check size={20} />
                    </span>
                    <h3 className="mt-8 font-serif text-3xl font-light text-ink">
                      Thank you, {form.name.split(" ")[0]}.
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone_mute">
                      Your enquiry has been received. A member of our team will reach out within one
                      working day.
                    </p>
                    <button
                      data-testid="enquiry-reset-btn"
                      onClick={reset}
                      className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold transition-colors hover:text-ink cursor-pointer font-medium"
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
                            form.interest ? "text-ink" : "text-stone_mute/50"
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
                                className="absolute left-0 right-0 top-full z-20 mt-1 border border-ink/10 bg-white shadow-xl max-h-60 overflow-y-auto"
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
                                      className={`w-full px-4 py-3.5 text-left text-sm transition-colors duration-200 hover:bg-sand/70 cursor-pointer ${
                                        form.interest === opt ? "bg-sand font-medium text-gold" : "text-ink/80"
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
                      className="group inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-golddark cursor-pointer font-medium shadow-sm"
                    >
                      Submit Enquiry
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Horizontal Google Maps below the contact section */}
          <div className="mt-16 md:mt-24 border border-ink/10 bg-white shadow-sm overflow-hidden">
            <div className="relative h-[360px] md:h-[440px] w-full bg-sand/30">
              <iframe
                title="Aramane Developers Sadashivanagar Office Location"
                data-testid="office-google-maps-iframe"
                src="https://maps.google.com/maps?q=Sadashivanagar%2C%20Bengaluru%2C%20Karnataka%20560080&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

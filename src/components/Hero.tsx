"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "../data/content";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
  const reduce = useReducedMotion();
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = HERO.images || [{ src: HERO.image, alt: HERO.imageAlt }];

  useEffect(() => {
    if (reduce || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [reduce, images.length]);

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentIdx].src}
            src={images[currentIdx].src}
            alt={images[currentIdx].alt}
            fetchPriority="high"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className={`absolute inset-0 h-full w-full object-cover will-change-transform ${
              reduce ? "" : "ken-burns"
            }`}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:pb-28 sm:pt-40 md:px-12 md:pb-36 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.3em] text-gold"
        >
          {HERO.eyebrow}
        </motion.p>

        <h1
          data-testid="hero-headline"
          className="mt-6 max-w-4xl font-serif text-3xl font-light leading-[1.12] tracking-tight text-sand sm:text-5xl lg:text-6xl"
        >
          {HERO.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: reduce ? 0 : 46 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          data-testid="hero-subheadline"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-sm sm:text-base text-sand/80 md:text-lg leading-relaxed"
        >
          {HERO.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <button
            data-testid="hero-explore-cta"
            onClick={() => scrollToId(HERO.primaryCta.target)}
            className="group inline-flex items-center justify-center gap-3 border border-sand/40 px-8 py-4 text-xs uppercase tracking-[0.22em] text-sand transition-colors duration-300 hover:border-sand hover:bg-sand hover:text-ink cursor-pointer w-full sm:w-auto"
          >
            {HERO.primaryCta.label}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
          <button
            data-testid="hero-viewing-cta"
            onClick={() => scrollToId(HERO.secondaryCta.target)}
            className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-golddark cursor-pointer w-full sm:w-auto font-medium shadow-sm"
          >
            {HERO.secondaryCta.label}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 md:bottom-8 md:right-12 lg:right-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Show hero slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 cursor-pointer ${
                idx === currentIdx ? "w-8 sm:w-10 bg-gold" : "w-2.5 sm:w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      <motion.div
        data-testid="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-sand/50">Scroll</span>
        <span className="scroll-line block h-12 w-px bg-gold/80" />
      </motion.div>
    </section>
  );
};

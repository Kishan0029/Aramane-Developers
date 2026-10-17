"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "../data/content";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => go(1), 8000);
    return () => clearInterval(t);
  }, [go, reduce]);

  const current = TESTIMONIALS[index];

  return (
    <section
      data-testid="testimonials-section"
      className="border-t border-ink/10 bg-sand py-20 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <Reveal>
          <Eyebrow testId="testimonials-eyebrow">{TESTIMONIALS_SECTION.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-3xl font-light tracking-tight text-ink sm:text-4xl">
            {TESTIMONIALS_SECTION.heading}
          </h2>
        </Reveal>

        <div className="relative mt-14 flex min-h-[260px] items-center justify-center sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote
                data-testid="testimonial-quote"
                className="font-serif text-2xl font-light leading-snug text-ink sm:text-3xl"
              >
                “{current.quote}”
              </blockquote>
              <figcaption data-testid="testimonial-author" className="mt-8">
                <span className="text-xs uppercase tracking-[0.25em] text-ink">{current.name}</span>
                <span className="mt-1.5 block text-[0.65rem] uppercase tracking-[0.25em] text-golddark">
                  {current.project}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          <button
            data-testid="testimonial-prev-btn"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink cursor-pointer"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                data-testid={`testimonial-dot-${i}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 transition-[width,background-color] duration-500 cursor-pointer ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>
          <button
            data-testid="testimonial-next-btn"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-ink transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink cursor-pointer"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

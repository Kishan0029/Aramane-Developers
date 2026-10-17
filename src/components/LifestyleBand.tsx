"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { LIFESTYLE } from "../data/content";

export const LifestyleBand = () => {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      data-testid="lifestyle-break-section"
      className="relative flex h-[70vh] items-center justify-center overflow-hidden md:h-[85vh]"
    >
      <motion.img
        src={LIFESTYLE.image}
        alt={LIFESTYLE.imageAlt}
        loading="lazy"
        decoding="async"
        style={reduce ? {} : { y }}
        className="absolute -top-[10%] left-0 h-[120%] w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-ink/55" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        <Reveal>
          <p
            data-testid="lifestyle-quote"
            className="font-serif text-3xl font-light leading-snug text-sand sm:text-4xl lg:text-5xl"
          >
            “{LIFESTYLE.quote}”
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-[0.65rem] uppercase tracking-[0.35em] text-gold">
            {LIFESTYLE.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

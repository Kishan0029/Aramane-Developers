"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { INTRO } from "../data/content";

export const Intro = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      data-testid="intro-section"
      className="overflow-hidden bg-sand py-20 md:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-12 lg:grid-cols-12 lg:gap-10 lg:px-20">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow testId="intro-eyebrow">{INTRO.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              data-testid="intro-heading"
              className="mt-6 font-serif text-3xl font-light leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              {INTRO.heading}
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col justify-end lg:col-span-5">
          <Reveal delay={0.2}>
            <p data-testid="intro-paragraph" className="text-base leading-relaxed text-stone_mute md:text-lg">
              {INTRO.paragraph}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#"
              data-testid="intro-know-more-link"
              className="group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:text-golddark"
            >
              {INTRO.linkLabel}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 md:mt-24 md:px-12 lg:px-20">
        <Reveal delay={0.1}>
          <div
            ref={imgRef}
            className="relative ml-auto aspect-[16/10] w-full overflow-hidden lg:w-4/5"
          >
            <motion.img
              data-testid="intro-parallax-image"
              src={INTRO.image}
              alt={INTRO.imageAlt}
              loading="lazy"
              style={reduce ? {} : { y }}
              className="absolute -top-[10%] left-0 h-[120%] w-full object-cover will-change-transform"
            />
            <span className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-gold lg:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

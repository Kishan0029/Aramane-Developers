"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { COMPLETED_PROJECTS, COMPLETED_SECTION } from "../data/content";

export const CompletedProjects = () => {
  const [active, setActive] = useState<number | null>(null);

  // Use motion values so mouse movements update purely on the GPU without triggering React re-renders
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const onMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 28);
    mouseY.set(e.clientY - 90);
  };

  // When scrolling, dismiss any active preview so scrolling remains 100% buttery smooth
  useEffect(() => {
    const handleScroll = () => {
      setActive(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="allied-services"
      data-testid="allied-services-section"
      onMouseMove={onMove}
      className="bg-sand py-20 md:py-32 lg:py-40 border-t border-ink/8"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <Reveal>
          <Eyebrow testId="allied-eyebrow">{COMPLETED_SECTION.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-serif text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {COMPLETED_SECTION.heading}
          </h2>
        </Reveal>

        <div className="mt-14">
          {COMPLETED_PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04} y={12}>
              <a
                href={`/contact?service=${encodeURIComponent(p.name)}`}
                data-testid={`allied-service-row-${i}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 border-t border-ink/12 py-5 transition-[background-color,padding] duration-500 hover:bg-ink/[0.035] md:py-8 ${
                  i === COMPLETED_PROJECTS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-serif text-xs sm:text-sm text-stone_mute/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-ink transition-colors duration-300 group-hover:text-gold lg:text-3xl">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 pl-7 sm:pl-0">
                  <p className="text-left sm:text-right text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-stone_mute sm:text-[0.65rem] max-w-xs md:max-w-md">
                    {p.descriptor}
                    <span className="block text-gold/80 mt-0.5">{p.year}</span>
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-ink/30 transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            data-testid="allied-service-preview-thumb"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block will-change-transform"
            style={{ x: smoothX, y: smoothY }}
          >
            <div className="relative h-44 w-64 overflow-hidden shadow-2xl ring-1 ring-ink/10 bg-charcoal">
              <img
                src={COMPLETED_PROJECTS[active].image}
                alt={COMPLETED_PROJECTS[active].name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-2.5 text-[0.65rem] uppercase tracking-wider text-sand font-medium">
                {COMPLETED_PROJECTS[active].name}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

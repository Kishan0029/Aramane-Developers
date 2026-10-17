"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { METRICS } from "../data/content";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value.toLocaleString("en-IN") : "0");

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-IN")),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-gold">{suffix}</span>
    </span>
  );
};

export const KeyNumbers = () => (
  <section data-testid="key-numbers-strip" className="bg-ink py-16 md:py-20">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 md:px-12 lg:grid-cols-4 lg:px-20">
      {METRICS.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.12} className="h-full">
          <div
            data-testid={`metric-item-${i}`}
            className={`flex h-full flex-col gap-3 border-white/10 px-2 text-center lg:border-l lg:px-8 ${
              i === 0 ? "lg:border-l-0" : ""
            }`}
          >
            <span className="font-serif text-4xl font-light text-sand sm:text-5xl">
              <Counter value={m.value} suffix={m.suffix} />
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.28em] text-sand_mute">
              {m.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

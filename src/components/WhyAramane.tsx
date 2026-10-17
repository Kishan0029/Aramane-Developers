"use client";

import { Reveal, Eyebrow } from "./Reveal";
import { PILLARS, WHY_SECTION } from "../data/content";

export const WhyAramane = () => (
  <section
    data-testid="why-aramane-section"
    className="bg-sand py-20 md:py-32 lg:py-40"
  >
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
      <Reveal>
        <Eyebrow testId="why-eyebrow">{WHY_SECTION.eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-2xl font-serif text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {WHY_SECTION.heading}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.num} delay={0.1 + i * 0.12}>
            <div
              data-testid={`pillar-item-${p.num}`}
              className="group border-t border-ink/15 pt-8 transition-colors duration-500 hover:border-gold"
            >
              <span className="font-serif text-5xl font-light text-gold/70 transition-colors duration-500 group-hover:text-gold">
                {p.num}
              </span>
              <h3 className="mt-6 font-serif text-xl font-normal text-ink sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone_mute">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

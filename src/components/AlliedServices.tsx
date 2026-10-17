"use client";

import React from "react";
import {
  Sparkles,
  Building2,
  Compass,
  Layout,
  Cpu,
  Hotel,
  TrendingUp,
  Layers,
  Clock,
  Coins,
  ArrowRight,
} from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { ALLIED_SERVICES, ALLIED_SERVICES_SECTION, AlliedServiceItem } from "../data/content";

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Building2,
  Compass,
  Layout,
  Cpu,
  Hotel,
  TrendingUp,
  Layers,
  Clock,
  Coins,
};

export const AlliedServices = () => {
  return (
    <section
      id="allied-services"
      data-testid="allied-services-section"
      className="bg-sand py-20 md:py-32 lg:py-40 border-t border-ink/10"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow testId="allied-services-eyebrow">
                {ALLIED_SERVICES_SECTION.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {ALLIED_SERVICES_SECTION.heading}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm leading-relaxed text-stone_mute md:text-base">
              {ALLIED_SERVICES_SECTION.subheading}
            </p>
          </Reveal>
        </div>

        {/* 10 Services in a clean, spacious multi-column grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {ALLIED_SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Sparkles;
            return (
              <Reveal key={service.id} delay={0.05 * (idx % 5)}>
                <a
                  href="#contact"
                  data-testid={`allied-service-card-${service.id}`}
                  className="group flex flex-col justify-between h-full rounded-sm border border-ink/10 bg-white/60 p-6 transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-golddark transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="font-serif text-xs font-light text-stone_mute/60">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-lg font-normal leading-snug text-ink transition-colors duration-300 group-hover:text-golddark sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone_mute">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-gold transition-transform duration-300 group-hover:translate-x-1">
                    <span>Enquire</span>
                    <ArrowRight size={12} />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

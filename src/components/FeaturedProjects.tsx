"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { PROJECTS, PROJECTS_SECTION, ProjectItem } from "../data/content";

interface CardProps {
  project: ProjectItem;
  aspectClass?: string;
  horizontal?: boolean;
}

const ProjectCard = ({
  project,
  aspectClass = "aspect-[16/9]",
  horizontal = false,
}: CardProps) => {

  return (
    <a
      href={`/contact?project=${encodeURIComponent(project.name)}`}
      data-testid={project.testId}
      className={`group flex flex-col overflow-hidden bg-[#121212] border border-white/[0.08] transition-all duration-500 hover:border-gold/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] ${
        horizontal ? "w-full" : "h-full"
      }`}
    >
      {/* Dedicated Image Container: 100% Uncropped, Zero Gradient Overlay, Zero Text Overlay */}
      <div
        className={`relative ${aspectClass} w-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center p-3 sm:p-4`}
      >
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.018]"
        />
      </div>

      {/* Modern Luxury Card Information Bar */}
      <div className="flex flex-col justify-between border-t border-white/[0.08] bg-[#131313] p-6 sm:p-7 mt-auto transition-colors duration-500 group-hover:bg-[#171717]">
        {/* Top Header: Status Beacon & Location */}
        <div className="flex items-center justify-between gap-3 text-[0.66rem] uppercase tracking-[0.22em]">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/90" />
            <span
              data-testid={`${project.testId}-status`}
              className="text-gold font-medium"
            >
              {project.status}
            </span>
          </div>
          <span className="text-sand_mute/60 font-light truncate text-right">
            {project.location}
          </span>
        </div>

        {/* Main Row: Title & Details with Clean Corner CTA */}
        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="min-w-0 pr-2">
            <h3 className="font-serif text-2xl font-light text-sand tracking-tight transition-colors duration-300 group-hover:text-gold sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1.5 text-xs text-sand_mute/75 tracking-wide font-sans leading-relaxed">
              {project.type}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sand/60 transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm"
          >
            <ArrowUpRight size={17} />
          </div>
        </div>
      </div>
    </a>
  );
};

export const FeaturedProjects = () => (
  <section
    id="projects"
    data-testid="featured-projects-section"
    className="bg-ink py-20 md:py-32 lg:py-40"
  >
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-6 pb-4">
        <div>
          <Reveal>
            <Eyebrow dark testId="projects-eyebrow">
              {PROJECTS_SECTION.eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-3xl font-light leading-tight tracking-tight text-sand sm:text-4xl lg:text-5xl">
              {PROJECTS_SECTION.heading}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <a
            href="/contact"
            data-testid="projects-view-all-link"
            className="group hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-sand/70 transition-colors hover:text-gold lg:inline-flex"
          >
            {PROJECTS_SECTION.viewAllLabel}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </Reveal>
      </div>

      {/* Row 1: The Two Flagship Posters (Assets Aadhya & KRB Township) - 1:1 Square, Uncropped, No Text Overlay */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.05} className="h-full">
          <ProjectCard project={PROJECTS[0]} aspectClass="aspect-square" />
        </Reveal>
        <Reveal delay={0.15} className="h-full">
          <ProjectCard project={PROJECTS[1]} aspectClass="aspect-square" />
        </Reveal>
      </div>

      {/* Row 2: 57,000 Sq. Ft. Apartments (Chandapura) & Electronic City High-Rise - 16:9 Uncropped, No Text Overlay */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1} className="h-full">
          <ProjectCard project={PROJECTS[2]} aspectClass="aspect-[16/9]" />
        </Reveal>
        <Reveal delay={0.15} className="h-full">
          <ProjectCard project={PROJECTS[3]} aspectClass="aspect-[16/9]" />
        </Reveal>
      </div>

      {/* Row 3: Township Plotted Development (25 Acres of Own Land) - Wide Horizontal Placement, Uncropped, No Text Overlay */}
      <div className="mt-8">
        <Reveal delay={0.2}>
          <ProjectCard
            project={PROJECTS[4]}
            aspectClass="aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.3/1]"
            horizontal
          />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <a
          href="/contact"
          data-testid="projects-view-all-link-mobile"
          className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-sand/70 transition-colors hover:text-gold lg:hidden"
        >
          {PROJECTS_SECTION.viewAllLabel}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </a>
      </Reveal>
    </div>
  </section>
);

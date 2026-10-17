"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Compass } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand font-sans text-ink antialiased">
      <Navbar forceSolid={true} />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="max-w-3xl border-b border-ink/10 pb-12">
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold font-medium">
              ABOUT US · LEADERSHIP & VISION
            </span>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Four decades of foresight, craft, and quiet trust.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-stone_mute md:text-lg">
              Aramane Developers unites generational land acumen with world-class
              architectural engineering. Our leadership is personally involved in every
              masterplan, survey, and client relationship.
            </p>
          </div>

          {/* Two Leadership Profiles */}
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Leader 1: K. P. Ramesh Babu */}
            <div className="flex h-full flex-col justify-between border border-ink/10 bg-white p-8 sm:p-10 shadow-sm transition-all duration-500 hover:border-gold/40 hover:shadow-md">
              <div>
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-ink/8 pb-8">
                  {/* Image Frame */}
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 bg-sand/80 shadow-md">
                    <img
                      src="/assets/ramesh-babu.jpg"
                      alt="Mr. K. P. Ramesh Babu - Real Estate Visionary"
                      className="h-full w-full object-cover object-center grayscale contrast-110 transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div>
                    <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold font-medium">
                      Real Estate Visionary
                    </span>
                    <h2 className="mt-1.5 font-serif text-3xl font-light text-ink">
                      K. P. Ramesh Babu
                    </h2>
                    <p className="mt-1 text-xs text-stone_mute">
                      Founder & Strategic Visionary · 40+ Years Acumen
                    </p>
                  </div>
                </div>

                {/* Biography Content */}
                <div className="mt-8 space-y-4 text-sm leading-relaxed text-stone_mute">
                  <p>
                    With over four decades of experience in Bengaluru’s real estate
                    industry, Mr. K. P. Ramesh Babu brings extensive expertise in land
                    acquisition, property development, and infrastructure planning.
                  </p>

                  {/* Core Values Callout */}
                  <div className="my-5 border-l-2 border-gold bg-sand/40 p-4">
                    <p className="text-[0.62rem] uppercase tracking-[0.24em] text-ink font-medium">
                      THE PQRST VALUE FRAMEWORK
                    </p>
                    <p className="mt-1 text-xs text-stone_mute">
                      Punctuality · Quality · Reliability · Speed · Transparency
                    </p>
                  </div>

                  <p>
                    Guided by his core values of Punctuality, Quality, Reliability,
                    Speed, and Transparency (PQRST), he has fostered a customer-centric
                    approach built on professionalism, integrity, and trust.
                  </p>

                  <p>
                    Under his leadership, Aramane Developers continues to develop
                    quality residential and plotted projects, focusing on thoughtful
                    planning, lasting value, and customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Bottom Credential Tag */}
              <div className="mt-8 border-t border-ink/8 pt-6 flex items-center gap-2.5 text-xs text-stone_mute">
                <ShieldCheck size={16} className="text-gold shrink-0" />
                <span>Custodian of 30+ Delivered Projects across Karnataka</span>
              </div>
            </div>

            {/* Leader 2: Sandeep Kopparam */}
            <div className="flex h-full flex-col justify-between border border-ink/10 bg-white p-8 sm:p-10 shadow-sm transition-all duration-500 hover:border-gold/40 hover:shadow-md">
              <div>
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-ink/8 pb-8">
                  {/* Image Frame */}
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 bg-sand/80 shadow-md">
                    <img
                      src="/assets/sandeep-kopparam.jpg"
                      alt="Mr. Sandeep Kopparam - Managing Director"
                      className="h-full w-full object-cover object-center grayscale contrast-110 transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div>
                    <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold font-medium">
                      Managing Director | Architect & Construction Professional
                    </span>
                    <h2 className="mt-1.5 font-serif text-3xl font-light text-ink">
                      Sandeep Kopparam
                    </h2>
                    <p className="mt-1 text-xs text-stone_mute">
                      B.Arch (MSRIT) · M.Sc Real Estate & Construction (Reading, UK)
                    </p>
                  </div>
                </div>

                {/* Biography Content */}
                <div className="mt-8 space-y-4 text-sm leading-relaxed text-stone_mute">
                  <p>
                    Mr. Sandeep Kopparam holds a Bachelor’s degree in Architecture from
                    M.S. Ramaiah Institute of Technology, Bengaluru, and a Master’s degree
                    in Construction Management and Real Estate from the University of Reading,
                    London.
                  </p>

                  {/* Institutional Experience Callout */}
                  <div className="my-5 border-l-2 border-gold bg-sand/40 p-4">
                    <p className="text-[0.62rem] uppercase tracking-[0.24em] text-ink font-medium">
                      INTERNATIONAL & NATIONAL TRACK RECORD
                    </p>
                    <p className="mt-1 text-xs text-stone_mute">
                      RSP Architects · Colliers International · Prestige Group · ANAROCK
                    </p>
                  </div>

                  <p>
                    With experience across reputed organizations such as RSP Architects,
                    Colliers International, Prestige Group, and ANAROCK, he brings expertise
                    in architecture, design, project management, procurement, construction,
                    and sales across India and the United Kingdom.
                  </p>

                  <p>
                    As Managing Director of Aramane Builders and Developers Pvt. Ltd., he
                    oversees project conceptualization, design, engineering, construction,
                    marketing, and delivery, driving a commitment to quality, innovation,
                    and customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Bottom Credential Tag */}
              <div className="mt-8 border-t border-ink/8 pt-6 flex items-center gap-2.5 text-xs text-stone_mute">
                <Compass size={16} className="text-gold shrink-0" />
                <span>Chartered Builder & Architect Overseeing End-to-End Delivery</span>
              </div>
            </div>
          </div>

          {/* Bottom Call to Action Card */}
          <div className="mt-16 border border-ink/10 bg-sand/50 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold font-medium">
                EXPLORE ARAMANE SPACES
              </span>
              <h3 className="mt-1 font-serif text-2xl font-light text-ink">
                Ready to find your next address in Bengaluru?
              </h3>
              <p className="mt-2 text-sm text-stone_mute max-w-xl">
                Explore our plotted communities and vertical residences, or get in touch
                with our advisory team.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-sand hover:bg-ink/80 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-ink hover:bg-golddark transition-colors font-medium"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

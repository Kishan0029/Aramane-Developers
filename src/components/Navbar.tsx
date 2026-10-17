"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
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
} from "lucide-react";
import { BRAND, NAV_LINKS, ALLIED_SERVICES } from "../data/content";

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

const scrollToId = (id: string) => {
  if (typeof window === "undefined") return;
  if (window.location.pathname !== "/") {
    window.location.href = `/${id ? "#" + id : ""}`;
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = ({ forceSolid = false }: { forceSolid?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [alliedOpen, setAlliedOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 40) {
        setAlliedOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setAlliedOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAlliedOpen(false);
    }, 200);
  };

  const solid = (forceSolid || scrolled || alliedOpen) && !open;
  const lightText = !solid && !open;

  return (
    <>
      <header
        data-testid="navbar-container"
        onMouseLeave={handleMouseLeave}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
          solid
            ? "bg-[#FAF8F5]/98 text-ink backdrop-blur-md shadow-[0_4px_30px_rgba(17,17,17,0.08)] border-b border-ink/8"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <a
            href="/"
            data-testid="navbar-logo"
            aria-label="Aramane Developers home"
            className={`leading-none transition-colors duration-500 ${
              lightText ? "text-sand" : "text-ink"
            }`}
          >
            <span className="font-serif text-2xl tracking-[0.18em]">{BRAND.name}</span>
            <span
              className={`mt-1 block text-[0.55rem] uppercase tracking-[0.5em] ${
                lightText ? "text-sand/70" : "text-stone_mute"
              }`}
            >
              {BRAND.sub}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              if (link.label === "Allied Services") {
                return (
                  <div
                    key={link.label}
                    onMouseEnter={handleMouseEnter}
                    className="relative flex items-center"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setAlliedOpen(!alliedOpen);
                      }}
                      data-testid={link.testId}
                      className={`group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] transition-colors duration-300 cursor-pointer ${
                        lightText ? "text-sand/90 hover:text-sand" : "text-ink/80 hover:text-ink"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          alliedOpen ? "rotate-180 text-gold" : "opacity-70 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={link.testId}
                  onClick={(e) => {
                    if (
                      link.href.startsWith("/#") &&
                      typeof window !== "undefined" &&
                      window.location.pathname === "/"
                    ) {
                      e.preventDefault();
                      const id = link.href.replace("/#", "");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`group relative text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                    lightText ? "text-sand/80 hover:text-sand" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-[width] duration-500 group-hover:w-full" />
                </a>
              );
            })}

            <a
              href="/contact"
              data-testid="navbar-contact-cta"
              className="bg-gold px-6 py-3 text-xs uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-golddark cursor-pointer shadow-sm font-medium"
            >
              Contact
            </a>
          </nav>

          <button
            data-testid="navbar-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`p-2 lg:hidden cursor-pointer ${lightText ? "text-sand" : "text-ink"}`}
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mega Menu Dropdown matching user's design */}
        <AnimatePresence>
          {alliedOpen && (
            <motion.div
              data-testid="allied-services-megamenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:block border-t border-ink/8 bg-[#FFFFFF] shadow-2xl"
            >
              <div className="mx-auto max-w-7xl px-8 py-10 md:px-12 lg:px-20">
                <div className="mb-6 border-b border-ink/8 pb-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold font-medium">
                    ECOSYSTEM PARTNERS
                  </p>
                  <h3 className="font-serif text-xl font-light text-ink mt-0.5">
                    Allied Services & Design Collaborations
                  </h3>
                </div>

                {/* 4 column grid */}
                <div className="grid grid-cols-4 gap-x-8 gap-y-7">
                  {ALLIED_SERVICES.map((s) => {
                    const Icon = ICON_MAP[s.iconName] || Sparkles;
                    return (
                      <a
                        key={s.id}
                        href={`/contact?service=${encodeURIComponent(s.title)}`}
                        onClick={() => {
                          setAlliedOpen(false);
                        }}
                        className="group flex items-start gap-4 p-2 rounded transition-colors hover:bg-sand/40 cursor-pointer"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-golddark transition-all duration-300 group-hover:bg-gold group-hover:text-ink group-hover:scale-105">
                          <Icon size={19} strokeWidth={1.8} />
                        </span>
                        <div>
                          <h4 className="font-serif text-base font-normal text-ink group-hover:text-golddark transition-colors leading-tight">
                            {s.title}
                          </h4>
                          <p className="mt-1 text-xs text-stone_mute leading-snug">
                            {s.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="navbar-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-8 py-20 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  data-testid={`mobile-${link.testId}`}
                  onClick={() => {
                    setOpen(false);
                    if (
                      link.href.startsWith("/#") &&
                      typeof window !== "undefined" &&
                      window.location.pathname === "/"
                    ) {
                      const id = link.href.replace("/#", "");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/10 py-4 font-serif text-3xl font-light text-sand transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="/contact"
              data-testid="mobile-navbar-contact-cta"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 self-start bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:bg-golddark cursor-pointer font-medium"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

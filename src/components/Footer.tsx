import { BRAND, NAV_LINKS, FOOTER } from "../data/content";

export const Footer = () => (
  <footer data-testid="footer-container" className="bg-charcoal py-16 md:py-20">
    <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-serif text-3xl tracking-[0.15em] text-sand">{BRAND.name}</p>
          <p className="mt-1.5 text-[0.55rem] uppercase tracking-[0.5em] text-sand_mute">
            {BRAND.sub}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand_mute">{FOOTER.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`footer-link-${link.label.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.22em] text-sand/60 transition-colors duration-300 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          {FOOTER.legal.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-xs uppercase tracking-[0.22em] text-sand/60 transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8">
        <p data-testid="footer-rera-info" className="text-[0.65rem] leading-relaxed tracking-wide text-sand_mute/70">
          {FOOTER.rera}
        </p>
        <p data-testid="footer-copyright" className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-sand_mute">
          {FOOTER.copyright}
        </p>
      </div>
    </div>
  </footer>
);

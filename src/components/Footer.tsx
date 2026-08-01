import { ArrowUp, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] dot-pattern" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" />

      {/* top */}
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 font-serif text-lg font-bold text-white shadow-glow">
                SD
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg font-bold text-white">
                  Soofi Desai Companies
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
                  (Private) Limited
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60 text-pretty">
              A diversified professional services and business development
              company building a strong foundation for future growth across
              multiple sectors.
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
              Sustainability <span className="text-white/30">|</span>{' '}
              Development <span className="text-white/30">|</span> Commitment
            </div>
          </div>

          {/* quick links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <span>
                  {COMPANY.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-300" />
                <a
                  href={COMPANY.phoneHref}
                  className="transition-colors hover:text-accent-300"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-300" />
                <a
                  href={COMPANY.emailHref}
                  className="transition-colors hover:text-accent-300"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-accent-300" />
                <a
                  href={COMPANY.websiteHref}
                  className="transition-colors hover:text-accent-300"
                >
                  {COMPANY.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* back to top */}
        <div className="mt-14 flex justify-center">
          <a
            href="#home"
            className="group inline-flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-accent-300"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-all duration-400 group-hover:border-accent-400 group-hover:bg-accent-400/10">
              <ArrowUp className="h-5 w-5" />
            </span>
            Back to top
          </a>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; 2026 Soofi Desai Companies (Private) Limited. All Rights
            Reserved.
          </p>
          <p className="text-xs text-white/40">
            Building Trust &middot; Creating Value &middot; Shaping the Future
          </p>
        </div>
      </div>
    </footer>
  );
}

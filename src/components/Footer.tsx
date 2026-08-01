import { Building2, MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Future Businesses', href: '#future' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Financial & Tax Consultancy',
  'Corporate & Business Registration',
  'SRB & Regulatory Services',
  'Educational Consultancy',
  'Travel Consultancy',
  'Business & Management Consultancy',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-10" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-lg shadow-brand-500/30">
                <Building2 className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-800 leading-tight tracking-tight text-white">
                Soofi Desai<span className="block text-[10px] font-600 tracking-wide text-brand-400">COMPANIES</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              A diversified professional services and business development
              company committed to reliable consultancy and sustainable growth.
            </p>
            <p className="mt-4 text-xs font-600 uppercase tracking-wider text-brand-400">
              Sustainability · Development · Commitment
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-700 uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center text-sm text-ink-400 transition-colors hover:text-brand-400">
                    <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-700 uppercase tracking-wider text-white">Our Services</h4>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="group inline-flex items-center text-sm text-ink-400 transition-colors hover:text-brand-400">
                    <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-700 uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-ink-400">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-400" />
                <span>Al-Ahmed Centre, Office No. 6, Magazine Lane, Saddar, Karachi 74400, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>+92 321 387 5658</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <span>soofidesaicompanies@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <Globe className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <a href="https://www.soofidesaicompanies.com" className="transition-colors hover:text-brand-400">
                  www.soofidesaicompanies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-700 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">
            © 2026 Soofi Desai Companies (Private) Limited. All Rights Reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-sm text-ink-400 transition-colors hover:text-brand-400"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

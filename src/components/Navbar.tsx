import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data/content';
import { useScrolled } from '@/hooks/useScrolled';

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-brand-100/70 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={close}
            className="group flex items-center gap-2.5"
            aria-label={`${COMPANY.name} home`}
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-brand-950 shadow-glow transition-transform duration-500 group-hover:scale-105">
              <span className="absolute inset-0 border-flow opacity-30" />
              <span className="relative font-serif text-lg font-bold text-white">
                SD
              </span>
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[15px] font-bold tracking-tight text-ink">
                Soofi Desai
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-600">
                Companies
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                    active === link.href
                      ? 'text-brand-700'
                      : 'text-slatey hover:text-brand-700'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-px h-px origin-left bg-brand-600 transition-transform duration-300 ${
                      active === link.href ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 text-sm font-medium text-slatey transition-colors hover:text-brand-700 lg:flex"
            >
              <Phone className="h-4 w-4 text-brand-500" />
              {COMPANY.phone}
            </a>
            <a href="#contact" className="btn-primary hidden lg:inline-flex">
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-brand-100 bg-white/80 text-ink transition hover:bg-brand-50 xl:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 top-16 z-40 origin-top bg-white/95 backdrop-blur-xl transition-all duration-400 xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="container-x flex flex-col gap-1 py-8">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
              className={`transform transition-all duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              <a
                href={link.href}
                onClick={close}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium transition-colors ${
                  active === link.href
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-ink hover:bg-brand-50/60'
                }`}
              >
                {link.label}
                <ArrowUpRight className="h-5 w-5 text-brand-500" />
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a href="#contact" onClick={close} className="btn-primary w-full">
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/content';
import { PatternDecoration } from '@/components/Pattern';

export default function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="services" className="h-section relative overflow-hidden bg-white">
      <PatternDecoration
        variant="hex"
        className="absolute left-4 top-20 text-brand-200/40"
      />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 crosshatch opacity-25" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="reveal eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Our Services
          </span>
          <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
            Professional Services That Make Business Simpler
          </h2>
          <p className="reveal delay-200 mt-5 text-base leading-relaxed text-slatey sm:text-lg text-pretty">
            At Soofi Desai Companies, we understand that individuals and
            businesses often need professional assistance to navigate financial,
            regulatory, corporate, educational, and travel-related matters. Our
            objective is to provide practical, professional, and reliable
            support tailored to the needs of our clients.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Selector list */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((s, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`reveal group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-400 ${
                      isActive
                        ? 'border-brand-200 bg-brand-50/70 shadow-soft'
                        : 'border-slate-100 bg-white hover:border-brand-100 hover:bg-brand-50/30'
                    }`}
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-400 ${
                        isActive
                          ? 'bg-brand-600 text-white shadow-glow'
                          : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100'
                      }`}
                    >
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-semibold transition-colors ${
                          isActive ? 'text-brand-700' : 'text-ink'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-slatey">
                        {s.blurb}
                      </span>
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-all duration-400 ${
                        isActive
                          ? 'translate-x-0 text-brand-600 opacity-100'
                          : '-translate-x-1 text-slatey/40 opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div
              key={active}
              className="card group relative flex h-full flex-col overflow-hidden animate-fade-in"
            >
              {/* image header */}
              <div className="relative aspect-[16/8] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/95 text-brand-700 shadow-card">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm leading-relaxed text-slatey">
                  {service.blurb}
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl bg-brand-50/40 p-3 transition-colors hover:bg-brand-50"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-brand-50 pt-5">
                  <a href="#contact" className="btn-ghost">
                    Enquire about this service
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

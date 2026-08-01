import { ArrowRight } from 'lucide-react';
import { FUTURE_BUSINESSES } from '@/data/content';
import { PatternDecoration } from '@/components/Pattern';

export default function FutureBusinesses() {
  return (
    <section id="future" className="h-section relative overflow-hidden bg-white">
      <PatternDecoration
        variant="wave"
        className="absolute left-0 bottom-16 text-brand-200/40"
      />
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 diag-pattern opacity-30" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="reveal eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Future Businesses
          </span>
          <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
            Building Today. Preparing for Tomorrow.
          </h2>
          <p className="reveal delay-200 mt-5 text-base leading-relaxed text-slatey sm:text-lg text-pretty">
            Soofi Desai Companies has been established with a long-term vision
            of developing a diversified business group. While our current focus
            is on professional services and consultancy, our future growth
            strategy is intended to explore opportunities across several
            sectors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE_BUSINESSES.map((b, i) => {
            const isLarge = i === 0;
            return (
              <article
                key={b.title}
                className={`reveal-scale group relative overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:-translate-y-2 ${
                  isLarge ? 'lg:row-span-2' : ''
                }`}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div
                  className={`relative overflow-hidden ${
                    isLarge ? 'h-full min-h-[22rem] lg:min-h-full' : 'aspect-[16/10]'
                  }`}
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-accent-300 backdrop-blur transition-all duration-500 group-hover:bg-accent-400 group-hover:text-brand-950">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-white">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75 text-pretty">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          {/* closing statement card */}
          <div className="reveal-scale group relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-glow transition-all duration-500 hover:-translate-y-2">
            <div className="pointer-events-none absolute inset-0 dot-pattern-dark opacity-50" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <h3 className="relative font-serif text-xl font-semibold leading-snug text-balance">
              Our expansion will be progressive, responsible, and
              opportunity-driven.
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-white/80">
              With a focus on building sustainable businesses rather than
              pursuing growth for its own sake.
            </p>
            <a
              href="#contact"
              className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white link-underline"
            >
              Partner with us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

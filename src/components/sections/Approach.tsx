import { APPROACH_STEPS } from '@/data/content';
import { PatternDecoration } from '@/components/Pattern';

const APPROACH_IMG =
  'https://images.pexels.com/photos/7698706/pexels-photo-7698706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Approach() {
  return (
    <section id="approach" className="h-section relative overflow-hidden bg-brand-960 text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern-dark opacity-50" />
      <div className="pointer-events-none absolute inset-0 mesh-dark" />
      <PatternDecoration
        variant="rings"
        className="absolute right-10 top-10 text-accent-400/25 animate-spin-slow"
      />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: intro + image */}
          <div className="lg:col-span-5">
            <span className="reveal eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Our Approach
            </span>
            <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl lg:text-5xl text-balance">
              Professional Advice. Personal Attention.{' '}
              <span className="gradient-text-light">Practical Results.</span>
            </h2>
            <p className="reveal delay-200 mt-5 text-base leading-relaxed text-white/70 sm:text-lg text-pretty">
              Our approach is built around understanding before advising. Every
              engagement follows a clear, considered process designed around the
              client&rsquo;s needs.
            </p>

            <div className="reveal-scale delay-300 relative mt-8 overflow-hidden rounded-3xl border border-white/10 shadow-glow-dark">
              <img
                src={APPROACH_IMG}
                alt="Colleagues discussing strategy at a whiteboard"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-960/70 to-transparent" />
            </div>
          </div>

          {/* Right: steps */}
          <div className="lg:col-span-7">
            <ol className="relative space-y-4">
              {/* vertical line */}
              <span className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-400/60 via-brand-400/40 to-transparent" />

              {APPROACH_STEPS.map((step, i) => (
                <li
                  key={step.no}
                  className="reveal-right group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07] hover:translate-x-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 font-serif text-lg font-bold text-white shadow-glow transition-transform duration-500 group-hover:scale-110">
                    {step.no}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-serif text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

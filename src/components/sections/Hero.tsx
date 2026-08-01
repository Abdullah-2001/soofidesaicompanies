import { ArrowUpRight, ArrowRight, Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY, PILLARS } from '@/data/content';
import { useCountUp } from '@/hooks/useCountUp';
import { PatternDecoration } from '@/components/Pattern';

const HERO_IMG =
  'https://images.pexels.com/photos/33719015/pexels-photo-33719015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const HERO_SECONDARY =
  'https://images.pexels.com/photos/36733304/pexels-photo-36733304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const STATS = [
  { n: 8, suffix: '', l: 'Core values' },
  { n: 7, suffix: '+', l: 'Service lines' },
  { n: 50, suffix: '+', l: "Years' experience" },
];

function Stat({ n, suffix, l }: { n: number; suffix: string; l: string }) {
  const { value, ref } = useCountUp(n);
  return (
    <div>
      <div ref={ref} className="font-serif text-3xl font-semibold text-brand-700">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slatey">
        {l}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 lg:pt-32">
      {/* Background layers */}
      {/* <div className="pointer-events-none absolute inset-0 mesh-blue" /> */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50 mask-fade-b" />
      <PatternDecoration
        variant="rings"
        className="absolute -left-24 top-24 text-brand-300/40 animate-spin-slow"
      />
      <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[24rem] w-[24rem] rounded-full bg-accent-200/30 blur-3xl" />

      <div className="container-x relative pb-20 pt-10 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="animate-fade-down inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-soft backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              {COMPANY.tagline}
            </div>

            <h1 className="animate-fade-up mt-6 font-serif text-4xl font-semibold leading-[1.06] tracking-tightest text-ink sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
              Building Trust.
              <br />
              Creating Value.
              <br />
              <span className="gradient-text">Shaping the Future.</span>
            </h1>

            <p className="animate-fade-up delay-200 mt-7 max-w-xl text-base leading-relaxed text-slatey sm:text-lg text-pretty">
              {COMPANY.legalName} is a diversified professional services and
              business development company committed to reliable consultancy
              solutions while building a strong foundation for future growth
              across multiple sectors.
            </p>

            <div className="animate-fade-up delay-300 mt-9 flex flex-wrap items-center gap-4">
              <a href="#services" className="btn-primary">
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="btn-ghost">
                Discover Our Story
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* mini stats */}
            <div className="animate-fade-up delay-500 mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-brand-100 pt-7">
              {STATS.map((s) => (
                <Stat key={s.l} {...s} />
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative lg:col-span-5">
            <div className="animate-scale-in relative">
              {/* main image */}
              <div className="relative overflow-hidden rounded-4xl shadow-glow">
                <img
                  src={HERO_IMG}
                  alt="Modern city skyline representing business growth"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-brand-950/10 to-transparent" />
                {/* overlay label */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                        <Building2 className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          A diversified business group
                        </p>
                        <p className="text-xs text-slatey">
                          Professional services &middot; Future expansion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating secondary card */}
              <div className="absolute -left-6 -top-6 hidden w-40 overflow-hidden rounded-2xl border-4 border-white shadow-card animate-float sm:block">
                <img
                  src={HERO_SECONDARY}
                  alt="Business team"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* floating trust tag */}
              <div className="absolute -bottom-5 -right-3 animate-float-slow">
                <div className="glass rounded-2xl px-4 py-3 shadow-card">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-600" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                        Based in
                      </p>
                      <p className="text-sm font-bold text-ink">
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand pillars */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3 lg:mt-24">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="reveal card group relative overflow-hidden p-7 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-50 transition-all duration-500 group-hover:bg-brand-100/60" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:rotate-6">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-serif text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="relative mt-1 text-sm font-medium text-brand-600">
                {p.line}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-slatey">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* marquee trust bar */}
        <div className="reveal delay-300 mt-16 overflow-hidden rounded-2xl border border-brand-100 bg-brand-50/40 py-4">
          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-brand-700/70"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent-500" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MARQUEE = [
  'Financial & Tax Consultancy',
  'Corporate Registration',
  'Regulatory Support',
  'Educational Consultancy',
  'Travel Consultancy',
  'Business Advisory',
  'Sustainability',
  'Development',
  'Commitment',
];

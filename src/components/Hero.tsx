import { ArrowRight, Leaf, TrendingUp, Handshake } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Building for lasting value.',
  },
  {
    icon: TrendingUp,
    title: 'Development',
    desc: 'Growing people, capabilities, and opportunities.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    desc: 'Delivering on our promises with integrity.',
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl animate-blob-1" />
        <div className="absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl animate-blob-2" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-blob-1" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-sm font-500 text-brand-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Sustainability · Development · Commitment
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-4xl font-800 leading-[1.05] tracking-tight text-ink-900 text-balance sm:text-6xl lg:text-7xl">
            Building Trust. Creating Value.{' '}
            <span className="gradient-text">Shaping the Future.</span>
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500 text-balance">
            Soofi Desai Companies (Private) Limited is a diversified professional
            services and business development company committed to providing
            reliable consultancy solutions while building a strong foundation for
            future growth across multiple sectors.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-600 px-7 py-3.5 text-base font-600 text-white shadow-xl shadow-brand-500/30 transition-all duration-300 hover:bg-brand-700 hover:shadow-brand-500/40"
            >
              <span className="relative z-10">Start a conversation</span>
              <ArrowRight className="relative z-10 h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-base font-600 text-ink-700 transition-all duration-300 hover:border-brand-300 hover:text-brand-700"
            >
              Explore our services
            </a>
          </div>
        </div>

        {/* Brand pillars */}
        <div className="reveal reveal-delay-4 mx-auto mt-20 grid max-w-4xl gap-5 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-ink-200/80 bg-white/80 p-6 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:card-shadow"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-110">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-700 text-ink-900">{p.title}</h3>
              <p className="mt-1.5 text-sm text-ink-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Users, Layers, UserCheck, ShieldCheck, Infinity as InfinityIcon, TrendingUp } from 'lucide-react';

const reasons = [
  { icon: Users, title: 'Experienced Leadership', desc: 'Our leadership brings together diverse experience across finance, consultancy, education, healthcare, psychology, manufacturing, and operations.' },
  { icon: Layers, title: 'Multi-Disciplinary Perspective', desc: 'We combine different areas of professional expertise to provide a broader perspective when addressing client needs.' },
  { icon: UserCheck, title: 'Personalized Service', desc: 'We believe every client and every requirement is different. Our approach focuses on understanding individual circumstances.' },
  { icon: ShieldCheck, title: 'Professional Integrity', desc: 'We believe trust is earned through honesty, transparency, accountability, and consistent professional conduct.' },
  { icon: InfinityIcon, title: 'Long-Term Thinking', desc: 'Our objective is not simply to complete a transaction. We aim to build relationships and create lasting value.' },
  { icon: TrendingUp, title: 'Growing Capabilities', desc: 'As the company develops, we continue to expand our capabilities and explore new opportunities.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            Why choose us
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Why Work With Soofi Desai Companies?
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:card-shadow-lg`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-110">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-700 text-ink-900">{r.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-ink-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Leaf, TrendingUp, Handshake, ShieldCheck, Award, Lightbulb, Sparkles, Heart } from 'lucide-react';

const values = [
  { icon: Leaf, title: 'Sustainability', desc: 'We believe in creating lasting value through responsible decisions, sustainable growth, and long-term thinking.' },
  { icon: TrendingUp, title: 'Development', desc: 'We continuously seek opportunities to improve our people, capabilities, services, and businesses.' },
  { icon: Handshake, title: 'Commitment', desc: 'We are committed to delivering on our promises and maintaining the confidence placed in us.' },
  { icon: ShieldCheck, title: 'Integrity', desc: 'We conduct our affairs with honesty, transparency, accountability, and ethical responsibility.' },
  { icon: Award, title: 'Professionalism', desc: 'We uphold professional standards in every engagement and approach every assignment with competence and diligence.' },
  { icon: Sparkles, title: 'Excellence', desc: 'We strive for continuous improvement and seek to deliver quality in everything we do.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We remain open to new ideas, technologies, approaches, and opportunities that create meaningful value.' },
  { icon: Heart, title: 'Trust', desc: 'We believe that lasting business relationships are built through reliability, transparency, and mutual respect.' },
];

export default function CoreValues() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            What guides us
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
            The principles that shape every decision we make and every relationship we build.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:card-shadow-lg`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-110">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-700 text-ink-900">{v.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

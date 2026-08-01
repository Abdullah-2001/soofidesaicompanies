import { Ear, Search, Lightbulb, PenTool, HeartHandshake } from 'lucide-react';

const steps = [
  { icon: Ear, n: '01', title: 'Understand', desc: 'We listen carefully to understand the client\u2019s requirements, objectives, and circumstances.' },
  { icon: Search, n: '02', title: 'Assess', desc: 'We examine the relevant information and identify the available options and requirements.' },
  { icon: Lightbulb, n: '03', title: 'Advise', desc: 'We provide practical and professional guidance designed around the client\u2019s needs.' },
  { icon: PenTool, n: '04', title: 'Execute', desc: 'Where engaged to do so, we assist with the relevant processes, documentation, registrations, and coordination.' },
  { icon: HeartHandshake, n: '05', title: 'Support', desc: 'We aim to build long-term relationships and remain available to support clients as their needs evolve.' },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            Our approach
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Professional Advice. Personal Attention. Practical Results.
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
            Our approach is built around understanding before advising.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.n} className={`reveal reveal-delay-${i + 1} group relative`}>
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-ink-200 bg-white transition-all duration-500 group-hover:-translate-y-1 group-hover:border-brand-300 group-hover:card-shadow">
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-700 text-white shadow-lg shadow-brand-500/40">
                    {s.n}
                  </div>
                  <s.icon className="h-9 w-9 text-brand-600 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="mt-6 font-display text-lg font-700 text-ink-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, FileText, Bell, TrendingUp } from 'lucide-react';
import { INSIGHT_CATEGORIES } from '@/data/content';
import { PatternDecoration } from '@/components/Pattern';

const PREVIEWS = [
  {
    tag: 'Tax Updates',
    title: 'Staying current with tax compliance',
    desc: 'Practical notes on tax registration, filing obligations, and advisory.',
    date: 'Resources',
  },
  {
    tag: 'Business & Corporate',
    title: 'Company registration essentials',
    desc: 'What to know about incorporation and corporate documentation.',
    date: 'Resources',
  },
  {
    tag: 'Regulatory',
    title: 'Navigating regulatory registrations',
    desc: 'Guidance on provincial and federal compliance requirements.',
    date: 'Resources',
  },
  {
    tag: 'Company News',
    title: 'Our journey at Soofi Desai Companies',
    desc: 'Updates as we build our professional services platform.',
    date: 'News',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="h-section relative overflow-hidden bg-white">
      <PatternDecoration
        variant="hex"
        className="absolute right-6 bottom-10 text-brand-200/40"
      />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 crosshatch opacity-25" />
      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: copy */}
          <div>
            <span className="reveal eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Insights &amp; Resources
            </span>
            <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
              Our Latest Insights
            </h2>
            <p className="reveal delay-200 mt-5 text-base leading-relaxed text-slatey sm:text-lg text-pretty">
              Stay informed with practical information and updates relating to
              taxation, business registration, regulatory matters, education,
              travel, and business development.
            </p>

            {/* categories */}
            <div className="reveal-right delay-300 mt-7 flex flex-wrap gap-2.5">
              {INSIGHT_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-brand-100 bg-brand-50/50 px-4 py-2 text-xs font-medium text-brand-700 transition-all hover:border-brand-300 hover:bg-brand-100 hover:-translate-y-0.5"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="reveal-right delay-400 mt-8">
              <a href="#contact" className="btn-primary">
                Read Our Insights
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: preview cards */}
          <div className="reveal-right grid gap-4 sm:grid-cols-2">
            {PREVIEWS.map((c, i) => (
              <article
                key={c.title}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                    <FileText className="h-3 w-3" />
                    {c.tag}
                  </span>
                  <TrendingUp className="h-4 w-4 text-slatey/40 transition-colors group-hover:text-brand-500" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold leading-snug text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">
                  {c.desc}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 link-underline">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-slatey/60">
                    <Bell className="h-3 w-3" />
                    {c.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

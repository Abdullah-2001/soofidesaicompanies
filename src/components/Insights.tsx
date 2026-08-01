import { FileText, Building2, Landmark, GraduationCap, Plane, TrendingUp, ArrowRight } from 'lucide-react';

const categories = [
  { icon: FileText, title: 'Tax Updates' },
  { icon: Building2, title: 'Business & Corporate Updates' },
  { icon: Landmark, title: 'Regulatory Updates' },
  { icon: GraduationCap, title: 'Educational Guidance' },
  { icon: Plane, title: 'Travel Information' },
  { icon: TrendingUp, title: 'Business Insights' },
];

export default function Insights() {
  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            Insights & resources
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Our Latest Insights
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
            Stay informed with practical information and updates relating to
            taxation, business registration, regulatory matters, education,
            travel, and business development.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <a
              href="#contact"
              key={c.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group flex items-center gap-4 rounded-2xl border border-ink-200/80 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:card-shadow`}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <c.icon className="h-6 w-6" />
              </div>
              <span className="flex-1 font-display text-base font-700 text-ink-900">{c.title}</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

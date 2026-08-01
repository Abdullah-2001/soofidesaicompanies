import { WHY_CHOOSE_US } from '@/data/content';
import { PatternDecoration } from '@/components/Pattern';

export default function WhyChooseUs() {
  return (
    <section className="h-section relative overflow-hidden bg-gradient-to-b from-brand-50/40 to-white">
      <div className="pointer-events-none absolute inset-0 mesh-blue opacity-60" />
      <PatternDecoration
        variant="circuit"
        className="absolute right-10 top-20 text-brand-200/40"
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="reveal eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Why Choose Us
          </span>
          <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
            Why Work With Soofi Desai Companies?
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-white bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              {/* corner accent */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 transition-all duration-500 group-hover:bg-brand-100/70" />

              <div className="relative flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:rotate-6">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey text-pretty">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* index marker */}
              <span className="relative mt-5 block font-serif text-sm font-bold text-brand-200">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

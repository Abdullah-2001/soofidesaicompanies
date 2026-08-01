import { Factory, ShoppingCart, Ship, Truck, LineChart, ArrowRight } from 'lucide-react';

const futures = [
  { icon: Factory, title: 'Manufacturing', desc: 'Building upon more than five decades of manufacturing experience within our leadership, we intend to explore opportunities in manufacturing and operational businesses.' },
  { icon: ShoppingCart, title: 'Trading', desc: 'Exploring opportunities to participate in domestic and international trading activities.' },
  { icon: Ship, title: 'Import & Export', desc: 'Developing capabilities to participate in international commerce and cross-border business opportunities.' },
  { icon: Truck, title: 'Distribution', desc: 'Exploring distribution opportunities across selected products and markets.' },
  { icon: LineChart, title: 'Business Investments', desc: 'Identifying commercially viable opportunities that align with our values and long-term growth objectives.' },
];

export default function Future() {
  return (
    <section id="future" className="relative overflow-hidden bg-ink-50/60 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl animate-blob-1" />
        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl animate-blob-2" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            Future businesses
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Building Today. Preparing for Tomorrow.
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
            Soofi Desai Companies has been established with a long-term vision of
            developing a diversified business group. While our current focus is on
            professional services and consultancy, our future growth strategy is
            intended to explore opportunities across several sectors.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {futures.map((f, i) => (
            <article
              key={f.title}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:card-shadow-lg`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-700 text-ink-900">{f.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-ink-500">{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="reveal reveal-delay-4 mx-auto mt-12 max-w-3xl rounded-2xl border border-brand-200 bg-brand-50/60 p-8 text-center">
          <p className="text-base leading-relaxed text-ink-600">
            Our expansion will be <span className="font-700 text-brand-700">progressive, responsible, and opportunity-driven</span>,
            with a focus on building sustainable businesses rather than pursuing
            growth for its own sake.
          </p>
          <a
            href="#contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-600 text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:bg-brand-700"
          >
            Partner with us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

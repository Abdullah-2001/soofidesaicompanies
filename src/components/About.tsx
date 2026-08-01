import { CheckCircle2 } from 'lucide-react';

const principles = [
  {
    title: 'Sustainability',
    desc: 'Building businesses and relationships designed for long-term value.',
  },
  {
    title: 'Development',
    desc: 'Continuously developing people, capabilities, services, and opportunities.',
  },
  {
    title: 'Commitment',
    desc: 'Remaining committed to integrity, professionalism, quality, and the interests of our clients and stakeholders.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: story */}
          <div>
            <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
              Who we are
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl">
              A Foundation Built on Trust, Experience and Vision
            </h2>
            <div className="reveal reveal-delay-2 mt-6 space-y-4 text-base leading-relaxed text-ink-500">
              <p>
                The name <span className="font-600 text-ink-700">SOOFI DESAI</span> represents
                the identity, heritage, values, and legacy associated with the
                promoters and their family name.
              </p>
              <p>
                The word <span className="font-600 text-ink-700">COMPANIES</span> reflects
                our vision of building and developing a diversified business group
                with interests across multiple sectors. Our journey begins with
                professional consultancy and advisory services, with an ambition to
                progressively expand into manufacturing, trading, import and export,
                distribution, and other lawful commercial activities.
              </p>
              <p>
                Soofi Desai Companies is at the beginning of its journey — currently
                focused on building its professional services platform, leveraging the
                diverse expertise and experience of its leadership team. Our approach
                is deliberately progressive: build expertise, establish trust, create
                value, and grow sustainably.
              </p>
            </div>
          </div>

          {/* Right: principles card */}
          <div className="reveal reveal-delay-3">
            <div className="rounded-3xl border border-ink-200/80 bg-gradient-to-br from-brand-50 to-white p-8 card-shadow-lg sm:p-10">
              <h3 className="font-display text-xl font-700 text-ink-900">
                We believe sustainable businesses are built on three fundamental principles
              </h3>
              <div className="mt-8 space-y-6">
                {principles.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-700 text-ink-900">{p.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

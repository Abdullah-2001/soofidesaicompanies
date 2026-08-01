import { Briefcase, Stethoscope, Factory, Linkedin } from 'lucide-react';

const leaders = [
  {
    icon: Briefcase,
    name: 'Muhammad Ahmed Soofi Desai',
    role: 'Chief Executive Officer',
    initials: 'MA',
    bio: 'An MBA graduate with approximately 10 years of professional experience in financial and consultancy matters. Over the course of his career, he has worked with and provided professional services to organizations across different sectors, including companies, banks, and service-sector businesses. His experience includes financial matters, taxation, corporate and business registration, regulatory requirements, and consultancy services. As CEO, he is responsible for the strategic direction of the company and developing its professional services platform and long-term diversification strategy.',
    highlights: ['Financial & Tax Consultancy', 'Corporate Registration', 'Strategic Leadership'],
  },
  {
    icon: Stethoscope,
    name: 'Dr. Nabeea Soomro',
    role: 'Director',
    initials: 'NS',
    bio: 'A medical consultant with approximately 7 years of professional experience. Alongside her medical and professional background, she brings experience and insight in educational consultancy and psychological matters. As a Director, she contributes to the development of the company\u2019s educational consultancy and related advisory services, with a particular focus on understanding individual needs, providing responsible guidance, and supporting informed decisions. Her multidisciplinary perspective contributes to the company\u2019s objective of delivering people-focused professional services.',
    highlights: ['Educational Consultancy', 'People-Focused Advisory', 'Multidisciplinary Insight'],
  },
  {
    icon: Factory,
    name: 'Dawood Soofi Desai',
    role: 'Director',
    initials: 'DS',
    bio: 'Brings more than 50 years of experience in the manufacturing sector. Throughout his extensive career, he has worked with different manufacturing organizations and developed significant practical knowledge of manufacturing operations, cost management, process efficiency, and business operations. As a Director, he contributes his extensive industry knowledge and experience to the company\u2019s long-term strategy, particularly in relation to manufacturing, operational efficiency, cost optimization, and business development. His experience provides an important foundation for the company\u2019s ambition to explore opportunities in the manufacturing sector.',
    highlights: ['Manufacturing Operations', 'Cost Optimization', '50+ Years Experience'],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative bg-ink-50/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            Our leadership
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Experience Behind the Vision
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
            Soofi Desai Companies is guided by a leadership team bringing together
            expertise across financial consultancy, taxation, corporate matters,
            education, healthcare, psychology, manufacturing, operations, and
            business management.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {leaders.map((l, i) => (
            <article
              key={l.name}
              className={`reveal reveal-delay-${i + 1} group flex flex-col rounded-3xl border border-ink-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:card-shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-xl font-800 text-white shadow-lg shadow-brand-500/30">
                  {l.initials}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <l.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-xl font-700 text-ink-900">{l.name}</h3>
              <p className="mt-1 text-sm font-600 text-brand-600">{l.role}</p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">{l.bio}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {l.highlights.map((h) => (
                  <span key={h} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-500 text-brand-700">
                    {h}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

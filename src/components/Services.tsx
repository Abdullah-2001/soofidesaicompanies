import { Calculator, FileText, Landmark, Award, GraduationCap, Plane, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Calculator,
    title: 'Financial & Tax Consultancy',
    items: [
      'Tax consultancy',
      'Tax registration and compliance support',
      'Financial consultancy',
      'Tax-related advisory',
      'Business financial guidance',
    ],
  },
  {
    icon: FileText,
    title: 'Corporate & Business Registration',
    items: [
      'Company registration',
      'Business registration',
      'Corporate documentation support',
      'Regulatory registration assistance',
      'Partnership and firm registration support',
    ],
  },
  {
    icon: Landmark,
    title: 'SRB & Regulatory Services',
    items: [
      'Sindh Revenue Board-related registration assistance',
      'Regulatory registration support',
      'Statutory compliance guidance',
      'Business-related government registrations',
    ],
  },
  {
    icon: Award,
    title: 'Membership & Professional Registrations',
    items: [
      'Professional body membership assistance',
      'Business and trade association membership support',
      'Documentation and application assistance',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Consultancy',
    items: [
      'Educational guidance',
      'Academic consultancy',
      'Student advisory services',
      'Educational opportunity guidance',
      'Career-oriented educational planning',
    ],
  },
  {
    icon: Plane,
    title: 'Travel Consultancy',
    items: [
      'Travel consultancy',
      'Travel planning assistance',
      'Documentation guidance',
      'Visa-related consultancy support, where applicable',
      'Travel advisory services',
    ],
  },
  {
    icon: Briefcase,
    title: 'Business & Management Consultancy',
    items: [
      'Business planning',
      'Financial management',
      'Cost optimization',
      'Operational efficiency',
      'Business development',
      'Management advisory',
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal mb-3 text-sm font-600 uppercase tracking-wider text-brand-600">
            Our services
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl font-800 tracking-tight text-ink-900 text-balance sm:text-4xl lg:text-5xl">
            Professional Services That Make Business Simpler
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-ink-500 text-balance">
            We understand that individuals and businesses often need professional
            assistance to navigate financial, regulatory, corporate, educational,
            and travel-related matters. Our objective is to provide practical,
            professional, and reliable support tailored to your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.title}
                className={`reveal reveal-delay-${(i % 2) + 1} group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-brand-300 bg-white card-shadow' : 'border-ink-200/80 bg-white hover:border-brand-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 p-6 text-left"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-500/30 transition-transform duration-500 group-hover:scale-105">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="flex-1 font-display text-lg font-700 text-ink-900">{s.title}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-ink-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-600' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-400 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-6 pb-6 pt-0">
                      <div className="border-t border-ink-100 pt-4">
                        {s.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 py-1.5 text-sm text-ink-600">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            {item}
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

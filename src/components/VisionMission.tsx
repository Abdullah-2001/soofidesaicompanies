import { Eye, Target } from 'lucide-react';

const missionPoints = [
  'Deliver professional and dependable services to our clients.',
  'Provide practical solutions based on knowledge and experience.',
  'Maintain the highest standards of integrity and professionalism.',
  'Build lasting relationships based on trust and transparency.',
  'Continuously develop our capabilities and service offerings.',
  'Identify and pursue sustainable opportunities for business growth.',
  'Expand progressively into new sectors while maintaining responsible business practices.',
  'Create long-term value for our clients, partners, and stakeholders.',
];

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl animate-blob-1" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl animate-blob-2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Vision */}
          <div className="reveal">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-800 tracking-tight text-white sm:text-3xl">
              Our Vision
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-50 text-balance">
              To build a trusted and diversified business group that creates
              sustainable value across generations and markets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-100">
              We aspire to develop Soofi Desai Companies into a reputable and
              diversified business group recognized for integrity,
              professionalism, innovation, and responsible growth. Our long-term
              vision is to build a platform that connects professional services,
              consultancy, trading, import and export, manufacturing,
              distribution, and other commercially viable sectors — creating
              sustainable value for clients, partners, employees, and society.
            </p>
          </div>

          {/* Mission */}
          <div className="reveal reveal-delay-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-800 tracking-tight text-white sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-50 text-balance">
              To deliver professional, reliable and value-driven solutions while
              building the foundation for sustainable business growth.
            </p>
            <ul className="mt-6 space-y-3">
              {missionPoints.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm leading-relaxed text-brand-50">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-200" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

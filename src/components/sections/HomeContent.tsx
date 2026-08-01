import { Check, ArrowRight } from 'lucide-react';
import {
  Calculator,
  Building2,
  FileCheck2,
  GraduationCap,
  Plane,
  Briefcase,
  Eye,
  Target,
  Sprout,
  TrendingUp,
  Handshake,
  Scale,
  Award,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { MISSION_POINTS } from '@/data/content';
import { SectionHeader, PatternDecoration } from '@/components/Pattern';

const WHO_IMG =
  'https://images.pexels.com/photos/36713443/pexels-photo-36713443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const WHAT_WE_DO: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Calculator,
    title: 'Financial & Tax Consultancy',
    desc: 'Professional guidance on taxation, tax compliance, financial matters, and business-related advisory requirements.',
  },
  {
    icon: Building2,
    title: 'Corporate & Business Registration',
    desc: 'Assistance with company incorporation, business registration, regulatory registrations, and corporate documentation.',
  },
  {
    icon: FileCheck2,
    title: 'Regulatory & Statutory Support',
    desc: 'Support relating to registrations and compliance matters, including relevant provincial and federal requirements.',
  },
  {
    icon: GraduationCap,
    title: 'Educational Consultancy',
    desc: 'Guidance and advisory support for students and individuals seeking educational opportunities and professional development.',
  },
  {
    icon: Plane,
    title: 'Travel Consultancy',
    desc: 'Travel-related consultancy and facilitation services to assist clients with planning and documentation requirements.',
  },
  {
    icon: Briefcase,
    title: 'Business & Management Advisory',
    desc: 'Practical advisory support based on professional experience in finance, operations, management, and business development.',
  },
];

const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Sprout,
    title: 'Sustainability',
    desc: 'We believe in creating lasting value through responsible decisions, sustainable growth, and long-term thinking.',
  },
  {
    icon: TrendingUp,
    title: 'Development',
    desc: 'We continuously seek opportunities to improve our people, capabilities, services, and businesses.',
  },
  {
    icon: Handshake,
    title: 'Commitment',
    desc: 'We are committed to delivering on our promises and maintaining the confidence placed in us.',
  },
  {
    icon: Scale,
    title: 'Integrity',
    desc: 'We conduct our affairs with honesty, transparency, accountability, and ethical responsibility.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    desc: 'We uphold professional standards in every engagement and approach every assignment with competence and diligence.',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    desc: 'We strive for continuous improvement and seek to deliver quality in everything we do.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    desc: 'We remain open to new ideas, technologies, approaches, and opportunities that create meaningful value.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust',
    desc: 'We believe that lasting business relationships are built through reliability, transparency, and mutual respect.',
  },
];

export default function HomeContent() {
  return (
    <>
      {/* ---------------- WHO WE ARE ---------------- */}
      <section className="h-section relative overflow-hidden bg-white">
        <PatternDecoration
          variant="hex"
          className="absolute right-8 top-16 text-brand-200/50"
        />
        <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-brand-50 blur-3xl" />
        <div className="container-x relative">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="reveal-left relative">
              <div className="relative overflow-hidden rounded-4xl shadow-card">
                <img
                  src={WHO_IMG}
                  alt="Professionals working in a modern glass office"
                  className="aspect-[5/4] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/30 to-transparent" />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-64">
                <div className="card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    Our foundation
                  </p>
                  <p className="mt-2 font-serif text-lg font-semibold text-ink">
                    Trust, Experience &amp; Vision
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title={
                  <>
                    A Foundation Built on{' '}
                    <span className="gradient-text">Trust, Experience</span> and
                    Vision
                  </>
                }
              />
              <div className="reveal-right delay-200 mt-6 space-y-5 text-base leading-relaxed text-slatey text-pretty">
                <p>
                  The name{' '}
                  <strong className="font-semibold text-ink">SOOFI DESAI</strong>{' '}
                  represents the identity, heritage, values, and legacy
                  associated with the promoters and their family name.
                </p>
                <p>
                  The word{' '}
                  <strong className="font-semibold text-ink">COMPANIES</strong>{' '}
                  reflects our vision of building and developing a diversified
                  business group with interests across multiple sectors. Our
                  journey begins with professional consultancy and advisory
                  services, with an ambition to progressively expand into
                  manufacturing, trading, import and export, distribution, and
                  other lawful commercial activities.
                </p>
              </div>

              <div className="reveal-right delay-300 mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    t: 'Sustainability',
                    d: 'Building businesses and relationships designed for long-term value.',
                  },
                  {
                    t: 'Development',
                    d: 'Continuously developing people, capabilities, services, and opportunities.',
                  },
                  {
                    t: 'Commitment',
                    d: 'Committed to integrity, professionalism, quality, and stakeholder interests.',
                  },
                ].map((b) => (
                  <div
                    key={b.t}
                    className="group relative overflow-hidden rounded-2xl border border-brand-50 bg-gradient-to-b from-brand-50/60 to-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
                    <p className="text-sm font-bold text-brand-700">{b.t}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slatey">
                      {b.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="h-section relative overflow-hidden bg-brand-950 text-white">
        <div className="pointer-events-none absolute inset-0 grid-pattern-dark opacity-60" />
        <div className="pointer-events-none absolute inset-0 mesh-dark" />
        <PatternDecoration
          variant="circuit"
          className="absolute left-8 bottom-16 text-accent-400/30"
        />
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-x relative">
          <SectionHeader
            center
            dark
            eyebrow="What We Do"
            title={
              <>
                Professional Expertise.{' '}
                <span className="gradient-text-light">Practical Solutions.</span>
              </>
            }
            intro="Our current service portfolio focuses on providing professional support to individuals, entrepreneurs, businesses, and organizations — where expert guidance can simplify complex processes and support informed decision-making."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((s, i) => (
              <article
                key={s.title}
                className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/25" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-accent-300 transition-all duration-500 group-hover:bg-accent-400 group-hover:text-brand-950">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 font-serif text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
                {/* arrow */}
                <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors group-hover:text-accent-200">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            ))}
          </div>

          <div className="reveal delay-300 mt-12 text-center">
            <a href="#services" className="btn-outline-light">
              View detailed services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- VISION & MISSION ---------------- */}
      <section className="h-section relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 mesh-blue opacity-70" />
        <div className="container-x relative">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Vision */}
            <div className="reveal-left card relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-50 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 diag-pattern opacity-50" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-glow">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl font-semibold text-ink">
                Our Vision
              </h3>
              <p className="relative mt-4 font-serif text-lg leading-snug text-brand-700 text-balance">
                To build a trusted and diversified business group that creates
                sustainable value across generations and markets.
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-slatey text-pretty">
                We aspire to develop Soofi Desai Companies into a reputable and
                diversified business group recognized for integrity,
                professionalism, innovation, and responsible growth. Our
                long-term vision is to build a platform that connects
                professional services, consultancy, trading, import and export,
                manufacturing, distribution, and other commercially viable
                sectors — creating sustainable value for clients, partners,
                employees, and society.
              </p>
            </div>

            {/* Mission */}
            <div className="reveal-right card relative overflow-hidden p-8 sm:p-10">
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-accent-100 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 diag-pattern opacity-50" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-accent-500 text-white shadow-glow-accent">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl font-semibold text-ink">
                Our Mission
              </h3>
              <p className="relative mt-4 font-serif text-lg leading-snug text-brand-700 text-balance">
                To deliver professional, reliable and value-driven solutions
                while building the foundation for sustainable business growth.
              </p>
              <ul className="relative mt-5 space-y-3">
                {MISSION_POINTS.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-slatey">
                      {m}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="h-section relative overflow-hidden bg-gradient-to-b from-brand-50/50 to-white">
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
        <div className="container-x relative">
          <SectionHeader
            center
            eyebrow="Our Core Values"
            title={
              <>
                The Principles That{' '}
                <span className="gradient-text">Guide Everything</span> We Do
              </>
            }
            intro="Our core values are closely connected to our tagline — Sustainability, Development, and Commitment — and define how we work with clients, partners, and each other."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal-scale group relative overflow-hidden rounded-3xl border border-white bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
                style={{ transitionDelay: `${(i % 4) * 90}ms` }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-400 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slatey">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

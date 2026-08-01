import { ArrowRight, Quote } from 'lucide-react';
import { PatternDecoration } from '@/components/Pattern';

const ABOUT_IMG =
  'https://images.pexels.com/photos/14527417/pexels-photo-14527417.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const ABOUT_IMG_2 =
  'https://images.pexels.com/photos/7964146/pexels-photo-7964146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const TIMELINE = [
  {
    title: 'Professional services platform',
    desc: 'Financial & tax consultancy, corporate registration, regulatory support, educational and travel consultancy.',
  },
  {
    title: 'Long-term growth strategy',
    desc: 'Exploring opportunities in manufacturing, trading, import & export, distribution, and other viable businesses.',
  },
  {
    title: 'Progressive approach',
    desc: 'Build expertise, establish trust, create value, and grow sustainably.',
  },
];

export default function About() {
  return (
    <section id="about" className="h-section relative overflow-hidden bg-white">
      <PatternDecoration
        variant="rings"
        className="absolute right-0 bottom-10 text-brand-200/40"
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand-50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 crosshatch opacity-30" />
      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="reveal-left relative">
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <img
                src={ABOUT_IMG}
                alt="Modern skyscrapers reflecting the sky"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
            </div>

            {/* secondary stacked image */}
            <div className="absolute -bottom-10 -right-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block">
              <img
                src={ABOUT_IMG_2}
                alt="Business strategy discussion"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* quote tag */}
            <div className="absolute -left-4 top-8 hidden animate-float lg:block">
              <div className="glass rounded-2xl p-4 shadow-card">
                <Quote className="h-5 w-5 text-brand-500" />
                <p className="mt-2 max-w-[12rem] text-xs font-medium leading-relaxed text-ink">
                  Build expertise, establish trust, create value, grow
                  sustainably.
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="reveal eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              About Us
            </span>
            <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
              Our Story
            </h2>

            <div className="reveal-right delay-200 mt-6 space-y-5 text-base leading-relaxed text-slatey text-pretty">
              <p>
                The name{' '}
                <strong className="font-semibold text-ink">SOOFI DESAI</strong>{' '}
                represents the identity, heritage, values, and legacy
                associated with the promoters and their family name.
              </p>
              <p>
                The use of{' '}
                <strong className="font-semibold text-ink">COMPANIES</strong>{' '}
                reflects the vision of establishing and developing a
                diversified business group with interests in multiple sectors,
                including professional services, consultancy, trading, import
                and export, manufacturing, distribution, and other lawful
                commercial activities.
              </p>
              <p>
                The name is intended to symbolize trust, integrity,
                professionalism, sustainable growth, innovation, and long-term
                commitment — with the objective of building a reputable and
                diversified business enterprise operating in Pakistan and, over
                time, serving opportunities in international markets.
              </p>
              <p>
                Soofi Desai Companies (Private) Limited is at the beginning of
                its journey. The company is currently focused on building its
                professional services platform, leveraging the diverse
                expertise and experience of its leadership team.
              </p>
            </div>

            {/* timeline */}
            <div className="reveal-right delay-300 mt-9 space-y-5">
              {TIMELINE.map((t, i) => (
                <div key={t.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-glow">
                      {i + 1}
                    </span>
                    {i < TIMELINE.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-gradient-to-b from-brand-200 to-transparent" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="font-serif text-lg font-semibold text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slatey">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal-right delay-500 mt-9">
              <a href="#leadership" className="btn-primary">
                Meet our leadership
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

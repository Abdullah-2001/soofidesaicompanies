// import { useState } from 'react';
// import { Quote, Plus, Minus } from 'lucide-react';
// import { LEADERS } from '@/data/content';

// export default function Leadership() {
//   const [open, setOpen] = useState(0);

//   return (
//     <section
//       id="leadership"
//       className="h-section relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40"
//     >
//       <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
//       <div className="container-x relative">
//         <div className="max-w-2xl">
//           <span className="reveal eyebrow">
//             <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
//             Our Leadership
//           </span>
//           <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
//             Experience Behind the Vision
//           </h2>
//           <p className="reveal delay-200 mt-5 text-base leading-relaxed text-slatey sm:text-lg text-pretty">
//             Soofi Desai Companies is guided by a leadership team bringing
//             together expertise across financial consultancy, taxation, corporate
//             matters, education, healthcare, psychology, manufacturing,
//             operations, and business management.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-7 lg:grid-cols-3">
//           {LEADERS.map((leader, i) => {
//             const isOpen = open === i;
//             return (
//               <article
//                 key={leader.name}
//                 className="reveal card group flex flex-col overflow-hidden hover:-translate-y-2"
//                 style={{ transitionDelay: `${i * 130}ms` }}
//               >
//                 {/* portrait */}
//                 <div className="relative aspect-[4/5] overflow-hidden">
//                   <img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
//                   {/* name overlay */}
//                   <div className="absolute inset-x-0 bottom-0 p-6">
//                     <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
//                       {leader.role}
//                     </p>
//                     <h3 className="mt-1.5 font-serif text-xl font-semibold text-white">
//                       {leader.name}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* body */}
//                 <div className="flex flex-1 flex-col p-6">
//                   <div className="flex items-start gap-3 rounded-2xl bg-brand-50/70 p-4">
//                     <Quote className="h-5 w-5 shrink-0 text-brand-500" />
//                   </div>
//                   <p className="mt-3 text-sm leading-relaxed text-slatey">
//                     {leader.summary}
//                   </p>

//                   {/* expandable detail */}
//                   <div
//                     className="overflow-hidden transition-all duration-500"
//                     style={{ maxHeight: isOpen ? 500 : 0 }}
//                   >
//                     <div className="mt-5 space-y-3 border-t border-brand-50 pt-5">
//                       {leader.paras.map((para, idx) => (
//                         <p
//                           key={idx}
//                           className="text-sm leading-relaxed text-slatey"
//                         >
//                           {para}
//                         </p>
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={() => setOpen(isOpen ? -1 : i)}
//                     className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100"
//                   >
//                     {isOpen ? (
//                       <>
//                         <Minus className="h-3.5 w-3.5" /> Show less
//                       </>
//                     ) : (
//                       <>
//                         <Plus className="h-3.5 w-3.5" /> Read full bio
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';
import {
  Plus,
  Minus,
  Landmark,
  Scale,
  Building2,
  GraduationCap,
  HeartPulse,
  Brain,
  Factory,
  Settings2,
  Briefcase,
  Users,
} from 'lucide-react';
import { LEADERS } from '@/data/content';

// Map a leader's role/summary text to a representative domain icon.
// Falls back to a generic icon if nothing matches.
function getDomainIcon(leader) {
  const text = `${leader.role} ${leader.summary}`.toLowerCase();
  const rules = [
    [/financ/, Landmark],
    [/tax/, Scale],
    [/corporate/, Building2],
    [/educat/, GraduationCap],
    [/health/, HeartPulse],
    [/psycholog/, Brain],
    [/manufactur/, Factory],
    [/operations/, Settings2],
    [/business|management/, Briefcase],
  ];
  const match = rules.find(([re]) => re.test(text));
  return match ? match[1] : Users;
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function Leadership() {
  
  const [open, setOpen] = useState(0);

  return (
    <section
      id="leadership"
      className="h-section relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40"
    >
      <div className="pointer-events-none absolute inset-0 dot-pattern opacity-40" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="reveal eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Our Leadership
          </span>
          <h2 className="reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
            Experience Behind the Vision
          </h2>
          <p className="reveal delay-200 mt-5 text-base leading-relaxed text-slatey sm:text-lg text-pretty">
            Soofi Desai Companies is guided by a leadership team bringing
            together expertise across financial consultancy, taxation, corporate
            matters, education, healthcare, psychology, manufacturing,
            operations, and business management.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {LEADERS.map((leader, i) => {
            const isOpen = open === i;
            const Icon = getDomainIcon(leader);
            const initials = getInitials(leader.name);
            const bioId = `leader-bio-${i}`;

            return (
              <article
                key={leader.name}
                className="reveal card group relative flex flex-col overflow-hidden border border-transparent transition-all duration-500 hover:-translate-y-2 hover:border-accent-500/30 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)]"
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                {/* signature stroke — draws in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent-500 via-accent-400 to-brand-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                {/* monogram panel (replaces portrait) */}
                <div className="relative flex aspect-[4/2] flex-col justify-end overflow-hidden bg-gradient-to-br from-brand-900 to-brand-950">
                  <div className="pointer-events-none absolute inset-0 dot-pattern opacity-10" />

                  {/* domain icon badge */}
                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:bg-accent-500 group-hover:ring-accent-400/60">
                    <Icon className="h-5 w-5 text-accent-300 transition-colors duration-500 group-hover:text-brand-950" />
                  </div>

                  {/* giant initials watermark */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 select-none font-serif text-[7rem] font-semibold leading-none text-white/[0.07] transition-transform duration-700 group-hover:scale-110 group-hover:text-white/[0.1] sm:text-[8rem]"
                  >
                    {initials}
                  </span>

                  {/* name overlay */}
                  <div className="relative p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                      {leader.role}
                    </p>
                    <h3 className="mt-1.5 font-serif text-xl font-semibold text-white">
                      {leader.name}
                    </h3>
                    {/* underline signature, extends on hover */}
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-px w-10 origin-left bg-accent-400/70 transition-all duration-500 group-hover:w-16 group-hover:bg-accent-300"
                    />
                  </div>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-slatey">
                    {leader.summary}
                  </p>

                  {/* expandable detail */}
                  <div
                    id={bioId}
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isOpen ? 500 : 0 }}
                  >
                    <div className="mt-5 space-y-3 border-t border-brand-50 pt-5">
                      {leader.paras.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-sm leading-relaxed text-slatey"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={bioId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-brand-200 px-4 py-2 text-xs font-semibold text-brand-700 transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-brand-950"
                  >
                    {isOpen ? (
                      <>
                        <Minus className="h-3.5 w-3.5" /> Show less
                      </>
                    ) : (
                      <>
                        <Plus className="h-3.5 w-3.5" /> Read full bio
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
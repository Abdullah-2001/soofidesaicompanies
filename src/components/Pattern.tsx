import type { LucideIcon } from 'lucide-react';

/**
 * Decorative SVG pattern blocks used as section accents.
 * `variant` controls the look; positioned absolutely by the caller.
 */
export function PatternDecoration({
  variant = 'rings',
  className = '',
}: {
  variant?: 'rings' | 'wave' | 'hex' | 'circuit';
  className?: string;
}) {
  if (variant === 'rings') {
    return (
      <svg
        className={`pointer-events-none ${className}`}
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        aria-hidden
      >
        {[18, 36, 54, 72, 90].map((r, i) => (
          <circle
            key={r}
            cx="110"
            cy="110"
            r={r}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.5 - i * 0.07}
          />
        ))}
      </svg>
    );
  }

  if (variant === 'wave') {
    return (
      <svg
        className={`pointer-events-none ${className}`}
        width="320"
        height="120"
        viewBox="0 0 320 120"
        fill="none"
        aria-hidden
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M0 ${30 + i * 18} Q 80 ${10 + i * 18} 160 ${30 + i * 18} T 320 ${30 + i * 18}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.5 - i * 0.08}
            fill="none"
          />
        ))}
      </svg>
    );
  }

  if (variant === 'hex') {
    return (
      <svg
        className={`pointer-events-none ${className}`}
        width="180"
        height="160"
        viewBox="0 0 180 160"
        fill="none"
        aria-hidden
      >
        {[
          [90, 30, 24],
          [40, 70, 20],
          [140, 70, 20],
          [90, 110, 24],
        ].map(([cx, cy, r], i) => (
          <polygon
            key={i}
            points={hexPoints(cx, cy, r)}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.4}
            fill="none"
          />
        ))}
      </svg>
    );
  }

  // circuit
  return (
    <svg
      className={`pointer-events-none ${className}`}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path d="M10 100 H70 V40 H130 V160 H190" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M10 40 H60 V140 H110 V60 H190" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      {[[70, 100], [130, 40], [130, 160], [60, 40], [110, 140], [110, 60]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.4" />
      ))}
    </svg>
  );
}

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
}

/* ---- Section header with eyebrow, title, intro ---- */

export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`reveal ${dark ? 'eyebrow-light' : 'eyebrow'}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
        {eyebrow}
      </span>
      <h2
        className={`reveal delay-100 mt-4 font-serif text-3xl font-semibold leading-tight tracking-tightest sm:text-4xl lg:text-5xl text-balance ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`reveal delay-200 mt-5 text-base leading-relaxed sm:text-lg text-pretty ${
            dark ? 'text-white/70' : 'text-slatey'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export type { LucideIcon };

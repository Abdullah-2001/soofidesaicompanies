import { useEffect, useRef, useState } from 'react';

interface Options {
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

/** Animates a number from `start` to `value` when the element scrolls into view. */
export function useCountUp(value: number, options: Options = {}) {
  const { start = 0, duration = 1800, decimals = 0, suffix = '', prefix = '' } = options;
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(start);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(start + (value - start) * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, start, duration]);

  const formatted = display.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return { ref, text: `${prefix}${formatted}${suffix}` };
}

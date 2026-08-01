import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to any element carrying a `.reveal`,
 * `.reveal-scale`, `.reveal-left`, or `.reveal-right` class once it
 * scrolls into view. Re-scans whenever `deps` change so dynamically
 * rendered sections are picked up.
 */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.reveal, .reveal-scale, .reveal-left, .reveal-right',
      ),
    );

    if (!('IntersectionObserver' in window) || targets.length === 0) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

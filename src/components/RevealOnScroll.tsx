'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * IntersectionObserver-driven entrance for elements with `.reveal`.
 * Re-arms on every pathname change so client-side navigation between
 * locale pages picks up the new page's elements (without this, the
 * effect ran once at mount and never re-observed). A 1.2s safety
 * timer adds `.in` to anything still hidden, so content never gets
 * stranded invisible if the observer is for any reason starved (slow
 * scroll restoration, browser quirks, etc.).
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      // Threshold 0.01 + no negative rootMargin: a single visible
      // pixel of the element is enough to trigger. Avoids "tall
      // sections never quite cross the threshold" edge cases.
      { threshold: 0.01 },
    );

    const pending = document.querySelectorAll<HTMLElement>(
      '.reveal:not(.in)',
    );
    pending.forEach((el) => io.observe(el));

    // Hard fallback — if anything's still un-revealed after 1.2s
    // (back-forward cache, slow scroll, observer starvation), force
    // it visible so users never see a blank section.
    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.in)')
        .forEach((el) => el.classList.add('in'));
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [pathname]);

  return null;
}

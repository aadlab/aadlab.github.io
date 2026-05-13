'use client';

import { useEffect } from 'react';

/** IntersectionObserver-driven entrance for elements with .reveal.
   Each element fades and lifts in once, then is unobserved so it
   stays settled even if the user scrolls back up. */
export default function RevealOnScroll() {
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

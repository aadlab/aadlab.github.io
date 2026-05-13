'use client';

/**
 * ThemeToggle — Blue Cosmos / Black Cosmos pill toggle.
 * Persists choice in localStorage so the next visit honours it.
 * Reads the saved value on mount and falls back to 'black' (the
 * app's DEFAULT_AADLAB_BG_SCHEME).
 */

import { useEffect, useState } from 'react';

type Theme = 'blue' | 'black';
const STORAGE_KEY = 'aadlab.theme';

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('black');
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial: Theme = saved === 'blue' ? 'blue' : 'black';
    setTheme(initial);
    applyTheme(initial);
    setHydrated(true);
  }, []);

  const change = (next: Theme) => {
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label="Background theme"
      // Don't render the pressed state until the saved theme has been
      // read on the client — avoids a flash of the wrong toggle state.
      style={{ visibility: hydrated ? 'visible' : 'hidden' }}
    >
      <button
        type="button"
        aria-pressed={theme === 'black'}
        onClick={() => change('black')}
      >
        Black
      </button>
      <button
        type="button"
        aria-pressed={theme === 'blue'}
        onClick={() => change('blue')}
      >
        Blue
      </button>
    </div>
  );
}

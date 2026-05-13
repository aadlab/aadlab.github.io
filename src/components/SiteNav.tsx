import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

/** Top navigation: wordmark on the left, nav links + theme toggle on the right. */
export default function SiteNav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link
          href="/"
          aria-label="AAD lab home"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <div className="wordmark">
            <span className="wordmark-title">AAD lab</span>
            <span className="wordmark-subtitle">CYPRES 2 training simulator</span>
          </div>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/" className="nav-link hide-mobile">
            Home
          </Link>
          <Link href="/support" className="nav-link">
            Support
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

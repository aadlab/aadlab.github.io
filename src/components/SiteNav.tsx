import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <img src="/aadlab-icon.png" alt="" />
          <span className="wordmark">
            <span className="wordmark-title">AAD lab</span>
            <span className="wordmark-subtitle">CYPRES 2 simulator</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/#lessons" className="nav-link-hide-mobile">
            Lessons
          </Link>
          <Link href="/#scenarios" className="nav-link-hide-mobile">
            Scenarios
          </Link>
          <Link href="/#playground" className="nav-link-hide-mobile">
            Playground
          </Link>
          <Link href="/support">Support</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

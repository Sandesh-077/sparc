import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards',   href: '#awards' },
  { label: 'Team',     href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState('home');
  const menuRef                 = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'projects', 'awards', 'team', 'join'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} ref={menuRef}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src="/logo.png" alt="SPARC logo" className="nav-logo-img" />
          <span className="nav-logo-text">SPARC</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link${active === link.href.slice(1) ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#join" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Join Us
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

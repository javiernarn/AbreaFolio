import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BrandMark from '../BrandMark/BrandMark';

const LINKS = [
  ['#home', 'Home'],
  ['#about', 'About'],
  ['#education', 'Education'],
  ['#skills', 'Skills'],
  ['#experience', 'Experience'],
  ['#projects', 'Projects'],
  ['#contact', 'Contact'],
];

export default function Navbar({ scrolled, activeSection, onLogoClick, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    navigate(`/index.html/${id}`);
    closeMenu();
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    onLogoClick?.();
    navigate('/');
    closeMenu();
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="/" className="brand" onClick={handleLogoClick}>
          <BrandMark size={24} />
          AbreaFolio
        </a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>Let's Talk</a>
        <button
          type="button"
          className="theme-toggle"
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-pressed={theme === 'light'}
          onClick={onToggleTheme}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-icon sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="4.6" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M12 2.5v2.4" />
                  <path d="M12 19.1v2.4" />
                  <path d="M4.2 4.2l1.7 1.7" />
                  <path d="M18.1 18.1l1.7 1.7" />
                  <path d="M2.5 12h2.4" />
                  <path d="M19.1 12h2.4" />
                  <path d="M4.2 19.8l1.7-1.7" />
                  <path d="M18.1 5.9l1.7-1.7" />
                </g>
              </svg>
            </span>
            <span className="theme-toggle-icon moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2 14.6A8.6 8.6 0 1 1 9.4 3.8a7 7 0 0 0 10.8 10.8Z" fill="currentColor" />
              </svg>
            </span>
            <span className="theme-toggle-thumb"></span>
          </span>
        </button>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
        </button>
      </div>
    </nav>
  );
}

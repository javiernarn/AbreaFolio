import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
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
              <Sun size={14} strokeWidth={2} />
            </span>
            <span className="theme-toggle-icon moon" aria-hidden="true">
              <Moon size={14} strokeWidth={2} fill="currentColor" />
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

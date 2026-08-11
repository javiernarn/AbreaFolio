import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'home', 'about', 'education', 'skills',
  'experience', 'projects', 'certs', 'interests', 'contact',
];

export function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
      setShowBackTop(y > 500);

      let current = activeSection;
      SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrolled, progress, showBackTop, activeSection };
}

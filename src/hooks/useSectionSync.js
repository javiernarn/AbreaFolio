import { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// Keeps the page scrolled to whatever section the URL says we're on.
// - On first load (including a hard refresh on /index.html/about), it jumps
//   instantly so there's no distracting scroll animation behind the loader.
// - On later URL changes (nav clicks, browser back/forward), it scrolls smoothly.
export function useSectionSync() {
  const { section } = useParams();
  const location = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    const id = section || 'home';
    const el = document.getElementById(id) || document.querySelector(`#${id}`);
    if (!el) return;

    el.scrollIntoView({ behavior: firstRun.current ? 'auto' : 'smooth' });
    firstRun.current = false;
  }, [location.pathname, section]);
}
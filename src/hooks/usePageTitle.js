import { useEffect } from 'react';

// Maps each section id (from useScrollState) to the label shown in the tab title.
const TITLES = {
  home: 'Home',
  about: 'About',
  education: 'Education',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  certs: 'Credentials',
  interests: 'Interests',
  contact: 'Contact',
};

const SITE_NAME = 'JB Boy M. Abrea — Project Manager & Data Analyst';

// Keeps the browser tab title in sync with whichever section is currently
// active on the page, e.g. "Home | JB Boy M. Abrea — Project Manager & Data Analyst".
export function usePageTitle(activeSection) {
  useEffect(() => {
    const label = TITLES[activeSection] || 'Home';
    document.title = `${label} | ${SITE_NAME}`;
  }, [activeSection]);
}

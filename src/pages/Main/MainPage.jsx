import { useState } from 'react';
import BackgroundFX from '../../components/BackgroundFX/BackgroundFX';
import Navbar from '../../components/Navbar/Navbar';
import BackToTop from '../../components/BackToTop/BackToTop';
import Footer from '../../components/Footer/Footer';
import { useScrollState } from '../../hooks/useScrollState';
import { useSectionSync } from '../../hooks/useSectionSync';
import { usePageTitle } from '../../hooks/usePageTitle';
import { useTheme } from '../../hooks/useTheme';

import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Interests from './sections/Interests';
import Contact from './sections/Contact';

export default function MainPage() {
  const { scrolled, showBackTop, activeSection } = useScrollState();
  const [, forceReplay] = useState(0);
  const replay = () => forceReplay((t) => t + 1);
  const { theme, toggleTheme } = useTheme();

  // Scrolls to whatever section the current URL points to
  useSectionSync();

  // Keeps the browser tab title in sync with the section in view
  usePageTitle(activeSection);

  return (
    <>
      <BackgroundFX theme={theme} />
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onLogoClick={replay}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Interests />
        <Contact />
      </main>

      <Footer />
      <BackToTop show={showBackTop} />
    </>
  );
}

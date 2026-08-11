import { useState } from 'react';
import ResumeModal from '../../../components/ResumeModal/ResumeModal';
import { personal } from '../../../data/personal';

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <header className="hero" id="home">
      <div className="hero-photo-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">{personal.role}</div>
          <h1>JB Boy <em className="gradient-text">Abrea</em></h1>
          <p className="hero-tagline">&ldquo;{personal.tagline}&rdquo;</p>
          <p className="lede">{personal.lede}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={() => setResumeOpen(true)}>
              📄 View Resume
            </button>
            <a href="#contact" className="btn btn-ghost">Let's Talk</a>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-ring"></div>
          <div className="hero-portrait">
            <img src="/images/hero-portrait.jpg" alt="JB Boy M. Abrea, project manager and data analyst" />
          </div>
          <div className="hero-badge">
            <span className="num">ATMS</span>
            <span className="lbl">Capstone PM,<br />Opol Community College</span>
          </div>
        </div>
      </div>
      <div className="scroll-cue hero-layer"><span>Scroll</span><span className="line"></span></div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}

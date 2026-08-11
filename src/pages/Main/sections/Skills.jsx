import { useReveal } from '../../../hooks/useReveal';
import { skills } from '../../../data/skills';

function SkillCard({ icon, title, desc }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card skill-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Skills() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">Capabilities</div>
          <h2>Skills & <span className="gradient-text">specialties</span></h2>
          <p>Grounded in method, backed by data, and delivered with an eye for detail.</p>
        </div>
        <div className="skills-grid">
          {skills.map(s => <SkillCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

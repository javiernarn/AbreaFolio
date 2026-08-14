import { useReveal } from '../../../hooks/useReveal';
import { featuredProject, collaborations } from '../../../data/projects';

function CollabCard({ label, title, desc, link }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card proj-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="plabel">{label}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <a className="proj-link" href={link} target="_blank" rel="noopener noreferrer">Visit site →</a>
    </div>
  );
}

export default function Projects() {
  const [headRef, headIn] = useReveal();
  const [featRef, featIn] = useReveal();
  const [subHeadRef, subHeadIn] = useReveal();

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">Portfolio</div>
          <h2>Projects & <span className="gradient-text">systems</span> I'm proud of</h2>
        </div>

        <div className={`project-feature reveal${featIn ? ' in' : ''}`} ref={featRef}>
          <span className="project-tag">{featuredProject.tag}</span>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.desc}</p>
          <div className="role-pills">
            {featuredProject.roles.map(r => <span className="pill" key={r}>{r}</span>)}
          </div>
          <div className="tech-list">
            {featuredProject.tech.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>

        {collaborations.length > 0 && (
          <>
            <div
              className={`section-head reveal${subHeadIn ? ' in' : ''}`}
              ref={subHeadRef}
              style={{ marginTop: 70, marginBottom: 36 }}
            >
              <div className="eyebrow">Collaborations</div>
              <h2 style={{ fontSize: 'clamp(24px,3.4vw,34px)' }}>Other work I contributed <span className="gradient-text">to</span></h2>
            </div>
            <div className="proj-grid">
              {collaborations.map(c => <CollabCard key={c.title} {...c} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

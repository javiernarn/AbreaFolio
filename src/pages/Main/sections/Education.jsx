import { useReveal } from '../../../hooks/useReveal';
import { education } from '../../../data/education';

function EduItem({ title, meta, desc }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`t-item reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="t-dot"></div>
      <h3>{title}</h3>
      <div className="meta">{meta}</div>
      <p>{desc}</p>
    </div>
  );
}

export default function Education() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section" id="education">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">Education</div>
          <h2>Years in the <span className="gradient-text">field</span></h2>
        </div>
        <div className="timeline">
          {education.map(e => <EduItem key={e.title} {...e} />)}
        </div>
      </div>
    </section>
  );
}

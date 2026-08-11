import { useReveal } from '../../../hooks/useReveal';
import { timeline } from '../../../data/experience';

function TimelineItem({ title, meta, bullets }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`t-item reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="t-dot"></div>
      <h3>{title}</h3>
      <div className="meta">{meta}</div>
      <ul>
        {bullets.map(b => <li key={b}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">Work Experience</div>
          <h2>Where I've <span className="gradient-text">delivered</span></h2>
        </div>
        <div className="timeline">
          {timeline.map(t => <TimelineItem key={t.title} {...t} />)}
        </div>
      </div>
    </section>
  );
}

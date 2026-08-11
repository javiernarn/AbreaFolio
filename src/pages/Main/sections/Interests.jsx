import { useReveal } from '../../../hooks/useReveal';
import { interests } from '../../../data/interests';

function InterestCard({ emoji, title, desc }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card interest-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="emoji">{emoji}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Interests() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section" id="interests">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">Beyond Work</div>
          <h2>What I love doing <span className="gradient-text">outside</span> of it</h2>
        </div>
        <div className="interest-grid">
          {interests.map(i => <InterestCard key={i.title} {...i} />)}
        </div>
      </div>
    </section>
  );
}

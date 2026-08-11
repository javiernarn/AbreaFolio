import { useReveal } from '../../../hooks/useReveal';
import { certs } from '../../../data/certs';

function CertCard({ title, meta, icon }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card cert-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="medal">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{meta}</p>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [headRef, headIn] = useReveal();
  return (
    <section className="section" id="certs">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">Credentials</div>
          <h2>Recognition along the <span className="gradient-text">way</span></h2>
        </div>
        <div className="certs-row">
          {certs.map(c => <CertCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

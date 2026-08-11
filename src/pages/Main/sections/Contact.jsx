import { useReveal } from '../../../hooks/useReveal';
import { personal } from '../../../data/personal';

export default function Contact() {
  const [ref, revealed] = useReveal();
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={`contact-wrap reveal${revealed ? ' in' : ''}`} ref={ref}>
          <div className="eyebrow">Get in Touch</div>
          <h2>Let's <span className="gradient-text">connect</span></h2>
          <p>Open to project management and data analyst roles, plus freelance or capstone-style collaborations. Feel free to reach out.</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`tel:${personal.phoneIntl}`}>📞 {personal.phone}</a>
            <a className="btn btn-ghost" href={`mailto:${personal.email}`}>✉️ Email Me</a>
            <a className="btn btn-ghost" href={personal.linkedin} target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
            <a className="btn btn-ghost" href={personal.github} target="_blank" rel="noopener noreferrer">🖥️ GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

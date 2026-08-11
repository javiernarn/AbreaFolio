import { useReveal } from '../../../hooks/useReveal';
import { personal } from '../../../data/personal';

export default function About() {
  const [headRef, headIn] = useReveal();
  const [photoRef, photoIn] = useReveal();
  const [textRef, textIn] = useReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className={`section-head reveal${headIn ? ' in' : ''}`} ref={headRef}>
          <div className="eyebrow">About Me</div>
          <h2>The plan behind the <span className="gradient-text">data</span></h2>
        </div>
        <div className="about-grid">
          <div className={`about-photo reveal${photoIn ? ' in' : ''}`} ref={photoRef}>
            <img src="/images/about-portrait.jpg" alt="JB Boy M. Abrea — replace with a work or presentation photo" />
          </div>
          <div className={`about-text reveal${textIn ? ' in' : ''}`} ref={textRef}>
            <p>{personal.about[0]}</p>
            <blockquote className="about-quote">{personal.quote}</blockquote>
            <p>{personal.about[1]}</p>
            <div className="pdata">
              <div className="item"><div className="k">Birthday</div><div className="v">{personal.birthday}</div></div>
              <div className="item"><div className="k">Age</div><div className="v">{personal.age}</div></div>
              <div className="item"><div className="k">Based in</div><div className="v">{personal.hometown}</div></div>
              <div className="item"><div className="k">Languages</div><div className="v">{personal.languages}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

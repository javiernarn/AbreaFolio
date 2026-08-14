import * as Icons from 'lucide-react';
import { useReveal } from '../../../hooks/useReveal';
import { interests } from '../../../data/interests';
import { favoriteFormats, genres, shelf } from '../../../data/otaku';

function LucideIcon({ name, size = 20, ...rest }) {
  const Icon = Icons[name] || Icons.Sparkles;
  return <Icon size={size} strokeWidth={2} {...rest} />;
}

function InterestCard({ icon, title, desc }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card interest-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="interest-icon"><LucideIcon name={icon} size={22} /></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function GenreCard({ icon, title, desc }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card genre-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="genre-icon"><LucideIcon name={icon} size={20} /></div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function ShelfCard({ icon, title, format, genre, note }) {
  const [ref, revealed] = useReveal();
  return (
    <div className={`card shelf-card reveal${revealed ? ' in' : ''}`} ref={ref}>
      <div className="shelf-icon"><LucideIcon name={icon} size={22} /></div>
      <div className="shelf-tags">
        <span className="tag-format">{format}</span>
        <span className="tag-genre">{genre}</span>
      </div>
      <h4>{title}</h4>
      <p>{note}</p>
    </div>
  );
}

export default function Interests() {
  const [headRef, headIn] = useReveal();
  const [otakuHeadRef, otakuHeadIn] = useReveal();

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

        {/* ===== Otaku Corner ===== */}
        <div className="otaku">
          <div className={`otaku-head reveal${otakuHeadIn ? ' in' : ''}`} ref={otakuHeadRef}>
            <div className="eyebrow">Otaku Corner</div>
            <h3>Games, anime, and <span className="gradient-text">manga</span></h3>
            <p>
              Outside of school, work, and the kitchen, I'm usually deep in a game,
              an anime, or a manga chapter — these are the things I could talk about
              for hours.
            </p>
          </div>

          {/* formats I follow */}
          <div className="otaku-formats">
            {favoriteFormats.map(f => (
              <span className="format-pill" key={f.label}>
                <LucideIcon name={f.icon} size={15} /> {f.label}
              </span>
            ))}
          </div>

          {/* genres */}
          <div className="genre-grid">
            {genres.map(g => <GenreCard key={g.title} {...g} />)}
          </div>

          {/* the shelf itself */}
          {shelf.length > 0 && (
            <div className="shelf-grid">
              {shelf.map(s => <ShelfCard key={s.title} {...s} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

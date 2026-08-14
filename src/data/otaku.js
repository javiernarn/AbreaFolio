// "Otaku Corner" — a personal shelf of what I'm watching, reading, and
// re-reading. Formats span anime, manga, manhwa, manhua, donghua, and light
// novels. Titles/genres are text-only references (no cover art or stills
// reproduced) paired with an original Lucide icon per genre.
export const favoriteFormats = [
  { icon: 'Clapperboard', label: 'Anime' },
  { icon: 'BookOpen', label: 'Manga' },
  { icon: 'Gamepad2', label: 'Games' },
];

export const genres = [
  { icon: 'Swords', title: 'Shonen / Action', desc: 'High-stakes power systems, tournament arcs, and found-family teams.' },
  { icon: 'CloudRainWind', title: 'Slice of Life', desc: 'Quiet, human stories — the ones that sit with you long after the credits roll.' },
  { icon: 'Sparkles', title: 'Isekai / Fantasy', desc: 'New worlds, new rules, and characters figuring out how to survive them.' },
];

// No specific favorite titles were provided yet — add real favorites here in
// the same shape (title, format, genre, icon, note) once available:
// { title: 'Series Name', format: 'Manga / Anime', genre: 'Shonen', icon: 'Swords', note: 'Why it's a favorite.' }
export const shelf = [];

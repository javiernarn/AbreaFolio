// "Otaku Corner" — a personal shelf of what I'm watching, reading, and
// re-reading. Formats span anime, manga, manhwa, manhua, donghua, and light
// novels. Titles/genres are text-only references (no cover art or stills
// reproduced) paired with an original Lucide icon per genre.
export const favoriteFormats = [
  { icon: 'Clapperboard', label: 'Anime' },
  { icon: 'BookOpen', label: 'Manga' },
  { icon: 'BookMarked', label: 'Manhwa' },
  { icon: 'ScrollText', label: 'Manhua' },
  { icon: 'Sparkle', label: 'Donghua' },
  { icon: 'Library', label: 'Light Novels' },
];

export const genres = [
  { icon: 'Swords', title: 'Shonen / Action', desc: 'High-stakes power systems, tournament arcs, and found-family teams.' },
  { icon: 'CloudRainWind', title: 'Slice of Life', desc: 'Quiet, human stories — the ones that sit with you long after the credits roll.' },
  { icon: 'Sparkles', title: 'Isekai / Fantasy', desc: 'New worlds, new rules, and characters figuring out how to survive them.' },
  { icon: 'Ghost', title: 'Supernatural / Dark Fantasy', desc: 'Curses, spirits, and morally gray stakes wrapped in sharp animation.' },
  { icon: 'HeartHandshake', title: 'Romance / Drama', desc: 'Slow-burn feelings and the kind of dialogue that lingers.' },
  { icon: 'Mountain', title: 'Xianxia / Wuxia', desc: 'Cultivation arcs, martial arts, and donghua worldbuilding done big.' },
];

export const shelf = [
  {
    title: 'Jujutsu Kaisen',
    format: 'Manga / Anime',
    genre: 'Shonen · Supernatural',
    icon: 'Swords',
    note: 'The one that got me into curse-technique power systems in the first place.',
  },
  {
    title: 'Solo Leveling',
    format: 'Manhwa / Anime',
    genre: 'Action · Fantasy',
    icon: 'Sparkles',
    note: 'Korean webtoon turned anime — clean art, satisfying power growth.',
  },
  {
    title: 'I Want to Eat Your Pancreas',
    format: 'Light Novel / Anime Film',
    genre: 'Slice of Life · Drama',
    icon: 'CloudRainWind',
    note: 'Quiet, devastating, and easily one of the best slice-of-life stories I\'ve read.',
  },
  {
    title: 'Battle Through the Heavens',
    format: 'Manhua / Donghua',
    genre: 'Xianxia · Fantasy',
    icon: 'Mountain',
    note: 'A staple donghua watch — cultivation arcs with big-budget animation.',
  },
  {
    title: 'The Beginning After the End',
    format: 'Light Novel / Manhwa',
    genre: 'Isekai · Fantasy',
    icon: 'BookMarked',
    note: 'Novel-first world-building that the manhwa adaptation renders beautifully.',
  },
  {
    title: 'Attack on Titan',
    format: 'Manga / Anime',
    genre: 'Dark Fantasy · Drama',
    icon: 'Ghost',
    note: 'Still the benchmark for how a long-running series should land its ending.',
  },
  {
    title: 'One Piece',
    format: 'Manga / Anime',
    genre: 'Shonen · Adventure',
    icon: 'Swords',
    note: 'The long-haul series I keep coming back to between everything else.',
  },
  {
    title: 'Your Name',
    format: 'Anime Film / Novel',
    genre: 'Romance · Drama',
    icon: 'HeartHandshake',
    note: 'A go-to comfort watch — proof a slice-of-life premise can hit hardest.',
  },
];

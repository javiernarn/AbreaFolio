// Shared "Limitless" mark used in the navbar/footer logo lockup, and the
// same monogram (in badge form) is reused as the PWA/favicon icon set — see
// public/favicon.svg and public/icons/. An "A" (for Abrea) fused with a
// lightning-bolt notch inside a focused ring — an original mark, not a
// reproduction of any character art.
export default function BrandMark({ size = 28, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bm-mark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a9d4ff" />
          <stop offset="42%" stopColor="#4f8cff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="bm-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8ecbff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <radialGradient id="bm-spark" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e9f2ff" />
          <stop offset="100%" stopColor="#8ecbff" />
        </radialGradient>
      </defs>

      {/* outer focus ring */}
      <circle cx="128" cy="132" r="102" fill="none" stroke="url(#bm-ring)" strokeWidth="6" opacity="0.5" />
      <circle cx="128" cy="132" r="86" fill="none" stroke="url(#bm-ring)" strokeWidth="2.4" opacity="0.35" strokeDasharray="4 10" />

      {/* "A" monogram with a bolt notch cut through the crossbar */}
      <path
        d="M128 46 L180 190 L154 190 L145 164 L111 164 L102 190 L76 190 L120 68 Z M128 92 L114 142 L142 142 Z"
        fill="url(#bm-mark)"
        fillRule="evenodd"
      />
      <path d="M134 120 L121 144 L130 144 L120 166 L143 138 L132 138 Z" fill="url(#bm-spark)" />

      {/* small charged accents */}
      <circle cx="196" cy="76" r="6" fill="url(#bm-spark)" />
      <circle cx="58" cy="176" r="5" fill="url(#bm-spark)" opacity="0.85" />
    </svg>
  );
}

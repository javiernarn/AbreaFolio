// Shared "Limitless" mark used in the navbar/footer logo lockup and reused
// as the visual basis for the PWA/favicon icon set (see public/icons +
// favicon.svg). An abstract lightning bolt inside a focused ring — precision
// and energy in one original mark (not a reproduction of any character art).
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
        <linearGradient id="pf-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8ecbff" />
          <stop offset="55%" stopColor="#4f8cff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="pf-violet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* outer focus ring */}
      <circle cx="128" cy="128" r="102" fill="none" stroke="url(#pf-blue)" strokeWidth="6" opacity="0.55" />
      <circle cx="128" cy="128" r="86" fill="none" stroke="url(#pf-violet)" strokeWidth="2.4" opacity="0.4" strokeDasharray="4 10" />

      {/* central lightning bolt */}
      <path
        d="M142 40 L92 132 H124 L108 216 L172 118 H136 Z"
        fill="url(#pf-blue)"
      />

      {/* small charged accents */}
      <circle cx="196" cy="72" r="6" fill="url(#pf-violet)" />
      <circle cx="58" cy="184" r="5" fill="url(#pf-violet)" opacity="0.8" />
    </svg>
  );
}

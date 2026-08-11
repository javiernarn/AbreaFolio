import { ChevronUp } from 'lucide-react';

export default function BackToTop({ show }) {
  return (
    <button
      className={`fab${show ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUp size={22} strokeWidth={2.4} />
    </button>
  );
}

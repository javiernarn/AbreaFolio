import { useEffect, useState } from 'react';

// Simple preview modal for the resume: shows the image full-size,
// with an explicit Download button — nothing downloads until the user chooses to.
export default function ResumeModal({ open, onClose }) {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Anchor `download` attributes are unreliable on some hosts/service-workers
  // (the browser just navigates/opens the image instead of saving it). Fetching
  // the file ourselves and saving it as a Blob forces a real "Save As" download
  // in every desktop and Android browser, regardless of server headers.
  async function handleDownload() {
    setDownloading(true);
    try {
      const res = await fetch('/images/resume.jpg');
      if (!res.ok) throw new Error('Resume file not found');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'JB-Boy-Abrea-Resume.jpg';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback: open it in a new tab so the person can still save it manually.
      window.open('/images/resume.jpg', '_blank', 'noopener');
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close resume preview">✕</button>
        <img src="/images/resume.jpg" alt="JB Boy M. Abrea's résumé — sample layout, replace with real details" />
        <div className="modal-download">
          <button type="button" className="btn btn-primary" onClick={handleDownload} disabled={downloading}>
            {downloading ? 'Preparing…' : '⬇️ Download Résumé'}
          </button>
        </div>
      </div>
    </div>
  );
}

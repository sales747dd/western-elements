import { useEffect, useState } from 'react';

export default function QuoteModal({ onClose }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const body = {
      name: form['quote-name'].value,
      email: form['quote-email'].value,
      phone: form['quote-phone'].value,
      service: form['quote-service'].value,
      details: form['quote-details'].value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="modal-backdrop"
      id="quote-modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>

        <h2 id="modal-title">Get a Free Quote</h2>

        {status === 'success' ? (
          <p style={{ padding: '2rem 0', textAlign: 'center' }}>
            Thank you! We'll be in touch within 1 business day.
          </p>
        ) : (
          <>
            <p>Tell us about your project and we'll get back to you within 1 business day.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-name">Your Name</label>
                  <input id="quote-name" type="text" placeholder="Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-email">Email Address</label>
                  <input id="quote-email" type="email" placeholder="jane@email.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quote-phone">Phone Number</label>
                  <input id="quote-phone" type="tel" placeholder="(250) 000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="quote-service">Service Interested In</label>
                  <select id="quote-service">
                    <option value="">Select a service…</option>
                    <option>Custom Dining Table</option>
                    <option>Live-Edge Coffee Table</option>
                    <option>Outdoor Wood Furniture</option>
                    <option>Tailored Commission</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="quote-details">Project Details</label>
                <textarea id="quote-details" placeholder="Tell us about your vision — size, style, materials, timeline…" required></textarea>
              </div>

              {status === 'error' && (
                <p style={{ color: 'red', marginBottom: '0.5rem' }}>
                  Something went wrong — please try again or email us directly.
                </p>
              )}

              <button
                id="quote-submit-btn"
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send My Request →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

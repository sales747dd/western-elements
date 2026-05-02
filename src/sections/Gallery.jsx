import { Link } from 'react-router-dom';

export default function Gallery({ preview }) {
  const allItems = [
    { src: '/assets/img-table-pine.jpg',    label: 'Live-Edge Pine — Silver Lichtenberg' },
    { src: '/assets/img-table-walnut.jpg',  label: 'Walnut Coffee Table — Teal Resin Inlay' },
    { src: '/assets/img-table-dining.jpg',  label: 'Custom Dining Table with Slate Inlays' },
    { src: '/assets/img-table-picnic.jpg',  label: 'Cedar Outdoor Dining Set' },
    { src: '/assets/img-table-lichtenberg.jpg', label: 'Lichtenberg Fractal Statement Table' },
  ];

  const displayedItems = preview ? allItems.slice(0, 3) : allItems;

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-head">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-title">Every Piece Tells a Story</h2>
          <p className="section-subtitle">A showcase of recent creations — all 100% unique, all made to order.</p>
          {!preview && (
            <div className="section-subtitle" style={{ marginTop: '1.5rem', textAlign: 'left', maxWidth: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-light)' }}>
              <p>
                My vision is to combine traditional craftsmanship with modern design sensibilities, giving customers furniture that is not only durable and practical, but also meaningful and unique. Our work is unlike mass-produced furniture—mine is fully handcrafted and created in collaboration with the customer to fit their needs and wants and to truly elevate their living space.
              </p>
              <p>
                Ultimately, my goal is to create pieces that tell a story — one that connects people to the spaces they live and work in and stands the test of time.
              </p>
            </div>
          )}
        </div>
        <div className={`gallery-grid ${preview ? 'is-preview' : ''}`}>
          {displayedItems.map((item, i) => (
            <div key={i} className="gallery-item">
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        {preview && (
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/gallery" className="btn btn-outline">View Full Gallery</Link>
          </div>
        )}
      </div>
    </section>
  );
}

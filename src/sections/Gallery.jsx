export default function Gallery() {
  const items = [
    { src: '/assets/img-table-lichtenberg.jpg', label: 'Lichtenberg Fractal Coffee Table' },
    { src: '/assets/img-board-resin.jpg',       label: 'Blue Resin River Cutting Board' },
    { src: '/assets/img-surfboard.jpg',          label: 'Sea Turtle Carved Surfboard' },
    { src: '/assets/img-charcuterie.jpg',        label: 'Charcuterie Board Collection' },
    { src: '/assets/img-canada-boards.jpg',      label: 'Canada Maple Shelf & Boards Set' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-head">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-title">Every Piece Tells a Story</h2>
          <p className="section-subtitle">A showcase of recent creations — all 100% unique, all made to order.</p>
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div key={i} className="gallery-item">
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="gallery-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

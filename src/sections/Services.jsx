export default function Services({ onQuoteOpen }) {
  const services = [
    {
      title: 'Custom Tables',
      desc: 'Live-edge dining tables, lichtenberg fractal inlays, blue resin rivers — built to your exact dimensions and vision.',
      img: '/assets/img-table-lichtenberg.jpg',
      tag: 'Most Popular',
    },
    {
      title: 'Cutting Boards & Art Pieces',
      desc: 'Unique charcuterie boards, serving pieces, and decorative wood art with stunning blue epoxy accents.',
      img: '/assets/img-board-resin.jpg',
      tag: 'Custom Orders',
    },
    {
      title: 'Shelving & Storage',
      desc: 'Beautiful, sturdy custom shelving designed entirely to your space — functional art for any room.',
      img: '/assets/img-charcuterie.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Countertops & Islands',
      desc: 'Premium handcrafted wood countertops and kitchen islands that elevate your most-used spaces.',
      img: '/assets/img-canada-boards.jpg',
      tag: 'Coming Soon',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-head">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">Craftsmanship for Every Corner of Your Home</h2>
          <p className="section-subtitle">
            Serving homeowners across BC and Alberta with pieces designed to last a lifetime.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <article key={i} className="service-card">
              <div className="service-card-img-wrap">
                <img src={svc.img} alt={svc.title} className="service-card-img" />
              </div>
              <div className="service-card-body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <button
                  className="service-tag"
                  id={`service-cta-${i}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                  onClick={onQuoteOpen}
                >
                  {svc.tag} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

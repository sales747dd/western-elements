import { Link } from 'react-router-dom';

export default function Services({ onQuoteOpen, preview }) {
  const allServices = [
    {
      title: 'Custom Tables',
      desc: 'Bespoke hardwood dining tables, live-edge designs, lichtenberg fractal inlays, and blue resin rivers — built to your exact dimensions to become the centerpiece of your family gatherings.',
      img: '/assets/img-table-lichtenberg.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Cutting Boards',
      desc: 'Our custom cutting and charcuterie boards combine everyday functionality with striking aesthetic appeal. Stunning blue epoxy accents complement premium hardwoods.',
      img: '/assets/img-board-resin.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Art Pieces',
      desc: 'Unique decorative wood items and functional art designed to enhance your interior space. Each piece tells a story through detailed craftsmanship and modern design sensibilities.',
      img: '/assets/img-charcuterie.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Tailored Commissions',
      desc: 'We design and build custom woodworking projects to meet specific client requests. Have a unique idea? We will collaborate with you to craft a bespoke functional centerpiece.',
      img: '/assets/img-surfboard.jpg',
      tag: 'Enquire Now',
    },
  ];

  const displayedServices = preview ? allServices.slice(0, 2) : allServices;

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-head">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">Craftsmanship for Every Corner of Your Home</h2>
          <p className="section-subtitle">
            Serving homeowners across BC and Alberta with pieces designed to last a lifetime.
          </p>
          {!preview && (
            <p className="section-subtitle" style={{ marginTop: '1rem', color: 'var(--text-light)', maxWidth: 'none' }}>
              We design and handcraft bespoke wood pieces that blend natural artistry, premium hardwoods, and timeless craftsmanship into functional, lasting centerpieces. Every piece is one-of-a-kind and created in collaboration with you—we bring your dream home to life with custom handcrafted furnishings tailored to your lifestyle and living space.
            </p>
          )}
        </div>
        <div className="services-grid" style={preview ? { gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' } : {}}>
          {displayedServices.map((svc, i) => (
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
      {preview && (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </div>
      )}
    </section>
  );
}

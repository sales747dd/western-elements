import { Link } from 'react-router-dom';

export default function Services({ onQuoteOpen, preview }) {
  const allServices = [
    {
      title: 'Custom Dining Tables',
      desc: 'Bespoke hardwood dining tables built to your exact dimensions — live-edge slabs, walnut inlays, slate tile accents, and resin rivers that make every family gathering unforgettable.',
      img: '/assets/img-table-dining.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Live-Edge Coffee Tables',
      desc: 'Statement coffee tables that stop every conversation. Stunning Lichtenberg fractal burns, teal and silver resin inlays, and natural live edges in walnut, oak, pine, and more.',
      img: '/assets/img-table-walnut.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Outdoor Wood Furniture',
      desc: 'Handcrafted cedar and hardwood outdoor sets built to weather every season. Picnic tables, benches, and garden furniture designed for real families who love the outdoors.',
      img: '/assets/img-table-picnic.jpg',
      tag: 'Enquire Now',
    },
    {
      title: 'Tailored Commissions',
      desc: 'Have a unique vision? We collaborate with you from concept to delivery — any wood species, any size, any finish. If you can imagine it, we can build it.',
      img: '/assets/img-table-lichtenberg.jpg',
      tag: 'Enquire Now',
    },
  ];

  const displayedServices = preview ? allServices.slice(0, 2) : allServices;

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-head">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title">Tables That Become Family Heirlooms</h2>
          <p className="section-subtitle">
            Handcrafted tables and wood furniture serving homeowners across BC and Alberta.
          </p>
          {!preview && (
            <p className="section-subtitle" style={{ marginTop: '1rem', color: 'var(--text-light)', maxWidth: 'none' }}>
              We design and handcraft bespoke tables that blend natural artistry, premium hardwoods, and timeless craftsmanship into the centerpiece of your home. Each piece is one-of-a-kind, built in collaboration with you — tailored to your dimensions, style, and living space.
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

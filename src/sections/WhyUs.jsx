export default function WhyUs() {
  const features = [
    {
      icon: '🌳',
      title: 'Truly Unique Pieces',
      desc: 'Every item we build is one-of-a-kind. No templates, no shortcuts — just genuine custom craftsmanship.',
    },
    {
      icon: '🔵',
      title: 'Blue Resin Specialists',
      desc: 'We specialize in stunning blue epoxy resin inlays, lichtenberg fractal burns, and ocean-inspired designs.',
    },
    {
      icon: '🏠',
      title: 'Designed for Your Home',
      desc: 'We work with you to ensure every piece fits your space, lifestyle, and aesthetic perfectly.',
    },
    {
      icon: '🛡️',
      title: 'Built to Last a Lifetime',
      desc: 'Premium materials and meticulous finishing mean our pieces are heirloom-quality — built to be passed down.',
    },
  ];

  return (
    <section id="why-us" className="whyus-section">
      <div className="container">
        <div className="whyus-head">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Furniture That Means Something</h2>
          <p className="section-subtitle">
            There are plenty of furniture stores. There's only one Western Elements.
          </p>
        </div>
        <div className="whyus-grid">
          {features.map((f, i) => (
            <div key={i} className="whyus-item">
              <div className="whyus-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

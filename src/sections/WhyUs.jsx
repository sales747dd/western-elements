export default function WhyUs() {
  const features = [
    {
      title: 'Truly Unique Pieces',
      desc: 'Every item we build is one-of-a-kind. No templates, no shortcuts — just genuine custom craftsmanship.',
    },
    {
      title: 'Custom Woodworking',
      desc: 'We specialize in bespoke custom woodworking. Tell us what you envision, and we will bring it to life using premium wood selections.',
    },
    {
      title: 'Perfectly Fit For Your Space',
      desc: 'Whether it\'s a dining table or built-in shelving, we ensure the final product perfectly matches the exact dimensions and aesthetic of your room.',
    },
    {
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
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

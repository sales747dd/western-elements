export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-img-wrap">
          <img
            src="/assets/img-table-lichtenberg.jpg"
            alt="Live-edge coffee table with blue lichtenberg fractal epoxy inlay"
          />
        </div>
        <div className="about-text">
          <span className="section-eyebrow">Our Craft</span>
          <h2 className="section-title">Built Different. Built for You.</h2>
          <p className="section-subtitle">
            We believe your home deserves something that can't be found in any store. Every piece we create 
            starts with a conversation about your space, your style, and your story.
          </p>
          <p className="section-subtitle" style={{ marginTop: '1rem' }}>
            From dramatic lichtenberg fractal burns and glowing blue resin rivers to hand-carved coastal art, 
            our work is genuinely one-of-a-kind. No two pieces are ever alike.
          </p>
          <div className="about-stat-row">
            <div className="about-stat">
              <strong>100%</strong>
              <span>Handcrafted</span>
            </div>
            <div className="about-stat">
              <strong>2</strong>
              <span>Provinces Served</span>
            </div>
            <div className="about-stat">
              <strong>0</strong>
              <span>Mass-Produced Pieces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

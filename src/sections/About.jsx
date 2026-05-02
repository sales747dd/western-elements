export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-img-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <img
            src="/assets/img-table-edge.jpg"
            alt="Live-edge detail — West Elements Studio craftsmanship"
          />
          <img
            src="/assets/img-table-lichtenberg.jpg"
            alt="Lichtenberg fractal table — a West Elements Studio signature piece"
            style={{ borderRadius: '8px' }}
          />
        </div>
        <div className="about-text">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Josh Keely</h2>
          <div className="section-subtitle" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', color: 'var(--text-light)', maxWidth: 'none' }}>
            <p>
              My name is Josh Keely — founder of <strong>West Elements Studio</strong>.
              I am passionate about creating exotic custom tables and handcrafted wood furniture that transforms living spaces.
            </p>
            <p>
              I developed a wide range of skills from diverse trades, including automotive mechanics, CNC machine assembly & operations, and landscaping and construction. I'm highly experienced working with wood, metal, and masonry.
            </p>
            <p>
              I started with custom woodworking in my spare time, eventually moving away from machine-dependent methods to embrace traditional handcrafted techniques. Over time I found it far more fulfilling — and I discovered a passion for the dramatic: Lichtenberg fractal burns, live-edge slabs, and resin inlays that make every table one of a kind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

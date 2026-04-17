export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <div className="about-img-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <img
            src="/assets/img-table-cleanup"
            alt="Josh Keely - Founder"
          />
        </div>
        <div className="about-text">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">Josh Keely</h2>
          <div className="section-subtitle" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', color: 'var(--text-light)', maxWidth: 'none' }}>
            <p>
              My name is Josh Keely — founder of <strong>Western Elements Woodworking</strong>. 
              I am passionate about creating exotic custom furnishings and personalized home décor.
            </p>
            <p>
              I developed a wide range of skills from diverse trades, including automotive mechanics, CNC machine assembly & operations, and landscaping and construction. I'm highly experienced working with wood, metal, and masonry.
            </p>
            <p>
              I started making custom cutting and charcuterie boards in my spare time. Because I couldn't afford a CNC machine, I turned to traditional handcrafted woodworking. Over time, I found it much more affordable and deeply fulfilling than other trades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

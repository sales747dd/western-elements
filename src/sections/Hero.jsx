export default function Hero({ onQuoteOpen }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>

      <div className="hero-content">
        <div className="hero-badge">✦ Custom Tables &amp; Live-Edge Furniture</div>
        <h1>
          Handcrafted Tables<br />
          <em>Built to Last.</em>
        </h1>
        <p className="hero-desc">
          Live-edge dining tables, Lichtenberg fractal inlays, resin rivers, and outdoor sets —
          every piece handcrafted uniquely for your home. No mass production, ever.
        </p>
        <div className="hero-ctas">
          <button id="hero-quote-btn" className="btn btn-primary" onClick={onQuoteOpen}>
            Get a Free Quote →
          </button>
          <a href="#gallery" className="btn btn-outline">View Our Work</a>
        </div>
      </div>

      <div className="hero-image-col">
        <div className="hero-img-frame">
          <img
            src="/assets/img-table-lichtenberg.jpg"
            alt="Live-edge table with Lichtenberg fractal resin inlays"
          />
        </div>
      </div>
    </section>
  );
}

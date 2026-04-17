export default function Hero({ onQuoteOpen }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>

      <div className="hero-content">
        <h1>
          Where Wood Meets<br />
          <em>Art &amp; Soul.</em>
        </h1>
        <p className="hero-desc">
          Custom tables, live-edge pieces, blue resin inlays, and one-of-a-kind wood art. 
          No mass production. Every piece built uniquely for you.
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
            src="/assets/img-surfboard.jpg"
            alt="Custom handcrafted wooden surfboard with blue sea turtle carvings"
          />
        </div>
      </div>
    </section>
  );
}

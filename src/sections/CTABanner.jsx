export default function CTABanner({ onQuoteOpen }) {
  return (
    <section className="cta-banner" aria-labelledby="cta-heading">
      <div className="cta-banner-bg" aria-hidden="true"></div>
      <div className="container cta-banner-content">
        <span className="section-eyebrow">Ready to Get Started?</span>
        <h2 id="cta-heading">Transform Your Home with Something Truly Special</h2>
        <p>
          Join homeowners across BC and Alberta who chose to invest in something unique — 
          a piece built specifically for them and their home.
        </p>
        <div className="cta-banner-btns">
          <button id="cta-quote-btn" className="btn btn-primary" onClick={onQuoteOpen}>
            Get a Free Quote →
          </button>
          <a href="mailto:josh@westelementsstudio.ca" className="btn btn-outline">
            ✉ Email Josh Directly
          </a>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function Footer({ onQuoteOpen }) {
  return (
    <footer id="contact" className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <Link to="/" className="logo-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/assets/logo.jpg" alt="WE Logo" className="logo-img" />
              <div className="logo-text">
                <span className="brand">Western Elements</span>
                <span className="sub">Woodworking</span>
              </div>
            </Link>
            <p>
              Handcrafted custom wood furniture and art pieces serving homeowners across 
              British Columbia and Alberta. Every piece built uniquely for you.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Custom Tables</Link></li>
              <li><Link to="/services">Cutting Boards & Art</Link></li>
              <li><Link to="/services">Shelving Units</Link></li>
              <li><Link to="/services">Countertops & Islands</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact-item">
              <span className="icon" aria-hidden="true">📞</span>
              <a href="tel:+12506826932">250-682-6932</a>
            </div>
            <div className="footer-contact-item">
              <span className="icon" aria-hidden="true">✉</span>
              <a href="mailto:josh@westelementsstudio.ca">josh@westelementsstudio.ca</a>
            </div>
            <div className="footer-contact-item">
              <span className="icon" aria-hidden="true">📍</span>
              <span>Serving BC &amp; Alberta</span>
            </div>
            <br/>
            <button id="footer-quote-btn" className="btn btn-primary" onClick={onQuoteOpen} style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}>
              Get a Free Quote
            </button>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Western Elements Woodworking. All rights reserved.</span>
          <span>Handcrafted with ❤ in British Columbia</span>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteModal from './QuoteModal';

export default function Header({ onQuoteOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="logo-wrap" aria-label="Western Elements Woodworking Home">
          <img src="/assets/logo.jpg" alt="WE Logo" className="logo-img" />
          <div className="logo-text">
            <span className="brand">Western Elements</span>
            <span className="sub">Woodworking</span>
          </div>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button id="nav-quote-btn" className="btn btn-primary" onClick={onQuoteOpen}>
                Get a Free Quote
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

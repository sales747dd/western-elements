import { useState, useEffect } from 'react';
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
        <a href="#home" className="logo-wrap" aria-label="Western Elements Woodworking Home">
          <img src="/assets/logo.jpg" alt="WE Logo" className="logo-img" />
          <div className="logo-text">
            <span className="brand">Western Elements</span>
            <span className="sub">Woodworking</span>
          </div>
        </a>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
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

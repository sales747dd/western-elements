export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          West<span>Elements</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

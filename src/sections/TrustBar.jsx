export default function TrustBar() {
  const items = [
    { icon: '🌲', text: 'Serving BC & Alberta' },
    { icon: '🔵', text: 'Blue Resin & Epoxy Specialists' },
    { icon: '✋', text: '100% Handcrafted' },
    { icon: '⭐', text: 'No Mass Production — Ever' },
    { icon: '📐', text: 'Any Size, Any Style' },
  ];

  return (
    <div className="trust-bar" aria-label="Trust highlights">
      <div className="trust-bar-inner container">
        {items.map((item, i) => (
          <div key={i} className="trust-item">
            <span className="trust-icon" aria-hidden="true">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

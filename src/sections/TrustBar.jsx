export default function TrustBar() {
  const items = [
    { text: 'Serving BC & Alberta' },
    { text: 'Resin & Epoxy Specialists' },
    { text: '100% Handcrafted' },
    { text: 'No Mass Production — Ever' },
    { text: 'Any Size, Any Style' },
  ];

  return (
    <div className="trust-bar" aria-label="Trust highlights">
      <div className="trust-bar-inner container">
        {items.map((item, i) => (
          <div key={i} className="trust-item">
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

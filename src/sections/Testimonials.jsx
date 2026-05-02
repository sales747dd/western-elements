export default function Testimonials() {
  const reviews = [
    {
      text: 'The dining table Josh built for us is an absolute showstopper. The blue resin inlay catches the light beautifully and every single guest asks where we got it. Worth every penny.',
      name: 'Sandra M.',
      location: 'Kelowna, BC',
      initial: 'S',
    },
    {
      text: "We ordered a custom live-edge coffee table and couldn't be happier. The craftsmanship is outstanding and it fits our home perfectly. This is furniture you pass down to your kids.",
      name: 'Mike & Laura T.',
      location: 'Calgary, AB',
      initial: 'M',
    },
    {
      text: "Josh built us a stunning live-edge pine table with Lichtenberg burns across the whole top. It's unlike anything I've ever seen — the detail is extraordinary. Every dinner guest is blown away.",
      name: 'Carrie B.',
      location: 'Penticton, BC',
      initial: 'C',
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-head">
          <span className="section-eyebrow">What Clients Say</span>
          <h2 className="section-title">Built for Real Homes, Loved by Real People</h2>
          <p className="section-subtitle">Don't take our word for it — hear from the homeowners who live with our pieces every day.</p>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <div className="quote-mark" aria-hidden="true">"</div>
              <p>{r.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar" aria-hidden="true">{r.initial}</div>
                <div className="author-info">
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

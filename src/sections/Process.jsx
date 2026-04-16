export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'Tell us your vision — size, style, function, and budget. We\'ll help you shape a concept that fits perfectly.',
    },
    {
      num: '02',
      title: 'Design & Material Selection',
      desc: 'We select premium local wood and discuss finishes, resin colors, and custom details to make it uniquely yours.',
    },
    {
      num: '03',
      title: 'Craft & Deliver',
      desc: 'Your piece is carefully handcrafted and delivered or arranged for pickup. We don\'t rush craftsmanship.',
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="process-head">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">From Vision to Reality</h2>
          <p className="section-subtitle">
            Getting a custom piece is easier than you think. Here's our simple three-step process.
          </p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={i} className="process-step">
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const services = [
    {
      title: "Custom Tables",
      desc: "Any size, any style. Masterpieces designed to be the heart of your home.",
      img: "/assets/table.png"
    },
    {
      title: "Shelving Units",
      desc: "Beautiful, sturdy, and entirely customized to your space.",
      img: "/assets/shelving.png"
    },
    {
      title: "Countertops & Islands",
      desc: "Premium wood elements that elevate your kitchen's aesthetic.",
      img: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Serving British Columbia and Alberta with premium handcrafted woodworking.</p>
        
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card">
              <img src={svc.img} alt={svc.title} className="service-img" />
              <div className="service-body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

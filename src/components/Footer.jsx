export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Western Elements Woodworking</h4>
            <p>Elevating living spaces with unique, custom-made furniture crafted specifically for you.</p>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>📞 250-682-6932</p>
            <p>✉️ josh@westelementsstudio.ca</p>
            <p>📍 Serving BC and Alberta</p>
          </div>
          
          <div className="footer-col">
            <h4>Request a Consultation</h4>
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} Western Elements Woodworking. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

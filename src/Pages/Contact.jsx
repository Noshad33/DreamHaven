import "./Contact.css";
import { Mail, Phone, MapPin, Send, Map } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! Our team will contact you soon.");
  };

  return (
    <div className="premium-contact-wrapper">
      <div className="contact-horizontal-container">
        
        {/* LEFT COLUMN: INTERACTIVE FORM */}
        <main className="contact-form-card">
          <div className="contact-header-block">
            <h1>Get In <span className="gold-highlight">Touch</span></h1>
            <p>Have questions about listings in Peshawar? Drop us a line.</p>
            <div className="contact-accent-bar"></div>
          </div>

          <form onSubmit={handleSubmit} className="premium-contact-form">
            <div className="contact-input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g., Muhammad Khan"
                required
              />
            </div>

            <div className="contact-form-row">
              <div className="contact-input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="e.g., Plot Inquiry"
                  required
                />
              </div>
            </div>

            <div className="contact-input-group">
              <label>Message</label>
              <textarea
                rows="5"
                placeholder="Write your detailed query or property requirement here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </main>

        {/* RIGHT COLUMN: CONTACT META INFORMATION */}
        <aside className="contact-info-panel">
          <h2>Contact Information</h2>
          <div className="contact-accent-bar-light"></div>
          <p className="info-panel-subtitle">Reach out directly via our verified official office desk channels.</p>

          <div className="info-channels-stack">
            <div className="channel-item-box">
              <div className="channel-icon-circle"><Mail size={20} /></div>
              <div className="channel-meta-text">
                <h3>Email Us</h3>
                <span>info@dreamhaven.com</span>
              </div>
            </div>

            <div className="channel-item-box">
              <div className="channel-icon-circle"><Phone size={20} /></div>
              <div className="channel-meta-text">
                <h3>Call Desk</h3>
                <span>+92 300 1234567</span>
              </div>
            </div>

            <div className="channel-item-box">
              <div className="channel-icon-circle"><MapPin size={20} /></div>
              <div className="channel-meta-text">
                <h3>Main Office</h3>
                <span>Peshawar, Khyber Pakhtunkhwa, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="premium-map-placeholder">
            <Map size={24} className="map-placeholder-icon" />
            <span>Interactive Map Engine Coming Soon</span>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default Contact;
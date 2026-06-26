import { useState } from "react";
import "./ContactSeller.css";
import { MessageSquareText, Send } from "lucide-react";

function ContactSeller() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);
    alert("Inquiry Sent Successfully to Seller");

    setForm({
      name: "",
      phone: "",
      message: "",
    });
  }

  return (
    <div className="premium-seller-query-wrapper">
      <div className="seller-query-card-container">
        
        <div className="query-header-zone">
          <div className="query-icon-badge">
            <MessageSquareText size={24} />
          </div>
          <h1>Contact <span className="gold-highlight">Seller</span></h1>
          <p>Send your inquiry directly to the property dealer or asset owner.</p>
          <div className="query-title-divider"></div>
        </div>

        <form onSubmit={handleSubmit} className="premium-seller-form">
          
          {/* HORIZONTAL INPUT ROW */}
          <div className="query-form-row">
            <div className="query-input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Bilal Khan"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="query-input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g., +92 300 1234567"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* FULL WIDTH TEXTAREA */}
          <div className="query-input-group full-width-query-field">
            <label>Inquiry Message</label>
            <textarea
              name="message"
              placeholder="Hi, I am highly interested in this property listing. Please share the final demand, document verification status, and a suitable time for a physical site visit..."
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* SUBMIT BUTTON ROW */}
          <div className="query-action-row">
            <button type="submit" className="submit-query-btn">
              <Send size={16} />
              <span>Send Inquiry</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default ContactSeller;
import "./Inquiries.css";
import { HelpCircle, User, Phone, MessageSquare, Building2, Layers } from "lucide-react";
import { Link } from "react-router-dom";

function Inquiries() {
  return (
    <div className="premium-inquiries-canvas">
      <div className="inquiries-card-container">
        
        {/* HEADER AREA */}
        <header className="inquiries-header-zone">
          <div className="inquiries-title-wrapper">
            <div className="inquiries-icon-badge">
              <HelpCircle size={22} />
            </div>
            <div>
              <h1>Client <span className="gold-highlight">Inquiries</span></h1>
              <p>Manage lead submissions and property requirement requests from potential buyers</p>
            </div>
          </div>
          <div className="inquiries-counter-tag">1 Active Lead</div>
        </header>

        <div className="inquiries-divider-line"></div>

        {/* INQUIRIES LIST ELEMENT (STRICT HORIZONTAL ROW STRUCTURE) */}
        <div className="inquiries-stack-wrapper">
          <div className="inquiry-row-item">
            
            {/* Meta Segment 1: User Identity */}
            <div className="inquiry-meta-block block-user">
              <div className="meta-label">
                <User size={14} /> <span>Lead Name</span>
              </div>
              <p className="meta-value">Ali Khan</p>
            </div>

            {/* Meta Segment 2: Target Asset */}
            <div className="inquiry-meta-block block-property">
              <div className="meta-label">
                <Building2 size={14} /> <span>Target Property</span>
              </div>
              <p className="meta-value">5 Marla Luxury House</p>
            </div>

            {/* Meta Segment 3: Phone Contact */}
            <div className="inquiry-meta-block block-phone">
              <div className="meta-label">
                <Phone size={14} /> <span>Phone Number</span>
              </div>
              <p className="meta-value">03XXXXXXXXX</p>
            </div>

            {/* Meta Segment 4: Detailed Message */}
            <div className="inquiry-meta-block block-message">
              <div className="meta-label">
                <MessageSquare size={14} /> <span>Message Statement</span>
              </div>
              <p className="meta-value-message">"Please contact me regarding site visit arrangements."</p>
            </div>

            {/* Quick Action Button */}
            <div className="inquiry-action-block">
              <button className="inquiry-respond-btn" onClick={() => alert("Initializing Response Portal...")}>
                Respond
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Inquiries;
import "./AgentProfile.css";
import { UserCheck, MapPin, Building2, Briefcase, PhoneCall, Stars } from "lucide-react";

function AgentProfile() {
  return (
    <div className="premium-profile-workspace">
      <div className="profile-horizontal-layout">
        
        {/* LEFT CARD: AGENT BIO & ACTION */}
        <aside className="agent-identity-sidebar">
          <div className="agent-avatar-frame">
            <div className="agent-avatar-initials">AK</div>
          </div>

          <h1 className="profile-agent-name">Ali Khan</h1>
          <p className="profile-agent-role">Senior Property Consultant</p>
          
          <div className="profile-stars-indicator">
            <Stars size={16} fill="#eab308" color="#eab308" />
            <Stars size={16} fill="#eab308" color="#eab308" />
            <Stars size={16} fill="#eab308" color="#eab308" />
            <Stars size={16} fill="#eab308" color="#eab308" />
            <Stars size={16} fill="#eab308" color="#eab308" />
          </div>

          <div className="agent-meta-metrics-list">
            <div className="metric-row-item">
              <Briefcase size={18} className="meta-icon-teal" />
              <span><strong>Experience:</strong> 5 Years</span>
            </div>
            <div className="metric-row-item">
              <Building2 size={18} className="meta-icon-teal" />
              <span><strong>Total Listings:</strong> 12 Fields</span>
            </div>
            <div className="metric-row-item">
              <MapPin size={18} className="meta-icon-teal" />
              <span><strong>Location:</strong> Peshawar, KPK</span>
            </div>
          </div>

          <button className="premium-contact-agent-btn" onClick={() => alert("Connecting with Agent via WhatsApp/Call...")}>
            <PhoneCall size={18} />
            <span>Contact Agent</span>
          </button>
        </aside>

        {/* RIGHT CONTENT: DETAILED PORTFOLIO */}
        <main className="agent-portfolio-details-panel">
          
          {/* About Segment */}
          <section className="portfolio-content-block">
            <h2>About Agent</h2>
            <div className="block-accent-line"></div>
            <p className="agent-bio-paragraph">
              I specialize in residential and premium commercial property transactions across 
              <strong> Hayatabad, Regi Model Town, and University Town</strong>. Dedicated to helping 
              buyers secure verified listings with transparent pricing models.
            </p>
          </section>

          {/* Properties Grid Segment (STRICT HORIZONTAL 3-COLUMNS) */}
          <section className="portfolio-content-block">
            <h2>Properties Listed By Agent</h2>
            <div className="block-accent-line"></div>
            
            <div className="agent-properties-horizontal-grid">
              
              <div className="profile-property-mini-card">
                <div className="mini-card-badge">House</div>
                <h3>5 Marla Luxury House</h3>
                <p><MapPin size={14} /> Hayatabad Phase 6</p>
              </div>

              <div className="profile-property-mini-card">
                <div className="mini-card-badge">Plot</div>
                <h3>10 Marla Corner Plot</h3>
                <p><MapPin size={14} /> Regi Model Town</p>
              </div>

              <div className="profile-property-mini-card">
                <div className="mini-card-badge">Commercial</div>
                <h3>Premium Commercial Shop</h3>
                <p><MapPin size={14} /> University Town</p>
              </div>

            </div>
          </section>

        </main>

      </div>
    </div>
  );
}

export default AgentProfile;
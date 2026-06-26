import "./Footer.css";
import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-master-footer">
      <div className="footer-structural-container">
        
        {/* SECTION 1: BRAND PLATFORM PRESENTATION */}
        <div className="footer-brand-column-section">
          <div className="footer-brand-logo-row">
            <Building2 className="footer-brand-vector-icon" size={24} />
            <h2>Dream<span className="gold-text-accent">Haven</span></h2>
          </div>
          <div className="footer-brand-line-accent"></div>
          <p className="footer-brand-prose-description">
            Peshawar's premier digital real estate index ecosystem. Simplifying verified asset matching, trading, and institutional portfolio investments across prime provincial sectors.
          </p>
        </div>

        {/* SECTION 2: CLIENT NAVIGATION LINKS PIPELINE */}
        <div className="footer-links-column-section">
          <h3>Quick Links</h3>
          <ul className="footer-navigation-vertical-links">
            <li>
              <Link to="/">
                <span>Home Dashboard</span>
                <ArrowUpRight size={14} className="link-hover-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/properties">
                <span>Active Listings Feed</span>
                <ArrowUpRight size={14} className="link-hover-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <span>Investor Registration</span>
                <ArrowUpRight size={14} className="link-hover-arrow" />
              </Link>
            </li>
          </ul>
        </div>

        {/* SECTION 3: DIRECT CONTACT REGISTRY RADAR */}
        <div className="footer-contact-column-section">
          <h3>Central Office</h3>
          <div className="footer-contact-rows-stack">
            
            <div className="footer-contact-row-cell">
              <MapPin size={16} className="contact-meta-vector" />
              <p>University Road, Peshawar, KPK, Pakistan</p>
            </div>

            <div className="footer-contact-row-cell">
              <Mail size={16} className="contact-meta-vector" />
              <p>info@dreamhaven.com</p>
            </div>

            <div className="footer-contact-row-cell">
              <Phone size={16} className="contact-meta-vector" />
              <p className="contact-hotline-text">+92 300 1234567</p>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER SYSTEM COPYRIGHT STRIP BAR */}
      <div className="footer-copyright-horizontal-strip">
        <div className="copyright-inner-wrapper">
          <p>© {currentYear} DreamHaven Infrastructure Matrix. All Rights Reserved.</p>
          <p className="pda-compliance-tag-footer">PDA Regulatory Compliant Data Hub</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
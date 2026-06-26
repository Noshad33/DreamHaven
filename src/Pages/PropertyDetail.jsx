import { useEffect } from "react";
import "./PropertyDetail.css";
import { useParams, Link } from "react-router-dom";
import PropertyCard from "../Components/PropertyCard";
import properties from "../data/properties";
import { MapPin, Building2, Maximize2, Hash, User, Phone, Award, ShieldCheck, ArrowLeft } from "lucide-react";

function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  // Jab id change ho to user automatically page ke top par scroll ho jaye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="detail-not-found-canvas">
        <div className="not-found-box">
          <h2>Property Asset Not Found</h2>
          <p>The real estate index matching this reference code does not exist or has been archived.</p>
          <Link to="/properties" className="back-inventory-btn">
            <ArrowLeft size={16} /> Return to Active Market
          </Link>
        </div>
      </div>
    );
  }

  // Same category ya close matches ke liye recommendations rules fallback array
  const relatedProperties = properties
    .filter((item) => item.id !== property.id)
    .slice(0, 3);

  return (
    <div className="premium-detail-canvas">
      <div className="detail-content-container">
        
        {/* TOP COMPASS ACTION LINK */}
        <Link to="/properties" className="detail-nav-back-link">
          <ArrowLeft size={16} />
          <span>Back to Properties Feed</span>
        </Link>

        {/* HERO MEDIA BLOCK */}
        <div className="detail-hero-frame">
          <img src={property.image} alt={property.title} className="detail-core-img" />
          <div className="detail-hero-overlay-shadow"></div>
          <div className="detail-hero-caption-stack">
            <span className="detail-type-badge">{property.type}</span>
            <h1 className="detail-master-title">{property.title}</h1>
          </div>
        </div>

        {/* MAIN DUAL COLUMN FRAMEWORK ARCHITECTURE */}
        <div className="detail-dual-layout-grid">
          
          {/* LEFT SIDE: CORE SPECIFICATIONS MODULE */}
          <div className="detail-main-info-flow">
            
            {/* PRICING & METADATA BAR */}
            <div className="detail-pricing-header-card">
              <div className="price-tag-meta">
                <span className="price-micro-label">Investment Valuation</span>
                <p className="price-display-value">PKR {property.price}</p>
              </div>
            </div>

            {/* SPECS GRID SYSTEM */}
            <div className="detail-matrix-specs-grid">
              
              <div className="spec-feature-cell">
                <div className="spec-icon-badge"><MapPin size={18} /></div>
                <div className="spec-cell-text">
                  <label>Sector Location</label>
                  <p>{property.location}, Peshawar</p>
                </div>
              </div>

              <div className="spec-feature-cell">
                <div className="spec-icon-badge"><Building2 size={18} /></div>
                <div className="spec-cell-text">
                  <label>Property Architecture</label>
                  <p>{property.type}</p>
                </div>
              </div>

              <div className="spec-feature-cell">
                <div className="spec-icon-badge"><Maximize2 size={18} /></div>
                <div className="spec-cell-text">
                  <label>Covered Plot Area</label>
                  <p>{property.area || "5 Marla"}</p>
                </div>
              </div>

              <div className="spec-feature-cell">
                <div className="spec-icon-badge"><Hash size={18} /></div>
                <div className="spec-cell-text">
                  <label>Asset Registry Reference</label>
                  <p>#{property.id}</p>
                </div>
              </div>

            </div>

            {/* COMPREHENSIVE TEXT DESCRIPTION SHIELD */}
            <div className="detail-description-block-shield">
              <h3>Detailed Presentation</h3>
              <div className="small-gold-bar-accent"></div>
              <p className="description-prose-text">
                {property.description || "Premium real estate infrastructure option strategically located in a high-demand development zone of Peshawar. Offers access to utility networks, top security measures, wide asphalt lanes grid layout systems, and proximate high-tier commercial market squares hubs."}
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: UTILITIES AND AGENT FLOATING COLUMN */}
          <div className="detail-side-widgets-sticky">
            
            {/* SELLER IDENTITY INTERACTIVE CARD */}
            <div className="widget-premium-card block-seller">
              <div className="widget-card-header">
                <User size={18} className="teal-widget-icon" />
                <h3>Authorized Seller Details</h3>
              </div>
              <div className="widget-divider-line"></div>
              
              <div className="seller-profile-rows-stack">
                <div className="seller-profile-row">
                  <span className="row-meta-label">Assigned Representative</span>
                  <p className="row-meta-value">Ahmed Khan</p>
                </div>
                <div className="seller-profile-row">
                  <span className="row-meta-label">Contact Hotline</span>
                  <p className="row-meta-value accent-phone">03XX-XXXXXXX</p>
                </div>
                <div className="seller-profile-row">
                  <span className="row-meta-label">Market Credentials</span>
                  <p className="row-meta-value">5 Years Active Agent</p>
                </div>
                <div className="seller-profile-row">
                  <span className="row-meta-label">Operation Base</span>
                  <p className="row-meta-value">KPK Regional Division</p>
                </div>
              </div>

              <button className="widget-contact-trigger-btn" onClick={() => alert("Connecting with Ahmed Khan...")}>
                <Phone size={16} /> Request Secure Callback
              </button>
            </div>

            {/* GOVERNMENT PDA AUTHORITY VERIFICATION SHIELD */}
            <div className="widget-premium-card block-pda-shield">
              <div className="widget-card-header">
                <ShieldCheck size={18} className="gold-widget-icon" />
                <h3>PDA Compliance Verification</h3>
              </div>
              <p className="pda-compliance-explainer">
                Cross-reference zoning coordinates regulations with Peshawar Development Authority indices maps databases.
              </p>
              <a 
                href="https://www.pda.gkp.pk" 
                target="_blank" 
                rel="noreferrer" 
                className="pda-portal-external-link"
              >
                Launch Live PDA Registry Check
              </a>
            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: 3-COLUMN SIMILAR SHELF LAYOUT */}
        <div className="detail-recommendations-shelf-section">
          <div className="shelf-header-row">
            <h2>Similar Property <span className="gold-highlight">Matches</span></h2>
            <div className="shelf-horizontal-line"></div>
          </div>

          <div className="premium-shelf-horizontal-grid">
            {relatedProperties.map((item) => (
              <div key={item.id} className="shelf-card-motion-wrapper">
                <PropertyCard data={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyDetail;
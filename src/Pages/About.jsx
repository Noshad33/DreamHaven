import "./About.css";
import { Link } from "react-router-dom";
import { ShieldCheck, Search, Users, BrainCircuit, ArrowRight } from "lucide-react";

function About() {
  return (
    <div className="premium-about-page">

      {/* Hero Section */}
      <section className="about-hero-section">
        <h1 className="about-hero-title">
          About <span className="gold-highlight">DreamHaven</span>
        </h1>
        <p className="about-hero-subtitle">
          Helping Buyers and Sellers Connect Across Peshawar
        </p>
        <div className="about-gold-divider"></div>
      </section>

      {/* Our Story */}
      <section className="about-story-section">
        <div className="story-container">
          <div className="story-image-box">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
              alt="Peshawar Real Estate Deal" 
              className="story-real-img"
            />
          </div>

          <div className="story-content-box">
            <h2>Our Story</h2>
            <p>
              DreamHaven was created to simplify the property search experience in Peshawar. 
              Many buyers struggle to find trusted listings while sellers face difficulties 
              reaching genuine buyers.
            </p>
            <p>
              Our platform connects both sides through a secure, transparent, and easy-to-use 
              system, tailored specifically for the modern real estate dynamics of KPK.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision (STRICT 2-COLUMN ROW) */}
      <section className="about-mv-row">
        <div className="mv-card-block">
          <div className="mv-accent-tag">01</div>
          <h2>Mission</h2>
          <p>
            To provide a secure, transparent, and user-friendly real estate platform for the 
            people of Peshawar, cutting out the traditional hassle.
          </p>
        </div>

        <div className="mv-card-block">
          <div className="mv-accent-tag">02</div>
          <h2>Vision</h2>
          <p>
            To become the most trusted real estate portal in KPK, setting a benchmark for 
            digitalized property trades and automated matchmaking.
          </p>
        </div>
      </section>

      {/* Features Grid (STRICT 4-COLUMN ROW) */}
      <section className="about-features-section">
        <h2 className="features-main-heading">Why Choose DreamHaven</h2>
        <div className="features-horizontal-grid">
          
          <div className="about-feature-card">
            <div className="feature-icon-circle"><ShieldCheck size={24} /></div>
            <h3>Verified Listings</h3>
            <p>Every single plot, villa, and home goes through verification filters.</p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon-circle"><Search size={24} /></div>
            <h3>Easy Search</h3>
            <p>Filter seamlessly by choice of town, sectors, budgets, and property types.</p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon-circle"><Users size={24} /></div>
            <h3>Trusted Agents</h3>
            <p>Direct communication paths with verified field experts in Peshawar.</p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon-circle"><BrainCircuit size={24} /></div>
            <h3>Future AI Features</h3>
            <p>Smart valuation indicators and smart price forecasting tools.</p>
          </div>

        </div>
      </section>

      {/* Stats Block (STRICT 3-COLUMN ROW) */}
      <section className="about-stats-strip">
        <div className="about-stat-box">
          <h2>500+</h2>
          <p>Active Properties</p>
        </div>

        <div className="about-stat-box">
          <h2>100+</h2>
          <p>Verified Agents</p>
        </div>

        <div className="about-stat-box">
          <h2>1000+</h2>
          <p>Satisfied Users</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-banner">
        <h2>Find Your Dream Property Today</h2>
        <Link to="/properties" className="about-cta-link-btn">
          <span>Browse Properties</span>
          <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}

export default About;
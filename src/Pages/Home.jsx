import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, ArrowRight, Brain, Sparkles } from "lucide-react";
import PropertyCard from "../Components/PropertyCard";
import properties from "../data/properties";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  
  const [purposeTab, setPurposeTab] = useState("Sale"); 
  const [location, setLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.append("purpose", purposeTab);
    if (location) params.append("location", location);
    if (searchQuery.trim() !== "") params.append("query", searchQuery.trim().toLowerCase());
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="dreamhaven-homepage">
      
      {/* IMMERSIVE HERO SECTION */}
      <section className="premium-hero">
        <div className="hero-image-overlay">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            alt="Peshawar Luxury Estate Backdrop" 
            className="hero-backdrop-img"
          />
          <div className="hero-dark-vignette"></div>
        </div>

        <div className="hero-container-fluid">
          <div className="hero-text-aligner">
            <div className="peshawar-badge">
              <span>📍 Peshawar City</span>
            </div>

            <h1 className="luxury-main-title">
              Find a home that feels like <span className="gold-script">yours.</span>
            </h1>

            <p className="luxury-description-paragraph">
              From the leafy lanes of University Town to the modern boulevards of 
              Hayatabad and DHA — discover Peshawar's finest properties to buy or rent.
            </p>

            {/* FLOATING PILL SEARCH CAPSULE */}
            <div className="floating-search-panel">
              <div className="search-inputs-box">
                <div className="search-tabs-row">
                  <button 
                    type="button"
                    className={`tab-selector-btn ${purposeTab === "Sale" ? "active-tab" : ""}`}
                    onClick={() => setPurposeTab("Sale")}
                  >
                    For Sale
                  </button>
                  <button 
                    type="button"
                    className={`tab-selector-btn ${purposeTab === "Rent" ? "active-tab" : ""}`}
                    onClick={() => setPurposeTab("Rent")}
                  >
                    For Rent
                  </button>
                </div>

                <div className="input-inner-field">
                  <Search size={18} className="field-decorative-icon" />
                  <input 
                    type="text" 
                    placeholder="Search title, keywords e.g. villa, luxury..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="inner-raw-input"
                  />
                </div>

                <div className="input-inner-field">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="inner-raw-select"
                  >
                    <option value="">Any location</option>
                    <option value="Hayatabad">Hayatabad</option>
                    <option value="University Town">University Town</option>
                    <option value="Saddar">Saddar</option>
                    <option value="DHA">DHA Peshawar</option>
                  </select>
                </div>

                <button type="button" className="luxury-search-trigger" onClick={handleSearch}>
                  <span>Search</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FEED */}
      <section className="home-properties-grid-section">
        <div className="grid-section-header">
          <span className="premium-accent-tag">Curated Portfolio</span>
          <h2 className="grid-section-title">Featured Capital Estates</h2>
          <div className="premium-divider-bar"></div>
        </div>

        <div className="home-properties-grid-layout">
          {properties.slice(0, 6).map((item) => (
            <PropertyCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      {/* CLEAN & PREMIUM AI BANNER SECTION */}
      <section className="ai-home-banner">
        <div className="ai-banner-glow-effect" />
        <div className="ai-banner-content">
          <div className="ai-banner-badge">
            <Sparkles size={14} className="animate-pulse" /> 
            <span>Smart Machine Learning Module</span>
          </div>
          
          <h2 className="ai-banner-title">
            Predict Peshawar Property Prices Instantly With <span className="text-gold">AI Engine</span>
          </h2>
          
          <p className="ai-banner-description">
            Evaluate modern valuation estimations across prime sectors like Hayatabad, DHA Peshawar, and University Town using algorithmic structural data vectors.
          </p>

          <Link to="/ai-prediction" className="ai-banner-cta-btn">
            <Brain size={18} />
            <span>Launch AI Price Predictor</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
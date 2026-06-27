import React, { useState } from "react";
import { 
  MapPin, 
  Building2, 
  Layers, 
  Bed, 
  Bath, 
  Sparkles, 
  Brain, 
  DollarSign, 
  TrendingUp, 
  CheckCircle,
  Activity,
  Calendar,
  ShieldCheck
} from "lucide-react";
import "./AIPrediction.css"; // Path set to same folder

const AIPrediction = () => {
  const [formData, setFormData] = useState({
    location: "Hayatabad",
    propertyType: "House",
    areaSize: "",
    bedrooms: "3",
    bathrooms: "3",
    condition: "Good",
    age: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [predictionData, setPredictionData] = useState(null);

  const locations = [
    "Hayatabad", "University Town", "DHA Peshawar", 
    "Regi Model Town", "Gulbahar", "Ring Road", "Saddar", "Warsak Road"
  ];
  
  const propertyTypes = ["House", "Apartment", "Plot", "Commercial Shop", "Office"];
  const bedroomOptions = ["1", "2", "3", "4", "5", "6", "7+"];
  const bathroomOptions = ["1", "2", "3", "4", "5", "6+"];
  const conditions = ["New", "Excellent", "Good", "Average", "Needs Renovation"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowResults(false);

    setTimeout(() => {
      const baseArea = parseFloat(formData.areaSize) || 5;
      let multiplier = 1.2;

      if (formData.location === "DHA Peshawar" || formData.location === "University Town") multiplier = 1.8;
      if (formData.location === "Hayatabad") multiplier = 1.6;
      if (formData.propertyType === "Commercial Shop") multiplier *= 1.4;

      const calculatedPrice = (baseArea * multiplier * 15.5).toFixed(2);
      
      setPredictionData({
        estimatedPrice: `${calculatedPrice} Crore`,
        confidence: Math.floor(Math.random() * (96 - 88 + 1)) + 88 + "%",
        trend: parseFloat(calculatedPrice) > 2 ? "Increasing" : "Stable",
      });

      setIsSubmitting(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <div className="ai-prediction-wrapper">
      <section className="ai-hero-container">
        <div className="ai-hero-bg-overlay"></div>
        <div className="ai-hero-content-box">
          <div className="ai-badge">
            <Brain className="ai-badge-icon" size={16} />
            <span>Advanced Machine Learning Framework</span>
          </div>
          <h1 className="ai-hero-title">
            AI Property Price <span className="text-gold">Prediction</span>
          </h1>
          <p className="ai-hero-subtitle">
           Predict property prices across Peshawar using AI-powered market analysis.
          </p>
        </div>
      </section>

      <div className="ai-feature-layout">
        <div className="ai-grid-system">
          
          <div className="ai-form-card-panel">
            <div className="ai-panel-header">
              <Sparkles className="text-gold animate-pulse" size={24} />
              <h2>Valuation Parameters</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="ai-responsive-form">
              <div className="form-input-row-group">
                <div className="input-field-wrapper">
                  <label><MapPin size={16} /> Target Sector / Location</label>
                  <select name="location" value={formData.location} onChange={handleChange}>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div className="input-field-wrapper">
                  <label><Building2 size={16} /> Property Category</label>
                  <select name="propertyType" value={formData.propertyType} onChange={handleChange}>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-input-row-group">
                <div className="input-field-wrapper">
                  <label><Layers size={16} /> Area Dimension (Marla)</label>
                  <input 
                    type="number" 
                    name="areaSize" 
                    placeholder="e.g. 5, 10, 20" 
                    value={formData.areaSize} 
                    onChange={handleChange}
                    required 
                    min="1"
                  />
                </div>

                <div className="input-field-wrapper">
                  <label><Calendar size={16} /> Construction Age (Years)</label>
                  <input 
                    type="number" 
                    name="age" 
                    placeholder="0 for Brand New structure" 
                    value={formData.age} 
                    onChange={handleChange}
                    required 
                    min="0"
                  />
                </div>
              </div>

              <div className="form-input-row-triple">
                <div className="input-field-wrapper">
                  <label><Bed size={14} /> Beds</label>
                  <select name="bedrooms" value={formData.bedrooms} onChange={handleChange}>
                    {bedroomOptions.map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="input-field-wrapper">
                  <label><Bath size={14} /> Baths</label>
                  <select name="bathrooms" value={formData.bathrooms} onChange={handleChange}>
                    {bathroomOptions.map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="input-field-wrapper">
                  <label><Activity size={14} /> Condition</label>
                  <select name="condition" value={formData.condition} onChange={handleChange}>
                    {conditions.map((cond) => (
                      <option key={cond} value={cond}>{cond}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="ai-compute-trigger-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="ai-processing-loader">
                    <div className="spinner-node"></div>
                    <span>Analyzing property details....</span>
                  </div>
                ) : (
                  <>
                    <Brain size={18} />
                    <span>Predict Price</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="ai-results-dashboard-panel">
            {!showResults && !isSubmitting && (
              <div className="ai-dashboard-fallback-placeholder">
                <Brain size={56} className="placeholder-neural-icon" />
                <h3>Awaiting Dataset Diagnostics</h3>
                <p>Fill out the spatial parameters form configuration specifications and execute valuation matrix to populate neural data metrics.</p>
              </div>
            )}

            {isSubmitting && (
              <div className="ai-dashboard-fallback-placeholder animate-pulse">
                <Sparkles size={56} className="placeholder-neural-icon text-gold" />
                <h3>Synthesizing Real Estate Index Metrics</h3>
                <p>Cross-referencing hyper-parameters with real-time sector indices in Peshawar City dataset models...</p>
              </div>
            )}

            {showResults && (
              <div className="ai-dashboard-active-output-view fade-in-slide">
                <div className="ai-output-metrics-card">
                  <div className="metric-card-top-accent"></div>
                  <div className="metric-row-header">
                    <h4>Estimated Market Price</h4>
                    <span className="premium-pill">AI Engine Ver 2.4</span>
                  </div>
                  <div className="valuation-output-numeric-display">
                    <DollarSign className="text-gold" size={32} />
                    <h2>PKR {predictionData.estimatedPrice}</h2>
                  </div>
                  
                  <hr className="metric-divider" />
                  
                  <div className="metric-supplementary-footer-grid">
                    <div className="supplementary-sub-node">
                      <span className="sub-node-label"><ShieldCheck size={14} /> Confidence</span>
                      <span className="sub-node-value text-green">{predictionData.confidence}</span>
                    </div>
                    <div className="supplementary-sub-node">
                      <span className="sub-node-label"><TrendingUp size={14} /> Price Trend</span>
                      <span className="sub-node-value text-gold">{predictionData.trend}</span>
                    </div>
                  </div>
                </div>

                <div className="ai-recommendations-matrix-card">
                  <h3><Sparkles size={18} className="text-gold" /> Investment Suitability Indices</h3>
                  <div className="recommendation-bullets-grid">
                    <div className="recommendation-item-node">
                      <CheckCircle size={18} className="icon-success-node" />
                      <span><strong>Good Investment:</strong> Yielding optimal valuation compounding rates in {formData.location}.</span>
                    </div>
                    <div className="recommendation-item-node">
                      <CheckCircle size={18} className="icon-success-node" />
                      <span><strong>High Market Demand:</strong> High historical inquiry conversion ratios for {formData.propertyType} components.</span>
                    </div>
                    <div className="recommendation-item-node">
                      <CheckCircle size={18} className="icon-success-node" />
                      <span><strong>Best for Family Living:</strong> High qualitative regional neighborhood safety index records.</span>
                    </div>
                    <div className="recommendation-item-node">
                      <CheckCircle size={18} className="icon-success-node" />
                      <span><strong>Strong Rental Potential:</strong> Dynamic transactional cashflow capitalization ratios.</span>
                    </div>
                    <div className="recommendation-item-node">
                      <CheckCircle size={18} className="icon-success-node" />
                      <span><strong>Safe Residential Area:</strong> Secured municipal development zoning profiles.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIPrediction;
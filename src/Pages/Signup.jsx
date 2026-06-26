import { useState } from "react";
import "./Signup.css";
import { UserPlus, User, Mail, Lock, ShieldAlert, Briefcase } from "lucide-react";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Empty field check
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role
    ) {
      setError("All credential inputs are mandatory to initialize registry.");
      return;
    }

    // Email verification
    if (!formData.email.includes("@")) {
      setError("Please provide a syntactically authentic email structure.");
      return;
    }

    // Password validation parameters
    if (formData.password.length < 6) {
      setError("Security passphrase must encompass at least 6 characters.");
      return;
    }

    // Integrity check
    if (formData.password !== formData.confirmPassword) {
      setError("Passphrase mismatch. Validation keys must correspond perfectly.");
      return;
    }

    setError("");
    alert("Account Pipeline Initialized Successfully!");
    console.log(formData);
  }

  return (
    <div className="premium-auth-canvas">
      <div className="auth-card-container markup-signup">
        
        {/* BRAND TITLE LAYOUT SHIELD */}
        <div className="auth-header-zone">
          <div className="auth-icon-badge">
            <UserPlus size={22} />
          </div>
          <h1>Create <span className="gold-highlight">Account</span></h1>
          <p>Join DreamHaven to access custom real estate dashboards in Peshawar.</p>
          <div className="auth-title-divider"></div>
        </div>

        {/* CONDITIONALS ERROR DISPLAYER ALERT WINDOW */}
        {error && (
          <div className="auth-validation-alert-box">
            <ShieldAlert size={16} className="alert-vector-icon" />
            <span>{error}</span>
          </div>
        )}

        {/* INPUT ENGINE CONFIGURATION FORM */}
        <form onSubmit={handleSubmit} className="premium-auth-form">
          
          <div className="auth-input-group">
            <label>Full Identity Name</label>
            <div className="input-with-icon-wrapper">
              <User size={16} className="field-inner-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="e.g. Ali Khan"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="input-with-icon-wrapper">
              <Mail size={16} className="field-inner-icon" />
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Market Operational Role</label>
            <div className="input-with-icon-wrapper">
              <Briefcase size={16} className="field-inner-icon" />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="auth-dropdown-select-element"
                required
              >
                <option value="">Choose Portal Persona</option>
                <option value="Buyer">Property Buyer / Investor</option>
                <option value="Seller">Private Asset Seller</option>
                <option value="Agent">Certified Agency Agent</option>
              </select>
            </div>
          </div>

          <div className="auth-input-group">
            <label>Secure Password</label>
            <div className="input-with-icon-wrapper">
              <Lock size={16} className="field-inner-icon" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label>Confirm Verification Password</label>
            <div className="input-with-icon-wrapper">
              <Lock size={16} className="field-inner-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-trigger-btn spacing-top">
            <span>Register Secure Profile</span>
          </button>

        </form>

        {/* ACCENTS NAVIGATION REDIRECT FOOTER */}
        <div className="auth-footer-redirect-zone">
          <p>
            Already registered on our network? <a href="/login" className="bold-gold-link">Login Here</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
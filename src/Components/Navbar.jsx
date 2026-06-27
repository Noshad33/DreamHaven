import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Brain } from "lucide-react"; // Brain icon add kiya gaya hai
import { auth } from "../auth";
import "./Navbar.css"; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="premium-navbar">
      <div className="nav-container">
        <div className="nav-row">
          
          {/* LOGO AREA */}
          <Link to="/" className="nav-logo-group">
            <div className="logo-icon-box">
              <Home className="logo-icon" />
            </div>
            <span className="logo-text">DreamHaven </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="desktop-links">
            <Link to="/" className="nav-link active-link">Home</Link>
            <Link to="/properties" className="nav-link">Properties</Link>
            <Link to="/agents" className="nav-link">Agents</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>

             {/* NEW AI PREDICTION LINK ADDED HERE */}
            <Link to="/ai-prediction" className="nav-link" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Brain size={16} style={{ color: "#d4af37" }} />
              <span>AI Prediction</span>
            </Link>

            {auth.role === "Buyer" && (
              <Link to="/favorites" className="nav-link buyer-link">Favorites</Link>
            )}

            {auth.role === "Admin" && (
              <Link to="/admin" className="nav-link admin-link">Admin</Link>
            )}
          </div>

          {/* DESKTOP AUTH BUTTONS */}
          <div className="desktop-auth">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/dashboard" className="account-btn">My Account</Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="mobile-toggle-zone">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle-btn">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN NAVIGATION */}
      {isMenuOpen && (
        <div className="mobile-dropdown">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="mobile-link">Home</Link>
          <Link to="/properties" onClick={() => setIsMenuOpen(false)} className="mobile-link">Properties</Link>
          <Link to="/agents" onClick={() => setIsMenuOpen(false)} className="mobile-link">Agents</Link>
          
          {/* NEW AI PREDICTION MOBILE LINK ADDED HERE */}
          <Link to="/ai-prediction" onClick={() => setIsMenuOpen(false)} className="mobile-link" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Brain size={18} style={{ color: "#d4af37" }} />
            <span>AI Prediction</span>
          </Link>

          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="mobile-link">About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mobile-link">Contact</Link>

          {auth.role === "Buyer" && (
            <Link to="/favorites" onClick={() => setIsMenuOpen(false)} className="mobile-link buyer-link">Favorites</Link>
          )}

          {auth.role === "Admin" && (
            <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="mobile-link admin-link">Admin</Link>
          )}

          <div className="mobile-divider" />

          <div className="mobile-auth-grid">
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="mobile-auth-login">Login</Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="mobile-auth-signup">Signup</Link>
          </div>
          <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="mobile-account-btn">My Account</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
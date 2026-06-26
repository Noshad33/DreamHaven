import { useState } from "react";
import "./Login.css";
import { LogIn, Mail, Lock, ShieldAlert } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Feature Will Connect With Backend Later");
  };

  return (
    <div className="premium-auth-canvas">
      <div className="auth-card-container">
        
        {/* CARD TOP BRAND ZONE */}
        <div className="auth-header-zone">
          <div className="auth-icon-badge">
            <LogIn size={22} />
          </div>
          <h1>Welcome <span className="gold-highlight">Back</span></h1>
          <p>Login to securely manage your DreamHaven property listings pipeline.</p>
          <div className="auth-title-divider"></div>
        </div>

        {/* INTERACTIVE FORM ENGINE */}
        <form onSubmit={handleSubmit} className="premium-auth-form">
          
          <div className="auth-input-group">
            <label>Email Address</label>
            <div className="input-with-icon-wrapper">
              <Mail size={16} className="field-inner-icon" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="auth-input-group">
            <div className="label-row-with-link">
              <label>Password</label>
              <a href="/forgot-password" className="auth-micro-link">Forgot Password?</a>
            </div>
            <div className="input-with-icon-wrapper">
              <Lock size={16} className="field-inner-icon" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-trigger-btn">
            <span>Secure Login</span>
          </button>

        </form>

        {/* BOTTOM REDIRECT METAS */}
        <div className="auth-footer-redirect-zone">
          <p>
            Don't have an account yet? <a href="/signup" className="bold-gold-link">Sign Up Portal</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;
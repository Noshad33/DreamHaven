import "./Agents.css";
import { Link } from "react-router-dom";

function Agents() {
  const agentsData = [
    { id: 1, name: "Hamza Khan", role: "Senior Property Consultant", initials: "HK", deals: "142", exp: "8 yrs" },
    { id: 2, name: "Sana Gul", role: "Luxury Homes Specialist", initials: "SG", deals: "98", exp: "6 yrs" },
    { id: 3, name: "Bilal Afridi", role: "Commercial Expert", initials: "BA", deals: "211", exp: "12 yrs" },
    { id: 4, name: "Nadia Shah", role: "Investment Consultant", initials: "NS", deals: "76", exp: "5 yrs" },
    { id: 5, name: "Ali Khan", role: "Property Consultant", initials: "AK", deals: "120", exp: "7 yrs" },
    { id: 6, name: "Ahmad Khan", role: "Real Estate Agent", initials: "AM", deals: "85", exp: "4 yrs" },
    { id: 7, name: "Zainab Bibi", role: "Commercial Specialist", initials: "ZB", deals: "154", exp: "9 yrs" },
    { id: 8, name: "Omar Farooq", role: "Investment Advisor", initials: "OF", deals: "92", exp: "6 yrs" },
    { id: 9, name: "Asad Mehmood", role: "Residential Expert", initials: "AM", deals: "110", exp: "5 yrs" },
    { id: 10, name: "Sana Wali", role: "Luxury Property Agent", initials: "SW", deals: "64", exp: "3 yrs" },
    { id: 11, name: "Mustafa Jan", role: "Plot Consultant", initials: "MJ", deals: "198", exp: "11 yrs" },
    { id: 12, name: "Nadia Shinwari", role: "Hayatabad Broker", initials: "NS", deals: "130", exp: "8 yrs" },
    { id: 13, name: "Fahad Karim", role: "Sales Director", initials: "FK", deals: "310", exp: "15 yrs" },
    { id: 14, name: "Zoya Ahmed", role: "Townhouse Expert", initials: "ZA", deals: "72", exp: "4 yrs" },
    { id: 15, name: "Tariq Aziz", role: "Property Evaluator", initials: "TA", deals: "165", exp: "10 yrs" },
    { id: 16, name: "Saad Khattak", role: "Marketing Head", initials: "SK", deals: "88", exp: "5 yrs" }
  ];

  return (
    <div className="premium-agents-page">
      
      <div className="agents-center-header">
        <h1 className="trusted-agents-title">
          Trusted <span className="gold-text-highlight">Agents</span>
        </h1>
        <p className="agents-subtitle-tag">
          Connect with Peshawar's most experienced property consultants
        </p>
      </div>

      <div className="premium-agents-grid-engine">
        {agentsData.map((agent) => (
          <div key={agent.id} className="trusted-agent-card-box">
            
            {/* Initials Circle */}
            <div className="agent-initials-circle">
              {agent.initials}
            </div>

            <h3 className="agent-card-name">{agent.name}</h3>
            <p className="agent-card-role">{agent.role}</p>

            {/* Gold Stars */}
            <div className="agent-stars-row">★★★★★</div>

            {/* FIXED: View Profile Button Wapis Add Kar Diya */}
            <Link to="/agent-profile" className="agent-profile-btn-link">
              <button className="agent-view-profile-btn">View Profile</button>
            </Link>

            <div className="agent-divider-line"></div>

            {/* Bottom statistics footer */}
            <div className="agent-stats-footer-row">
              <div className="stat-data-block">
                <span className="stat-number-value">{agent.deals}</span>
                <span className="stat-label-text">DEALS</span>
              </div>
              <div className="stat-data-block">
                <span className="stat-number-value">{agent.exp}</span>
                <span className="stat-label-text">EXPERIENCE</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Agents;
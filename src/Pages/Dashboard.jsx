import { Link } from "react-router-dom";
import "./Dashboard.css";
import { 
  LayoutDashboard, User, Heart, Building2, PlusCircle, 
  HelpCircle, MessageSquare, Settings, Bell, ChevronRight 
} from "lucide-react";

function Dashboard() {
  return (
    <div className="premium-dashboard-canvas">
      
      {/* FIXED LEFT SIDEBAR */}
      <aside className="dashboard-sidebar-panel">
        <div className="sidebar-brand-zone">
          <h2>DreamHaven</h2>
          <span className="user-badge">Client Portal</span>
        </div>

        <ul className="sidebar-nav-menu">
          <li className="menu-item active">
            <Link to="/dashboard"><LayoutDashboard size={18} /> <span>Dashboard</span></Link>
          </li>
          <li className="menu-item">
            <Link to="/profile"><User size={18} /> <span>My Profile</span></Link>
          </li>
          <li className="menu-item">
            <Link to="/favorites"><Heart size={18} /> <span>Saved Favorites</span></Link>
          </li>
          <li className="menu-item">
            <Link to="/my-listings"><Building2 size={18} /> <span>My Listings</span></Link>
          </li>
          <li className="menu-item">
            <Link to="/add-property"><PlusCircle size={18} /> <span>Add Property</span></Link>
          </li>
          <li className="menu-item">
            <Link to="/inquiries"><HelpCircle size={18} /> <span>Inquiries</span></Link>
          </li>
          <li className="menu-item">
            <Link to="/messages"><MessageSquare size={18} /> <span>Messages</span></Link>
          </li>
          <li className="menu-item settings-item">
            <Link to="/settings"><Settings size={18} /> <span>Account Settings</span></Link>
          </li>
        </ul>
      </aside>

      {/* RIGHT SIDE MAIN DASHBOARD WORKSPACE */}
      <main className="dashboard-main-workspace">
        
        <header className="workspace-header">
          <div className="header-text">
            <h1>Welcome Back </h1>
            <p>Here is your overall real estate metrics summary pipeline</p>
          </div>
          <div className="header-accent-line"></div>
        </header>

        {/* STATS MATRIX - STRICT HORIZONTAL 4 CARDS ROW */}
        <div className="dashboard-stats-grid-row">
          
          <div className="dashboard-stat-card-box">
            <div className="stat-icon-wrapper blue-icon"><Building2 size={22} /></div>
            <div className="stat-text-meta">
              <h3>My Listings</h3>
              <p className="counter-val">12</p>
            </div>
          </div>

          <div className="dashboard-stat-card-box">
            <div className="stat-icon-wrapper red-icon"><Heart size={22} /></div>
            <div className="stat-text-meta">
              <h3>Favorites</h3>
              <p className="counter-val">5</p>
            </div>
          </div>

          <div className="dashboard-stat-card-box">
            <div className="stat-icon-wrapper gold-icon"><MessageSquare size={22} /></div>
            <div className="stat-text-meta">
              <h3>Messages</h3>
              <p className="counter-val">3</p>
            </div>
          </div>

          <div className="dashboard-stat-card-box">
            <div className="stat-icon-wrapper teal-icon"><HelpCircle size={22} /></div>
            <div className="stat-text-meta">
              <h3>Inquiries</h3>
              <p className="counter-val">7</p>
            </div>
          </div>

        </div>

        {/* RECENT ACTIVITY TIMELINE BLOCK */}
        <div className="dashboard-lower-container">
          <div className="dashboard-content-card activity-panel">
            <div className="panel-title-row">
              <Bell size={18} className="title-icon-gold" />
              <h2>Recent Account Logs</h2>
            </div>
            
            <ul className="activity-stream-timeline">
              <li className="stream-item text-success">
                <span className="stream-time-stamp">Today</span>
                <p>Property Asset added successfully to Peshawar listings engine</p>
              </li>
              <li className="stream-item text-favorite">
                <span className="stream-time-stamp">Yesterday</span>
                <p>New residential 5 Marla house saved to your active favorites grid</p>
              </li>
              <li className="stream-item text-inquiry">
                <span className="stream-time-stamp">3 days ago</span>
                <p>Direct premium lead inquiry request incoming via customer panel</p>
              </li>
              <li className="stream-item text-update">
                <span className="stream-time-stamp">1 week ago</span>
                <p>Commercial plot trade parameters updated in verified records</p>
              </li>
            </ul>
          </div>
        </div>

      </main>

    </div>
  );
}

export default Dashboard;
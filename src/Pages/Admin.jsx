import "./Admin.css";
import { 
  LayoutDashboard, Users, Building2, UserCheck, 
  FileCheck2, AlertCircle, Settings, LogOut, Check, X 
} from "lucide-react";

function Admin() {
  return (
    <div className="premium-admin-canvas">

      {/* FIXED LEFT SIDEBAR */}
      <aside className="admin-sidebar-panel">
        <div className="sidebar-brand-zone">
          <h2>DreamHaven</h2>
          <span className="admin-badge">Admin Suite</span>
        </div>

        <ul className="sidebar-nav-menu">
          <li className="menu-item active"><LayoutDashboard size={18} /> <span>Dashboard</span></li>
          <li className="menu-item"><Users size={18} /> <span>Users Portal</span></li>
          <li className="menu-item"><Building2 size={18} /> <span>Properties</span></li>
          <li className="menu-item"><UserCheck size={18} /> <span>Manage Agents</span></li>
          <li className="menu-item"><FileCheck2 size={18} /> <span>Approvals</span></li>
          <li className="menu-item"><AlertCircle size={18} /> <span>System Reports</span></li>
          <li className="menu-item"><Settings size={18} /> <span>Settings</span></li>
          <li className="menu-item logout-trigger"><LogOut size={18} /> <span>Logout</span></li>
        </ul>
      </aside>

      {/* RIGHT SIDE MAIN DASHBOARD */}
      <main className="admin-main-workspace">
        
        <header className="workspace-header">
          <h1>Admin Dashboard</h1>
          <p>Real-time control station and asset pipeline validation</p>
        </header>

        {/* STATS MATRIX - STRICT HORIZONTAL 4 CARDS ROW */}
        <div className="admin-stats-grid-row">
          
          <div className="admin-stat-card-box">
            <div className="stat-icon-wrapper blue-icon"><Users size={22} /></div>
            <div className="stat-text-meta">
              <h3>Total Users</h3>
              <p className="counter-val">120</p>
            </div>
          </div>

          <div className="admin-stat-card-box">
            <div className="stat-icon-wrapper teal-icon"><Building2 size={22} /></div>
            <div className="stat-text-meta">
              <h3>Total Properties</h3>
              <p className="counter-val">85</p>
            </div>
          </div>

          <div className="admin-stat-card-box">
            <div className="stat-icon-wrapper gold-icon"><UserCheck size={22} /></div>
            <div className="stat-text-meta">
              <h3>Total Agents</h3>
              <p className="counter-val">20</p>
            </div>
          </div>

          <div className="admin-stat-card-box">
            <div className="stat-icon-wrapper red-icon"><FileCheck2 size={22} /></div>
            <div className="stat-text-meta">
              <h3>Pending Approvals</h3>
              <p className="counter-val urgent-color">8</p>
            </div>
          </div>

        </div>

        {/* TWO COLUMN LOWER LAYOUT GRID */}
        <div className="dashboard-lower-split-row">
          
          {/* Recent Activities Section */}
          <div className="admin-content-card activity-panel">
            <h2>Recent Operations</h2>
            <div className="activity-stream-timeline">
              <div className="stream-item">
                <span className="stream-time-stamp">Just Now</span>
                <p><strong>Ali Khan</strong> added a new property in Regi Model Town</p>
              </div>
              <div className="stream-item">
                <span className="stream-time-stamp">12 mins ago</span>
                <p><strong>Ahmad Khan</strong> registered as a verified commercial agent</p>
              </div>
              <div className="stream-item">
                <span className="stream-time-stamp">1 hr ago</span>
                <p>System Administrator approved premium listing ID #8490</p>
              </div>
            </div>
          </div>

          {/* Pending Approvals Table/List */}
          <div className="admin-content-card approval-panel">
            <h2>Pending Verifications</h2>
            <div className="approval-rows-stack">
              
              <div className="premium-approval-row-item">
                <div className="approval-meta-details">
                  <span className="item-title-text">5 Marla Luxury House</span>
                  <span className="item-subtitle-tag">Hayatabad, Phase 6</span>
                </div>
                <div className="approval-action-triggers">
                  <button className="action-btn-approve"><Check size={16} /> <span>Approve</span></button>
                  <button className="action-btn-reject"><X size={16} /> <span>Reject</span></button>
                </div>
              </div>

              <div className="premium-approval-row-item">
                <div className="approval-meta-details">
                  <span className="item-title-text">10 Marla Commercial Plot</span>
                  <span className="item-subtitle-tag">Main Ring Road Sector</span>
                </div>
                <div className="approval-action-triggers">
                  <button className="action-btn-approve"><Check size={16} /> <span>Approve</span></button>
                  <button className="action-btn-reject"><X size={16} /> <span>Reject</span></button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Admin;
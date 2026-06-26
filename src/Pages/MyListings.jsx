import { useState } from "react";
import "./my-listings.css";
import { Edit2, Trash2, MapPin, Building2, PlusCircle, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

function MyListings() {
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "5 Marla House",
      location: "Hayatabad",
      price: "1.2 Crore",
      status: "Active",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "10 Marla Plot",
      location: "Ring Road",
      price: "80 Lac",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Commercial Shop",
      location: "Saddar",
      price: "2 Crore",
      status: "Active",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80"
    }
  ]);

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this listing permanently?")) {
      setListings(listings.filter(item => item.id !== id));
    }
  }

  function handleEdit() {
    alert("Edit management pipeline panel coming soon");
  }

  return (
    <div className="premium-listings-canvas">
      <div className="listings-content-container">
        
        {/* DASHBOARD ACTIONS HEADER */}
        <header className="listings-dashboard-header">
          <div>
            <h1 className="listings-main-title">
              My Property <span className="gold-highlight">Listings</span>
            </h1>
            <p className="listings-subtitle">Manage, modify, or track your live assets marketplace status across Peshawar.</p>
          </div>

          <Link to="/add-property" className="add-listing-trigger-btn">
            <PlusCircle size={18} />
            <span>Add New Property</span>
          </Link>
        </header>

        <div className="listings-title-divider"></div>

        {/* CONDITIONALS CONTENT MATRIX GRID */}
        {listings.length === 0 ? (
          <div className="empty-listings-state-box">
            <Building2 size={48} className="empty-building-icon" />
            <h3>No Live Inventory Found</h3>
            <p>You haven't listed any commercial or residential properties yet.</p>
            <Link to="/add-property" className="empty-state-cta">Create First Listing</Link>
          </div>
        ) : (
          <div className="listings-grid-wrapper">
            <div className="grid-layout-indicator">
              <LayoutGrid size={16} />
              <span>Active Workspace Grid ({listings.length})</span>
            </div>

            {/* STRICT HORIZONTAL ROW (3 COLUMNS) */}
            <div className="premium-listings-grid-matrix">
              {listings.map((item) => (
                <article className="premium-listing-item-card" key={item.id}>
                  
                  {/* IMAGE SHIELD BLOCK */}
                  <div className="card-image-thumbnail-frame">
                    <img src={item.image} alt={item.title} className="card-img-core" />
                    <span className={`status-badge-tag ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>

                  {/* INFO TEXT BLOCKS */}
                  <div className="card-text-details-zone">
                    <h2 className="card-listing-title">{item.title}</h2>
                    
                    <div className="card-meta-row">
                      <div className="card-meta-item">
                        <MapPin size={14} className="teal-icon-accent" />
                        <span>{item.location}, Peshawar</span>
                      </div>
                    </div>

                    <div className="card-price-row-divider">
                      <span className="price-label">Valuation</span>
                      <p className="price-tag-value">PKR {item.price}</p>
                    </div>

                    {/* CONTROL MODIFIER BUTTONS ROW */}
                    <div className="card-control-actions-row">
                      <button className="control-btn-edit" onClick={handleEdit}>
                        <Edit2 size={14} />
                        <span>Edit</span>
                      </button>
                      
                      <button className="control-btn-delete" onClick={() => handleDelete(item.id)}>
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>

                  </div>

                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default MyListings;
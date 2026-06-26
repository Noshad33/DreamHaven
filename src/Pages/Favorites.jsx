import { useEffect, useState } from "react";
import PropertyCard from "../Components/PropertyCard";
import { Heart, ArrowLeft, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="premium-favorites-canvas">
      <div className="favorites-content-container">
        
        {/* TOP DYNAMIC CONTROLS HEADER */}
        <header className="favorites-dashboard-header">
          <div className="fav-header-left">
            <Link to="/dashboard" className="back-portal-link">
              <ArrowLeft size={16} />
              <span>Back to Portal</span>
            </Link>
            <h1 className="fav-main-title">
              My Saved <span className="gold-highlight">Favorites</span>
            </h1>
          </div>

          <div className="fav-counter-badge-box">
            <Heart size={18} fill="#ef4444" color="#ef4444" />
            <span>{favorites.length} Saved Assets</span>
          </div>
        </header>

        <div className="fav-title-divider"></div>

        {/* CONDITIONALS CONTROLS GRID */}
        {favorites.length === 0 ? (
          <div className="empty-favorites-card-zone">
            <div className="empty-heart-circle">
              <Heart size={36} className="heart-pulse-icon" />
            </div>
            <h3>No Favorite Properties Yet</h3>
            <p>Explore real estate options across Peshawar and tap the heart icon to save listings here.</p>
            <Link to="/properties" className="explore-properties-btn">
              Browse Properties
            </Link>
          </div>
        ) : (
          <div className="favorites-horizontal-grid-wrapper">
            <div className="fav-grid-layout-indicator">
              <LayoutGrid size={16} />
              <span>Personal Collection Shelf</span>
            </div>

            <div className="premium-cards-grid-matrix">
              {favorites.map((item) => (
                <div key={item.id} className="fav-card-motion-wrapper">
                  <PropertyCard data={item} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Favorites;
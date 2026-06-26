import "./PropertyCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bed, Bath, Square, Heart } from "lucide-react"; // Bed2 ko Bed se badal diya fix karne k liye

function PropertyCard({ data }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.find((item) => item.id === data.id);
    if (exists) {
      setSaved(true);
    }
  }, [data.id]);

  function handleFavorite(e) {
    e.preventDefault();
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!saved) {
      favorites.push(data);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setSaved(true);
    } else {
      favorites = favorites.filter((item) => item.id !== data.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setSaved(false);
    }
  }

  return (
    <div className="lovable-property-card">
      
      {/* 1. IMAGE FRAME WITH FLOATING BADGES */}
      <div className="card-image-wrapper">
        <img src={data.image} alt={data.title} className="premium-card-img" />
        
        {/* Left Side Tag: FOR SALE / FOR RENT */}
        <span className="badge-status badge-sale">
          {data.purpose === "rent" ? "FOR RENT" : "FOR SALE"}
        </span>

        {/* Right Side Tag: house / apartment */}
        <span className="badge-type">
          {data.type || "house"}
        </span>

        {/* Heart Icon Toggle */}
        <button className="floating-fav-action" onClick={handleFavorite}>
          <Heart size={18} fill={saved ? "#ef4444" : "transparent"} stroke={saved ? "#ef4444" : "#1e293b"} />
        </button>
      </div>

      {/* 2. BODY CONTENT */}
      <div className="premium-card-content">
        
        <h4 className="premium-card-price">{data.price}</h4>
        <h3 className="premium-card-title">{data.title}</h3>
        
        <p className="premium-card-location">
          <span>📍</span> {data.location}
        </p>

        {/* 3. PROPERTY AMENITIES (Beds, Baths, Sqft) */}
        <div className="premium-amenities-footer">
          <div className="amenity-pill">
            <Bed size={16} />
            <span>{data.beds || 4}</span>
          </div>
          <div className="amenity-pill">
            <Bath size={16} />
            <span>{data.baths || 3}</span>
          </div>
          <div className="amenity-pill">
            <Square size={14} />
            <span>{data.area || "2250 sqft"}</span>
          </div>
        </div>

        {/* 4. ACTIONS (Buttons) */}
        <div className="premium-card-actions-wrapper">
          <Link to={`/property/${data.id}`} className="premium-view-btn">
            View Details
          </Link>
          <Link to={`/contact-seller/${data.id}`} className="premium-contact-btn">
            Contact Seller
          </Link>
        </div>

      </div>

    </div>
  );
}

export default PropertyCard;
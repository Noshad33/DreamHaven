import { useEffect, useState } from "react";
import "./Properties.css"; 
import { useSearchParams } from "react-router-dom";
import PropertyCard from "../Components/PropertyCard";
import properties from "../data/properties";
import { Search, MapPin, Building2, SlidersHorizontal } from "lucide-react";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL parameters ya default empty states load karein
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get("location") || "");
  const [selectedType, setSelectedType] = useState(searchParams.get("type") || "");
  const [searchQuery, setSearchQuery] = useState("");

  // Agar URL searchParams change hon to local states sync hon
  useEffect(() => {
    setSelectedLocation(searchParams.get("location") || "");
    setSelectedType(searchParams.get("type") || "");
  }, [searchParams]);

  // Dropdowns change hone par URL aur state sath update karne ka method
  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);

    if (key === "location") setSelectedLocation(value);
    if (key === "type") setSelectedType(value);
  };

  // Multiple advanced filters engine logic
  const filteredProperties = properties.filter((item) => {
    const locationMatch = !selectedLocation || item.location.toLowerCase() === selectedLocation.toLowerCase();
    const typeMatch = !selectedType || item.type.toLowerCase() === selectedType.toLowerCase();
    
    // Text search bar input logic (Title or Location text matching)
    const textMatch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    return locationMatch && typeMatch && textMatch;
  });

  return (
    <div className="properties-page-container">
      
      {/* HEADER SECTION */}
      <div className="properties-header-section">
        <h2 className="properties-main-title">
          Available <span className="gold-highlight">Properties</span>
        </h2>
        <p className="properties-subtitle">Explore elite residential plots, luxury homes, and commercial spaces in Peshawar.</p>
        <div className="properties-gold-divider"></div>
      </div>

      {/* ADVANCED DYNAMIC SEARCH & FILTER PANEL */}
      <div className="premium-filter-bar-card">
        <div className="filter-bar-grid-system">
          
          {/* Text Input Search */}
          <div className="filter-input-element">
            <label><Search size={14} /> <span>Search Keyword</span></label>
            <input 
              type="text" 
              placeholder="e.g. 5 Marla, DHA, Commercial..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="filter-search-field"
            />
          </div>

          {/* Location Dropdown */}
          <div className="filter-input-element">
            <label><MapPin size={14} /> <span>Select Sector</span></label>
            <select 
              value={selectedLocation} 
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="filter-dropdown-selector"
            >
              <option value="">All Locations</option>
              <option value="Hayatabad">Hayatabad</option>
              <option value="Saddar">Saddar</option>
              <option value="Ring Road">Ring Road</option>
              <option value="Regi Model Town">Regi Model Town</option>
              <option value="DHA">DHA Peshawar</option>
            </select>
          </div>

          {/* Property Type Dropdown */}
          <div className="filter-input-element">
            <label><Building2 size={14} /> <span>Property Type</span></label>
            <select 
              value={selectedType} 
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="filter-dropdown-selector"
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Plot">Plot</option>
              <option value="Shop">Commercial Shop</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          {/* Reset Action Button */}
          <div className="filter-action-block">
            {(selectedLocation || selectedType || searchQuery) && (
              <button 
                className="filter-clear-trigger"
                onClick={() => {
                  setSearchParams({});
                  setSelectedLocation("");
                  setSelectedType("");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </button>
            )}
          </div>

        </div>
      </div>

      {/* FILTER METRICS COUNTER */}
      <div className="filter-results-counter">
        <SlidersHorizontal size={14} />
        <span>Showing {filteredProperties.length} Real Estate Matches</span>
      </div>

      {/* STRICT HORIZONTAL GRID ENGINE */}
      <div className="properties-horizontal-row">
        {filteredProperties.length > 0 ? (
          <div className="premium-properties-matrix-grid">
            {filteredProperties.map((item) => (
              <div key={item.id} className="properties-card-column-wrapper">
                <PropertyCard data={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="properties-no-data">
            <Building2 size={40} className="no-data-icon" />
            <h3>No Properties Found</h3>
            <p>Try resetting your selection parameters or expanding your keyword terms criteria.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Properties;
import { useState } from "react";
import "./AddProperty.css";

function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "",
    area: "",
    description: "",
    image: "",
    contact: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Property Added Successfully");
  }

  return (
    <div className="add-property-page-wrapper">
      <div className="form-card-container">
        
        <div className="form-header-zone">
          <h1>Add New <span className="gold-highlight">Property</span></h1>
          <p>List your estate inside DreamHaven portal pipeline</p>
          <div className="form-title-divider"></div>
        </div>

        <form onSubmit={handleSubmit} className="premium-property-form">
          
          {/* HORIZONTAL ROW 1 */}
          <div className="form-input-row">
            <div className="input-field-group">
              <label>Property Title</label>
              <input
                type="text"
                name="title"
                placeholder="e.g., 5 Marla Luxury House"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="input-field-group">
              <label>Location / Sector</label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Regi Model Town, Peshawar"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* HORIZONTAL ROW 2 */}
          <div className="form-input-row">
            <div className="input-field-group">
              <label>Price (PKR)</label>
              <input
                type="text"
                name="price"
                placeholder="e.g., 1.5 Crore"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field-group">
              <label>Property Type</label>
              <select name="type" onChange={handleChange} required>
                <option value="">Select Type</option>
                <option value="House">House</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

          {/* HORIZONTAL ROW 3 */}
          <div className="form-input-row">
            <div className="input-field-group">
              <label>Area Size</label>
              <input
                type="text"
                name="area"
                placeholder="e.g., 5 Marla / 1 Kanal"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field-group">
              <label>Contact Number</label>
              <input
                type="text"
                name="contact"
                placeholder="e.g., +92 300 1234567"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* FULL WIDTH INPUTS */}
          <div className="input-field-group full-width-field">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste direct property banner link here"
              onChange={handleChange}
            />
          </div>

          <div className="input-field-group full-width-field">
            <label>Detailed Description</label>
            <textarea
              name="description"
              placeholder="Describe bedroom layout, utilities, facilities, and unique sale advantages..."
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          {/* SUBMIT TRIGGER */}
          <div className="form-action-row">
            <button type="submit" className="submit-property-btn">
              Publish Property Listing
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default AddProperty;
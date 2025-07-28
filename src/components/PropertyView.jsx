import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './property-detail.css'; // reuse same styling

function PropertyView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { property } = location.state || {};

  if (!property) {
    return <div style={{ padding: "2rem" }}>❌ No property data found.</div>;
  }

  const mapQuery = encodeURIComponent(property.location);

  return (
    <div className="container">
      <h2 className="main-heading">Property Overview</h2>
      <div className="property-card" style={{ maxWidth: 800, margin: 'auto' }}>
        <img src={property.previewImage} alt={property.title} style={{ width: '100%', borderRadius: '10px' }} />
        <h3>{property.title}</h3>
        <p><strong>Area:</strong> {property.area} sq ft</p>
        <p><strong>Price:</strong> ₹{property.price}</p>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Description:</strong> {property.description}</p>
        <p><strong>Contact:</strong> {property.contact}</p>

        {/* ✅ Google Map */}
        <div className="map-container" style={{ marginTop: '20px' }}>
          <iframe
            title="Property Location"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0, borderRadius: '10px' }}
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${mapQuery}`}
            allowFullScreen
          ></iframe>
        </div>

        {/* ✅ Certification */}
        {property.certification && (
          <div className="certification-link" style={{ marginTop: '15px' }}>
            <h4>📄 Property Certification</h4>
            <a href={property.certification} target="_blank" rel="noopener noreferrer">
              View Certification Document
            </a>
          </div>
        )}

        <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default PropertyView;

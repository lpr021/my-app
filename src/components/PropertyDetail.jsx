import React, { useState, useEffect } from 'react';
import './property-detail.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { uploadProperty, fetchAllProperties } from '../api';

function PropertyDetail() {
  const [role, setRole] = useState('buyer');
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({
    title: '',
    area: '',
    price: '',
    location: '',
    contact: '',
    description: '',
    previewImage: '',
    certification: '' // ✅ NEW FIELD
  });

  // ✅ Always fetch properties for buyers (including after seller uploads)
  const loadProperties = () => {
    fetchAllProperties()
      .then(data => setProperties(data))
      .catch(err => console.error("❌ Error fetching properties:", err));
  };

  useEffect(() => {
    if (role === 'buyer') {
      loadProperties();
    }
  }, [role]);

  // ✅ Always load properties on first mount so buyers see them immediately
  useEffect(() => {
    loadProperties();
  }, []);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, previewImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadProperty(form); // ✅ Upload property
      alert('✅ Property uploaded successfully');
      setForm({
        title: '',
        area: '',
        price: '',
        location: '',
        contact: '',
        description: '',
        previewImage: '',
        certification: ''
      });
      loadProperties(); // ✅ Refresh list without resetting role
    } catch (err) {
      console.error("❌ Upload failed:", err);
      alert('❌ Upload failed');
    }
  };

  return (
    <div className="container">
      <h1 className="main-heading">Property Details</h1>

      <div className="role-switch">
        <button
          onClick={() => setRole('buyer')}
          className={`role-button ${role === 'buyer' ? 'active-role' : ''}`}
        >
          Buyer
        </button>
        <button
          onClick={() => setRole('seller')}
          className={`role-button ${role === 'seller' ? 'active-role' : ''}`}
        >
          Seller
        </button>
      </div>

      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
        <div><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Slide 1" /></div>
        <div><img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="Slide 2" /></div>
        <div><img src="https://c4.wallpaperflare.com/wallpaper/575/667/599/trees-design-house-lawn-wallpaper-preview.jpg" alt="Slide 3" /></div>
      </Carousel>

      <input type="text" placeholder="Search for properties..." className="search-bar" />

      {role === 'seller' && (
        <div className="seller-form-container">
          <form className="seller-form" onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" value={form.title} onChange={handleFormChange} required />
            <input name="area" placeholder="Area (sq ft)" value={form.area} onChange={handleFormChange} required />
            <input name="price" placeholder="Price (₹)" value={form.price} onChange={handleFormChange} required />
            <input name="location" placeholder="Location" value={form.location} onChange={handleFormChange} required />
            <input name="contact" placeholder="Contact" value={form.contact} onChange={handleFormChange} required />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleFormChange} rows="3" required />
            <input type="file" accept="image/*" onChange={handleImageUpload} required />
            <input
              name="certification"
              placeholder="Certification Link (optional)"
              value={form.certification}
              onChange={handleFormChange}
            />
            <button type="submit">Upload Property</button>
          </form>
        </div>
      )}

      {role === 'buyer' && (
        <div className="property-list">
          {properties.map((prop, index) => {
            return (
              <div key={index} className="property-card">
                <img src={prop.previewImage} alt={prop.title} />
                <h3>{prop.title}</h3>
                <p>Area: {prop.area} sq ft</p>
                <p>Price: ₹{prop.price}</p>
                <p>Location: {prop.location}</p>
                <p>{prop.description}</p>
                <p>Contact: {prop.contact}</p>

                {/* ✅ Link to detail page */}
                <Link to={`/property/${prop._id}`} state={{ property: prop }}>
                  View Details
                </Link>

                {/* ✅ Optional Certification */}
                {prop.certification && (
                  <div className="certification-link" style={{ marginTop: '10px' }}>
                    <a href={prop.certification} target="_blank" rel="noopener noreferrer">
                      📄 View Certification
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PropertyDetail;

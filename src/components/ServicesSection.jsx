import React, { useState } from 'react';
import './ServicesSection.css';

const serviceData = [
  { id: 1, category: 'BuySellInvestLease', title: 'Buy', description: 'Helping you purchase the perfect property hassle-free.' },
  { id: 2, category: 'BuySellInvestLease', title: 'Sell', description: 'Get the best value for your property with expert support.' },
  { id: 3, category: 'BuySellInvestLease', title: 'Invest', description: 'Find profitable investment properties tailored to your goals.' },
  { id: 4, category: 'BuySellInvestLease', title: 'Lease', description: 'Secure lease agreements with transparency and ease.' },
  { id: 5, category: 'NRI', title: 'NRI Services', description: 'End-to-end real estate assistance for NRIs.' },
  { id: 6, category: 'Management', title: 'Property Management', description: 'Efficient property maintenance and tenant management.' },
  { id: 7, category: 'Consultation', title: 'Real Estate Consultation', description: 'Expert advice on buying, selling, and legal procedures.' },
];

const categories = ['All', 'BuySellInvestLease', 'NRI', 'Management', 'Consultation'];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('BuySellInvestLease');
  const [showModal, setShowModal] = useState(false);

  const filteredServices =
    selectedCategory === 'All'
      ? serviceData
      : serviceData.filter((item) => item.category === selectedCategory);

  const handleCardClick = (service) => {
    if (service.title === 'Real Estate Consultation') {
      setShowModal(true);
    }
  };

  return (
    <div className="services-section">
      <h2 className="section-title">Our Real Estate Services</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'BuySellInvestLease' ? 'Buy/Sell/Invest/Lease' : cat}
          </button>
        ))}
      </div>

      <div className="services-cards">
        {filteredServices.map((service) => (
          <div
            className={`service-card ${service.title === 'Real Estate Consultation' ? 'clickable' : ''}`}
            key={service.id}
            onClick={() => handleCardClick(service)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book a Free Consultation</h2>
            <form className="consultation-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Describe your requirement..." rows="4"></textarea>
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

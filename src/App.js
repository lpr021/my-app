import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Only these, no BrowserRouter

import Loader from './components/Loader';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import PropertyListing from './components/PropertyListings';
import BlogSection from './components/BlogSection';
import AboutPage from './components/AboutPage';
import ToolsPage from './components/ToolsPage';
import ServicesSection from './components/ServicesSection';
import BrochureDetailPage from './components/BrochureDetailPage';
import PropertyDetail from './components/PropertyDetail'; // ✅ Match actual filename

import './App.css';
import './components/Loader.css';
import './components/property-detail.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }

  const sampleProperties = [
    {
      title: "2BHK Flat in Jubilee Hills",
      location: "Hyderabad",
      price: "75,00,000",
      previewImage: "https://via.placeholder.com/600x400?text=Property+Image",
      description: "Spacious 2BHK apartment in a prime area with all amenities.",
      area: 1200,
      contact: "9988776655",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property-listings" element={<PropertyListing />} />
        <Route path="/property/:id" element={<PropertyDetail properties={sampleProperties} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/brochure" element={<BrochureDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

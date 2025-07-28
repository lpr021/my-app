import React, { useState } from 'react';
import './HomePage.css';

import SearchBar from './SearchBar';
import FeaturedListings from './FeaturedListings';
import AboutUs from './AboutUs';
import CallToAction from './CallToAction';
import TestimonialSlider from './TestimonialSlider';
import WhyChooseUs from './WhyChooseUs';
import BrochureSection from './BrochureSection';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage">
      {/* View More Button (Top Right) */}
      <button className="view-more-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ View More
      </button>

      {/* Side Menu */}
      {menuOpen && (
        <div className="menu-panel">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✖
          </button>

          <a href="/property-listings">🏠 Property Listings</a>
          <a href="/property/0">📋 Property Detail</a>

          <a href="/about">👤 About Us</a>
          <a href="/services">🛠 Services</a>
          <a href="/blog">📝 Blog</a>
          <a href="/contact">📞 Contact</a>
          <a href="/tools">🧰 Tools</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay" />

        <h1 className="luxury-heading">
          {Array.from("Welcome to Value Invest Zone").map((char, index) => (
            <span key={index} className="letter" style={{ animationDelay: `${index * 70}ms` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p className="luxury-subtitle">
          {Array.from("Your Perfect Investment Partner").map((char, index) => (
            <span key={index} className="letter" style={{ animationDelay: `${(index + 40) * 70}ms` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        <SearchBar />
      </section>

      {/* Main Sections */}
      <FeaturedListings />
      <AboutUs />
      <WhyChooseUs />
      <BrochureSection />
      <TestimonialSlider />
      <CallToAction />
    </div>
  );
}

export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./BrochureSection.css";

const BrochureSection = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate("/brochure"); // 👈 this will go to your brochure details page
  };

  return (
    <section className="brochure-section">
      <div className="brochure-container">
        <h2>Download Our Brochure</h2>
        <p>Explore premium properties, investment opportunities, and exclusive insights — all in one elegant brochure.</p>
        <button className="download-btn" onClick={handleDownloadClick}>
          📥 View & Download Brochure
        </button>
      </div>
    </section>
  );
};

export default BrochureSection;

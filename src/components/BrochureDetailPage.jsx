import React from "react";
import "./BrochureDetailPage.css";

const BrochureDetailPage = () => {
  return (
    <div className="brochure-detail-page">
      <h1>Your Property Investment Brochure</h1>
      <p>Here’s your detailed brochure. Download and explore all available listings & insights.</p>
      <a
        href="/assets/your-brochure.pdf"
        download
        className="actual-download-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        📎 Click to Download PDF
      </a>
    </div>
  );
};

export default BrochureDetailPage;

import React from "react";
import "./AboutPage.css"; // CSS file for styling
import teamImage from "../assets/photo.jpg"; // ✅ Replace with real image
import certImage from "../assets/pho.jpeg"; // ✅ Replace with real image

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          At <strong>Value Invest Zone</strong>, we started with a simple mission: to make property investment accessible, transparent, and rewarding for everyone.
          What began as a small idea among passionate real estate professionals has now grown into a trusted brand across Vijayawada.
          <br /><br />
          Our journey is driven by values, community, and the belief that everyone deserves the perfect home or investment opportunity.
        </p>
      </section>

      <section className="team-founders">
        <h2>Meet Our Team</h2>
        <div className="team-box">
          <img src={teamImage} alt="Founders" />
          <div className="team-info">
            <h3>Ravi Kumar & Sneha Sharma</h3>
            <p>
              Our founders bring over 15 years of combined experience in real estate, finance, and technology.
              Their passion for helping people find their dream property is the core reason behind the success of Value Invest Zone.
              <br /><br />
              Today, their vision continues through our dedicated and customer-centric team.
            </p>
          </div>
        </div>
      </section>

      <section className="certifications">
        <h2>Our Certifications</h2>
        <div className="cert-list">
          <div className="cert-item">
            <img src={certImage} alt="Certification" />
            <p>RERA Registered</p>
          </div>
          <div className="cert-item">
            <img src={certImage} alt="Certification" />
            <p>ISO 9001:2015</p>
          </div>
          <div className="cert-item">
            <img src={certImage} alt="Certification" />
            <p>Certified Property Consultants</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

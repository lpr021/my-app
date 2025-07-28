import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>SEND AN ENQUIRY</h2>
          <p>Please submit your details, we will get back to you soon...</p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Mobile" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right: Address and Info */}
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <p>
              D.No. 60, Opp: Siddhartha Hotel Management Gate,<br />
              7-10, Polyclinic Rd, Siddhartha Nagar, 4th Line,<br />
              Vijayawada – 520008
            </p>
          </div>

          <div className="info-item">
            <span className="icon">📞</span>
            <p>+91 81259 13666</p>
          </div>

          <div className="info-item">
            <span className="icon">📧</span>
            <p>valueinvestzone9@gmail.com</p>
          </div>

          {/* Google Map Embed */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=16.5045,80.6405&z=15&output=embed"
              loading="lazy"
              allowFullScreen
              title="VIZ Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-heading">Ready to Book a Site Visit?</h2>
      <p className="cta-subtext">Connect with us instantly on WhatsApp or Schedule a call!</p>
      <div className="cta-buttons">
        <a
          href="https://wa.me/918125913666"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn whatsapp"
        >
          WhatsApp Now
        </a>
        <a
          href="tel:+918125913666"
          className="cta-btn call"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
import React from 'react';
import './WhyChooseUs.css';

const features = [
  { icon: "💼", title: "Trusted Advisors", desc: "Years of real estate experience." },
  { icon: "🏗", title: "Prime Listings", desc: "Verified and premium properties." },
  { icon: "📈", title: "Smart Investment", desc: "Tailored strategies to grow your wealth." },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="why-title">Why Choose Us?</h2>
      <div className="why-cards">
        {features.map((item, idx) => (
          <div className="why-card" key={idx} style={{ animationDelay: `${idx * 200}ms` }}>
            <span className="why-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

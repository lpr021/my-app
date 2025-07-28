import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: "Ravi K.",
    feedback: "Excellent service and trustworthy team. Highly recommend them.",
  },
  {
    name: "Sneha R.",
    feedback: "They helped me find my dream home in Vijayawada. Great experience!",
  },
  {
    name: "Arun M.",
    feedback: "Professional, responsive, and truly care about customer satisfaction.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">“{testimonial.feedback}”</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

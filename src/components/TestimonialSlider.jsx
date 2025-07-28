import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const testimonials = [
  {
    name: "Rahul Verma",
    position: "Investor",
    quote: "Value Invest Zone helped me find the perfect property in just a few days. Truly professional!",
  },
  {
    name: "Sneha Reddy",
    position: "NRI Buyer",
    quote: "Amazing support throughout the buying process. I felt confident and secure.",
  },
  {
    name: "Siddharth Kumar",
    position: "Business Owner",
    quote: "Great listings, smooth transactions. Highly recommended!",
  },
  {
    name: "Priya Nair",
    position: "First-Time Buyer",
    quote: "Beautiful user experience and expert advice. I love this platform!",
  },
];

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-card">
        <p className="testimonial-quote">“{testimonials[current].quote}”</p>
        <h4 className="testimonial-name">— {testimonials[current].name}</h4>
        <p className="testimonial-position">{testimonials[current].position}</p>
      </div>
    </section>
  );
}

export default TestimonialSlider;

import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Professional Stylist',
    comment: 'The quality of weaves I found here is unmatched. My clients are always thrilled with the results!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michaela Williams',
    role: 'Makeup Artist',
    comment: 'Their beauty products have become staples in my kit. The pigmentation and longevity are incredible.',
    rating: 5
  },
  {
    id: 3,
    name: 'David Thompson',
    role: 'Salon Owner',
    comment: 'The professional services we offer using products from this site have increased our client satisfaction by 40%.',
    rating: 4
  },
  {
    id: 4,
    name: 'Jessica Parker',
    role: 'Frequent Customer',
    comment: 'I always feel empowered and beautiful after using their products and services. Highly recommend!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-header">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
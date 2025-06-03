import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Professional Stylist',
    comment: 'The quality of weaves I found here is unmatched. My clients are always thrilled with the results!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg' 
  },
  {
    id: 2,
    name: 'Michaela Williams',
    role: 'Makeup Artist',
    comment: 'Their beauty products have become staples in my kit. The pigmentation and longevity are incredible.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg' 
  },
  {
    id: 3,
    name: 'David Thompson',
    role: 'Salon Owner',
    comment: 'The professional services we offer using products from this site have increased our client satisfaction by 40%.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg' 
  },
  {
    id: 4,
    name: 'Jessica Parker',
    role: 'Frequent Customer',
    comment: 'I always feel empowered and beautiful after using their products and services. Highly recommend!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg' 
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div 
      className="testimonials-section" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="section-header">What Our Clients Say</h2>
      
      <div className="testimonial-carousel">
        <button className="carousel-arrow left" onClick={prev}></button>

        <div className="testimonial-card">
          <div className="testimonial-header">
            <img 
              src={current.avatar} 
              alt={current.name}
              className="testimonial-avatar"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/100';  // Fallback image
              }}
            />
            <div className="testimonial-author">
              <h4>{current.name}</h4>
              <p>{current.role}</p>
            </div>
          </div>
          <div className="testimonial-rating">
            {[...Array(current.rating)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <p className="testimonial-comment">"{current.comment}"</p>
        </div>

        <button className="carousel-arrow right" onClick={next}></button>
      </div>

      {/* Optional Dots Indicator */}
      <div className="carousel-dots">
        {testimonials.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${idx === index ? 'active' : ''}`}
            onClick={() => setIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
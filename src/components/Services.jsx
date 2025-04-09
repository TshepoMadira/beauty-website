// src/components/Services.js
import React from 'react';
import './Service.css'

const Services = () => {
  const services = [
    { id: 1, name: 'Hair Installation', description: 'Expert full head weave installation with high-quality hair.', price: 150, duration: '2 hours' },
    { id: 2, name: 'Nail Installation', description: 'Full set of nails including manicure, design, and finish.', price: 50, duration: '1 hour' },
    { id: 3, name: 'Hair Products', description: 'Premium quality hair products including shampoos, conditioners, and treatments.', price: 'Varies', duration: 'N/A' },
    { id: 4, name: 'Makeup Application', description: 'Professional makeup application for special events, photoshoots, and more.', price: 80, duration: '1 hour' },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-price">{service.price === 'Varies' ? 'Contact us for pricing' : `$${service.price}`}</p>
            <p className="service-duration">Duration: {service.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

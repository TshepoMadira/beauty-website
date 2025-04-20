// src/components/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    { id: 1, name: 'Hair Installation', description: 'Expert full head weave installation with high-quality hair.', price: 150, duration: '2 hours' },
    { id: 2, name: 'Nail Installation', description: 'Full set of nails including manicure, design, and finish.', price: 50, duration: '1 hour' },
    { id: 3, name: 'Hair Products', description: 'Premium quality hair products including shampoos, conditioners, and treatments.', price: 'Varies', duration: 'N/A' },
    { id: 4, name: 'Makeup Application', description: 'Professional makeup application for special events, photoshoots, and more.', price: 80, duration: '1 hour' },
  ];

  const handleBookAppointment = (service) => {
    if (service.price === 'Varies') {
      // Navigate to contact page if price varies
      navigate('/contact');
    } else {
      // Navigate to booking options with service details
      navigate('/booking', { state: { service } });
    }
  };

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
            <button 
              className="book-button"
              onClick={() => handleBookAppointment(service)}
            >
              {service.price === 'Varies' ? 'Contact Us' : 'Book Appointment'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
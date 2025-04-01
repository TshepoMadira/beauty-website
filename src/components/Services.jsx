// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    { id: 1, name: 'Hair Installation', description: 'Full head weave installation', price: 150 },
    { id: 2, name: 'Nails Installation', description: 'Full set of nails', price: 50 },
    // Add more services here
  ];

  return (
    <div>
      <h2>Services</h2>
      <div>
        {services.map(service => (
          <div key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
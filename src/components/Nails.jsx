// src/components/Nails.js
import React from 'react';

const Nails = () => {
  const nails = [
    { id: 1, name: 'Nails 1', description: 'Gorgeous nails', price: 30 },
    { id: 2, name: 'Nails 2', description: 'Classic nails', price: 25 },
    // Add more nails here
  ];

  return (
    <div>
      <h2>Nails</h2>
      <div>
        {nails.map(nail => (
          <div key={nail.id}>
            <h3>{nail.name}</h3>
            <p>{nail.description}</p>
            <p>${nail.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nails;
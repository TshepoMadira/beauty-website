// src/components/Weaves.js
import React from 'react';

const Weaves = () => {
  const weaves = [
    { id: 1, name: 'Weave 1', description: 'Beautiful weave', price: 50 },
    { id: 2, name: 'Weave 2', description: 'Elegant weave', price: 60 },
    // Add more weaves here
  ];

  return (
    <div>
      <h2>Weaves</h2>
      <div>
        {weaves.map(weave => (
          <div key={weave.id}>
            <h3>{weave.name}</h3>
            <p>{weave.description}</p>
            <p>${weave.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weaves;
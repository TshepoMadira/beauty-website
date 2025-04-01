// src/components/HairProducts.js
import React from 'react';

const HairProducts = () => {
  const hairProducts = [
    { id: 1, name: 'Shampoo', description: 'Refreshing formula', price: 10 },
    { id: 2, name: 'Conditioner', description: 'Moisturizing formula', price: 12 },
    // Add more hair products here
  ];

  return (
    <div>
      <h2>Hair Products</h2>
      <div>
        {hairProducts.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairProducts;
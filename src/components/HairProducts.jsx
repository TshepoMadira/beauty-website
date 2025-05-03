import React from 'react';
import './HairProducts.css'; 

const HairProducts = ({ addToCart }) => {
  const hairProducts = [
    { id: 1, name: 'Comb Machine', description: 'Refreshing formula', price: 10, image: '../src\/assets\/images/comb.jpg' },
    { id: 2, name: 'Olive oil', description: 'Moisturizing formula', price: 12, image: '../src/assets/images/oliveoil.jpg' },
    { id: 3, name: 'Mixture of Products', description: 'Moisturizing formula', price: 12, image: '../src/assets/images/mixtureofproducts.jpg' },
    // Add more hair products here
  ];

  return (
    <div className="hair-products-container">
      <h2>Premium Hair Products</h2>
      <div className="products-grid">
        {hairProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairProducts;
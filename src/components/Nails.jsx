import React from 'react';
// import './Nails.css'; // Add styling if needed

const Nails = ({ addToCart }) => {
  const nails = [
    { id: 1, name: 'Nails 1', description: 'Gorgeous nails', price: 30, image: '/images/nails1.jpg' },
    { id: 2, name: 'Nails 2', description: 'Classic nails', price: 25, image: '/images/nails2.jpg' },
    // Add more nails here
  ];

  return (
    <div className="nails-container">
      <h2>Nail Services & Products</h2>
      <div className="nails-grid">
        {nails.map(nail => (
          <div key={nail.id} className="nail-card">
            <img src={nail.image} alt={nail.name} className="nail-image" />
            <h3>{nail.name}</h3>
            <p>{nail.description}</p>
            <p>${nail.price}</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(nail)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nails;
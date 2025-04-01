import React from 'react';
// import './Weaves.css'; // Add styling if needed

const Weaves = ({ addToCart }) => {
  const weaves = [
    { id: 1, name: 'Weave 1', description: 'Beautiful weave', price: 50, image: '/images/weave1.jpg' },
    { id: 2, name: 'Weave 2', description: 'Elegant weave', price: 60, image: '/images/weave2.jpg' },
    // Add more weaves here
  ];

  return (
    <div className="weaves-container">
      <h2>Our Weave Collection</h2>
      <div className="weaves-grid">
        {weaves.map(weave => (
          <div key={weave.id} className="weave-card">
            <img src={weave.image} alt={weave.name} className="weave-image" />
            <h3>{weave.name}</h3>
            <p>{weave.description}</p>
            <p>${weave.price}</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(weave)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weaves;
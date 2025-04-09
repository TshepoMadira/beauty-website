// src/pages/weaves/Brazilian.js
import React from 'react';
import './Weaves.css'; // Fixed filename spelling

const Brazilian = () => {
  return (
    <div className="weaves-page">
      <h1>Brazilian Weaves</h1>
      <div className="weaves-gallery">
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0002.jpg" 
              alt="Premium Brazilian Hair Weave" 
              className="weave-image"
            />
          </div>a
          <div className="weave-details">
            <h3>Premium Brazilian Hair</h3>
            <p>100% virgin human hair, soft and luxurious</p>
            <p className="price">R120.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0003.jpg" 
              alt="Brazilian Body Wave Weave" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>Brazilian Body Wave</h3>
            <p>Natural looking waves, perfect for any occasion</p>
            <p className="price">R135.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brazilian;
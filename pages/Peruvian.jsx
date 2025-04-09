// src/pages/weaves/Peruvian.js
import React from 'react';
import './Weaves.css'


const Peruvian = () => {
  return (
    <div className="weaves-page">
      <h1>Peruvian Weaves</h1>
      <div className="weaves-gallery">
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0004.jpg" 
              alt="Premium Peruvian Hair Weave" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>Premium Peruvian Hair</h3>
            <p>100% virgin human hair with natural thickness and volume</p>
            <p className="price">R140.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0005.jpg" 
              alt="Peruvian Straight Weave" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>Peruvian Straight</h3>
            <p>Silky straight texture that's perfect for sleek styles</p>
            <p className="price">R150.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peruvian;
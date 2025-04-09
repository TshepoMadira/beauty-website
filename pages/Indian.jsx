// src/pages/weaves/Indian.js
import React from 'react';
import './Weaves.css'

const Indian = () => {
  return (
    <div className="weaves-page">
      <h1>Indian Weaves</h1>
      <div className="weaves-gallery">
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0006.jpg" 
              alt="Premium Indian Hair Weave" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>Premium Indian Hair</h3>
            <p>100% virgin human hair with natural softness and shine</p>
            <p className="price">R140.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0007.jpg" 
              alt="Indian Straight Weave" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>Indian Straight</h3>
            <p>Silky smooth texture perfect for versatile styling</p>
            <p className="price">R150.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indian
// src/pages/weaves/Frontals.js
import React from 'react';
import './Weaves.css'

const Frontals = () => {
  return (
    <div className="weaves-page">
      <h1>Hair Frontals</h1>
      <div className="weaves-gallery">
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0008.jpg" 
              alt="Lace Frontal 13x4" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>13x4 Lace Frontal</h3>
            <p>High quality lace frontal with natural hairline for flawless installs</p>
            <p className="price">R350.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
        
        <div className="weave-item">
          <div className="image-container">
            <img 
              src="../src/assets/images/IMG-20250402-WA0009.jpg" 
              alt="360 Frontal" 
              className="weave-image"
            />
          </div>
          <div className="weave-details">
            <h3>360 Frontal</h3>
            <p>Full perimeter frontal for versatile styling and ponytails</p>
            <p className="price">R400.00</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontals;
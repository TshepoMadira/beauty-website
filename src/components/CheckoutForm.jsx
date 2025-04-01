// src/components/CheckoutForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';

const CheckoutForm = ({ onReturnToCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReturnToCart = () => {
    // If onReturnToCart prop is provided, use it (for in-component navigation)
    // Otherwise, use react-router navigation
    if (onReturnToCart) {
      onReturnToCart();
    } else {
      navigate('/cart');
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <button 
          onClick={handleReturnToCart} 
          className="return-to-cart-link"
        >
          ← Return to Cart
        </button>
      </div>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Card Number:
          <input 
            type="text" 
            name="cardNumber" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            pattern="\d{16}" 
            title="Please enter a 16-digit card number"
            required 
          />
        </label>
        <div className="card-details">
          <label>
            Expiry Date (MM/YY):
            <input 
              type="text" 
              name="expiryDate" 
              value={formData.expiryDate} 
              onChange={handleChange} 
              pattern="\d{2}/\d{2}" 
              title="Please enter in MM/YY format"
              required 
            />
          </label>
          <label>
            CVV:
            <input 
              type="text" 
              name="cvv" 
              value={formData.cvv} 
              onChange={handleChange} 
              pattern="\d{3}" 
              title="Please enter a 3-digit CVV"
              required 
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
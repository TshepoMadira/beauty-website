// src/components/CheckoutForm.js
import React, { useState } from 'react';

const CheckoutForm = () => {
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Card Number:
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
      </label>
      <label>
        Expiry Date:
        <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
      </label>
      <label>
        CVV:
        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
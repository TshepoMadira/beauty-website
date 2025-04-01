// src/components/Cart.js
import React, { useState } from 'react';
import './Cart.css';
import CheckoutForm from './CheckoutForm';

const Cart = ({ cartItems, removeFromCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {showCheckout ? (
            <CheckoutForm />
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p className="cart-item-description">{item.description}</p>
                      <p>${item.price} x {item.quantity}</p>
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button 
                  onClick={handleProceedToCheckout}
                  className="checkout-button"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
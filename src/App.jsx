// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CheckoutForm from './components/CheckoutForm';
import Weaves from './components/Weaves';
import Nails from './components/Nails';
import HairProducts from './components/HairProducts';
import Services from './components/Services';
import Contact from './components/Contact';
import Cart from './components/Cart'; // Import the Cart component

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove items from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Calculate total cart count
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route 
          path="/" 
          element={<ProductList addToCart={addToCart} />} 
        />
        <Route 
          path="/weaves" 
          element={<Weaves addToCart={addToCart} />} 
        />
        <Route 
          path="/nails" 
          element={<Nails addToCart={addToCart} />} 
        />
        <Route 
          path="/hair-products" 
          element={<HairProducts addToCart={addToCart} />} 
        />
        <Route 
          path="/services" 
          element={<Services addToCart={addToCart} />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/checkout" 
          element={<CheckoutForm cartItems={cartItems} />} 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
            />
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
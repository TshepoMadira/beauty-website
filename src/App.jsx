// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CheckoutForm from './components/CheckoutForm';
import Weaves from './components/Weaves';
import Nails from './components/Nails';
import HairProducts from './components/HairProducts';
import Services from './components/Services';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Brazilian from '../pages/Brazillian';
import Peruvian from '../pages/Peruvian';
import Indian from '../pages/Indian';
import Frontals from '../pages/Frontals';
import Auth from './components/Auth';
import ProductDetails from './components/ProductDetails';
import AllProducts from './components/AllProducts';
import Testimonials from './components/Testimonials';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <ProductList addToCart={addToCart} />
               
              </>
            } 
          />
          <Route path="/weaves" element={<Weaves addToCart={addToCart} />} />
          <Route path="/nails" element={<Nails addToCart={addToCart} />} />
          <Route path="/hair-products" element={<HairProducts addToCart={addToCart} />} />
          <Route path="/services" element={<Services addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:productId" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/products" element={<AllProducts />} />

          {/* Protected Routes */}
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <CheckoutForm cartItems={cartItems} />
              </ProtectedRoute>
            } 
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
          
          <Route path="/weaves/brazilian" element={<Brazilian addToCart={addToCart} />} />
          <Route path="/weaves/peruvian" element={<Peruvian addToCart={addToCart} />} />
          <Route path="/weaves/indian" element={<Indian addToCart={addToCart} />} />
          <Route path="/weaves/frontals" element={<Frontals addToCart={addToCart} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
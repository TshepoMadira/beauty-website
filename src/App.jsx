// src/App.js
import React from 'react';
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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/weaves" element={<Weaves />} />
        <Route path="/nails" element={<Nails />} />
        <Route path="/hair-products" element={<HairProducts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        {/* Add more routes for other pages */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
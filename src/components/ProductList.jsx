// src/components/ProductList.js
import React from 'react';
import { products } from './data/products';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list-container">
      <h1>Welcome to Our Beauty Store</h1>
      <p>
        Discover a world of beauty at your fingertips. From stunning weaves to luxurious nails, our collection is designed to enhance your natural beauty and make you feel confident and radiant. Explore our latest products and services, and find the perfect items to elevate your style.
      </p>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button 
              className="add-to-cart-button" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
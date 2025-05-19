import React, { useState } from 'react';
import { products } from './data/products';
import './Allproducts.css';

const AllProducts = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define our categories
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'weaves', label: 'Weaves' },
    { value: 'nails', label: 'Nails' },
    { value: 'hair', label: 'Hair Products' },
    { value: 'makeup', label: 'Make Up' }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list-container">
      <h1 className="section-header">All Products</h1>
      
      {/* Category dropdown filter */}
      <div className="category-filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Product list */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">R{product.price}</p>
              <div className="product-buttons">
                <button
                  className="view-details-button"
                  onClick={() => viewProductDetails(product.id)}
                >
                  View Details
                </button>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
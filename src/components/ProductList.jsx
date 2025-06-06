import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './data/products';
import './ProductList.css';
import Testimonials from './Testimonials';

const ProductList = ({ addToCart }) => {
  const navigate = useNavigate();

  const exploreCategory = (category) => {
    console.log(`Exploring ${category} category`);
  };

  const viewProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  const viewAllProducts = () => {
    navigate('/products');
  };

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="product-list-container">
      
      <div className="header-container">
        <h1>Beauty That Empowers</h1>
        <p className="intro-text">
          Discover premium weaves, hair products, and professional beauty services that help you look and feel your best.
        </p>
      </div>

    

      <div className="products-section">
        <h2 className="section-header">Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-cards">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="product-prices">R{product.price}</p>
              <div className="product-buttons">
                <button
                  className="view-details-button"
                  onClick={() => viewProductDetails(product.id)}
                >
                  View Details
                </button>
                <button
                  className="add-to-cart-buttons"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length > 4 && (
          <div className="view-all-container">
            <button
              className="view-all-button"
              onClick={viewAllProducts}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
      <Testimonials />
    </div>
  );
};

export default ProductList;
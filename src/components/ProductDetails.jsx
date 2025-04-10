import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './data/products';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back to Products
      </button>
      
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          
          <div className="product-actions">
            <button 
              className="add-to-cart-button"
              onClick={() => {
                addToCart(product);
                navigate('/cart'); // Optional: redirect to cart after adding
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
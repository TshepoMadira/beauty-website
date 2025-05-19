import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from './data/products';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    addToCart(product);
    setIsAddingToCart(false);
    navigate('/cart');
  };

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
          <p className="product-price">R{product.price}</p>
          <p className="product-description">{product.description}</p>
          
          <div className="product-actions">
            <button 
              className="add-to-cart-button"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? (
                <>
                  <span className="button-loader"></span>
                  Adding...
                </>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
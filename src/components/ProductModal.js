import React from 'react';
import { useCart } from '../context/CartContext';

function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const savings = (product.originalPrice - product.price).toFixed(2);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '★'.repeat(full);
    if (half) stars += '½';
    stars += '☆'.repeat(5 - full - (half ? 1 : 0));
    return stars;
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>✕</button>
          <span className="modal-category">{product.category}</span>
          <h2 className="modal-name">{product.name}</h2>
          <div className="modal-rating">
            <span className="stars" style={{ fontSize: '1rem' }}>{renderStars(product.rating)}</span>
            <span className="rating-count">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="modal-desc">{product.description}</p>
          <div className="modal-price-section">
            <span className="modal-price">${product.price.toFixed(2)}</span>
            <span className="modal-original">${product.originalPrice.toFixed(2)}</span>
            <span className="modal-save">Save ${savings} ({discount}%)</span>
          </div>
          <button className="modal-add-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

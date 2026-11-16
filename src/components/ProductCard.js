import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '★'.repeat(full);
    if (half) stars += '½';
    stars += '☆'.repeat(5 - full - (half ? 1 : 0));
    return stars;
  };

  const getBadgeClass = (badge) => {
    if (!badge) return '';
    const map = {
      'Sale': 'badge-sale',
      'New': 'badge-new',
      'Best Seller': 'badge-best',
      'Popular': 'badge-popular',
      'Top Rated': 'badge-top'
    };
    return map[badge] || 'badge-new';
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card" onClick={() => onViewDetails(product)}>
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`product-badge ${getBadgeClass(product.badge)}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="discount-tag">-{discount}%</span>
        )}
        <button className="quick-add" onClick={handleAddToCart}>
          🛒 Add to Cart
        </button>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
          <span className="rating-count">({product.reviews})</span>
        </div>
        <div className="product-price-row">
          <span className="current-price">${product.price.toFixed(2)}</span>
          <span className="original-price">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

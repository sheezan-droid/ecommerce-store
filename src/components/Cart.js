import React from 'react';
import { useCart } from '../context/CartContext';

function Cart({ isOpen, onClose }) {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  const shipping = totalPrice > 50 ? 0 : 4.99;
  const finalTotal = totalPrice + shipping;

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>
            🛒 Your Cart
            {totalItems > 0 && <span className="cart-count">{totalItems} items</span>}
          </h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            items.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  <div className="cart-item-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-subtotal">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free ✨' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <div className="cart-subtotal" style={{ fontSize: '0.8rem', color: 'var(--success)' }}>
                <span></span>
                <span>Free shipping over $50!</span>
              </div>
            )}
            <div className="cart-total">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              Proceed to Checkout →
            </button>
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;

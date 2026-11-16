import React from 'react';
import { useCart } from '../context/CartContext';

function Header({ searchQuery, setSearchQuery, toggleTheme, theme, onCartOpen }) {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <div className="logo-icon">🛍️</div>
          <h1>ShopVibe</h1>
        </div>

        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="header-actions">
          <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="cart-btn" onClick={onCartOpen} title="Shopping Cart">
            🛒
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

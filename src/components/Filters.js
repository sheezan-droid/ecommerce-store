import React from 'react';
import { categories } from '../data/products';

function Filters({ selectedCategory, setSelectedCategory, sortBy, setSortBy, productCount }) {
  return (
    <div className="filters-section">
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span className="results-count">{productCount} products</span>
        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;

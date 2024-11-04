import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const categories = ["electronics", "clothing", "accessories", "footwear", "home", "furniture", "jewelry", "sports"];

const Sidebar = React.memo(({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = useCallback(() => {
    onFilterChange({ category, minPrice, maxPrice });
  }, [onFilterChange, category, minPrice, maxPrice]);

  return (
    <div className="p-6 bg-white rounded-lg w-72">
      <div className="flex items-center mb-4">
        <h2 className="ml-2 text-xl font-bold">Filters</h2>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-600 mb-1">Category</label>
        <select
          id="category"
          className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 mb-1">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={handleFilterChange}
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg mt-2 hover:bg-blue-600 transition-all"
      >
        Submit Filters
      </button>
    </div>
  );
});

Sidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Sidebar;

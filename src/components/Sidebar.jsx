import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const categories = ["electronics", "clothing", "accessories", "footwear", "home", "furniture", "jewelry", "sports"];

const Sidebar = React.memo(({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = useCallback(() => {
    onFilterChange({ category, minPrice, maxPrice });
  }, [onFilterChange, category, minPrice, maxPrice]);

  return (
    <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 2, width: 280 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <FilterListIcon color="primary" />
        <Typography variant="h6" fontWeight="bold" ml={1}>
          Filters
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" mb={1} color="text.secondary">
          Category
        </Typography>
        <Select
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          MenuProps={{
            PaperProps: { style: { maxHeight: 200 } },
            disableScrollLock: true,
          }}
          variant="outlined"
          color="primary"
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" mb={1} color="text.secondary">
          Price Range
        </Typography>
        <Box display="flex" gap={1}>
          <TextField
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            variant="outlined"
            fullWidth
          />
          <TextField
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>

      <Button
        onClick={handleFilterChange}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ fontWeight: 'bold', py: 1.5, textTransform: 'none' }}
      >
        Submit Filters
      </Button>
    </Box>
  );
});

Sidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Sidebar;


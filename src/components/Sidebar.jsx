import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const Sidebar = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Filtre değişikliklerini parent bileşene ilet
  const handleFilterChange = () => {
    onFilterChange({ category, minPrice, maxPrice });
  };

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: 'white',
       
        borderRadius: 2,
        width: 280,
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <FilterListIcon color="primary" />
        <Typography variant="h6" fontWeight="bold" ml={1}>
          Filtreler
        </Typography>
      </Box>

      {/* Kategori Seçimi */}
      <Box mb={3}>
        <Typography variant="subtitle1" mb={1} color="text.secondary">
          Kategori
        </Typography>
        <Select
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          variant="outlined"
          color="primary"
        >
          <MenuItem value="">Tüm Kategoriler</MenuItem>
          <MenuItem value="electronics">Elektronik</MenuItem>
          <MenuItem value="clothing">Giyim</MenuItem>
          {/* Ek kategoriler burada eklenebilir */}
        </Select>
      </Box>

      {/* Fiyat Aralığı */}
      <Box mb={3}>
        <Typography variant="subtitle1" mb={1} color="text.secondary">
          Fiyat Aralığı
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
        sx={{
          fontWeight: 'bold',
          py: 1.5,
          textTransform: 'none',
        }}
      >
        Filtreleri Uygula
      </Button>
    </Box>
  );
};

Sidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Sidebar;


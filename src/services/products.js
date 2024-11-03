import { useQuery } from 'react-query';

export const useFetchProducts = (filters, searchTerm) => {
  return useQuery(['products', filters, searchTerm], async () => {
    let query = 'http://localhost:5000/products?';

    // Filtreleri ve searchTerm'i sorguya ekliyoruz
    if (filters.category) {
      query += `category=${filters.category}&`;
    }
    if (filters.minPrice) {
      query += `price_gte=${filters.minPrice}&`;
    }
    if (filters.maxPrice) {
      query += `price_lte=${filters.maxPrice}&`;
    }
    if (searchTerm) {
      query += `q=${searchTerm}&`; // Arama terimi
    }

    const response = await fetch(query);
    if (!response.ok) {
      throw new Error('Ağ hatası');
    }
    return response.json();
  });
};
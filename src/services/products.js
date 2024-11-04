import { useQuery } from 'react-query';

export const useFetchProducts = (filters, searchTerm, page, limit) => {
  return useQuery(['products', filters, searchTerm, page, limit], async () => {
    let query = `https://my-json-server.typicode.com/gorkemmert/db/products?_start=${limit*(page-1)}&_end=${limit*(page)}`;
  
    // Filtreleri ve searchTerm'i sorguya ekliyoruz
    if (filters.category) {
      query += `&category=${filters.category}`;
    }
    if (filters.minPrice) {
      query += `&price_gte=${filters.minPrice}`;
    }
    if (filters.maxPrice) {
      query += `&price_lte=${filters.maxPrice}`;
    }
    if (searchTerm) {
      query += `&q=${searchTerm}`;
    }
  
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error('Ağ hatası');
    }
    return response.json();
  }, {
    keepPreviousData: false,
  });
};
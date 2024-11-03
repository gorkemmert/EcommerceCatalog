import { useQuery } from 'react-query';

export const useFetchProducts = (filters) => {
  return useQuery(['products', filters], async () => {
    let query = 'http://localhost:5000/products?';

    // Filtreleri uyguluyoruz
    if (filters.category) {
      query += `category=${filters.category}&`;
    }
    if (filters.minPrice) {
      query += `price_gte=${filters.minPrice}&`;
    }
    if (filters.maxPrice) {
      query += `price_lte=${filters.maxPrice}&`;
    }

    const response = await fetch(query);
    if (!response.ok) {
      throw new Error('Ağ hatası');
    }
    return response.json();
  });
};
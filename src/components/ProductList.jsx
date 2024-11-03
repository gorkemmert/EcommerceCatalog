import { useState } from 'react';
import { useFetchProducts } from '../services/products';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import Banner from './Banner';

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('asc');

  const { data, isLoading, isError } = useFetchProducts(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedData = data
    ? [...data].sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      )
    : [];

  if (isError) return <p className="text-red-500">Bir hata oluştu!</p>;

  return (
    <div className="w-full bg-gray-100 min-h-screen mt-[120px]">
      <Banner />
      <div className="max-w-[1240px] mx-auto flex flex-col py-4">
        {/* Sıralama ve Filtre Bölümü */}
        <div className="flex justify-between items-center mb-4 px-4">
          <h2 className="text-lg font-semibold">Ürünler</h2>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="asc">Fiyata Göre: Artan</option>
            <option value="desc">Fiyata Göre: Azalan</option>
          </select>
        </div>

        <div className="flex">
          <Sidebar onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
            {isLoading ? (
              <p>Yükleniyor...</p>
            ) : (
              sortedData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
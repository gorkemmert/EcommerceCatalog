import { useState } from 'react';
import { useFetchProducts } from '../services/products';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import Banner from './Banner';
import { SearchIcon } from '../assets';

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState("")

  const { data, isLoading, isError } = useFetchProducts(filters, searchTerm);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Tüm alanlarda arama
  const filteredData = data
    ? data.filter((product) => {
        // Tüm alanları birleştirip küçük harfe çeviriyoruz ve `searchTerm`i içerip içermediğine bakıyoruz
        const searchableString = `${product.title} ${product.category}`.toLowerCase();
        return searchableString.includes(searchTerm.toLowerCase());
      })
    : [];

  // Sıralanmış veriyi elde ediyoruz
  const sortedData = filteredData.sort((a, b) =>
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  if (isError) return <p className="text-red-500">Bir hata oluştu!</p>;

  return (
    <div className="w-full bg-gray-100 min-h-screen mt-[120px] z-0">
      <Banner />
      <div className="max-w-[1240px] mx-auto flex flex-col py-4">
        {/* Sıralama ve Filtre Bölümü */}
        <div className="flex justify-between items-center mb-4 px-4">
          <h2 className="text-lg font-semibold">Products</h2>
          <div className="hidden sm:flex items-center w-full max-w-[300px] mx-4 relative">
            <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Arama terimi güncelleniyor
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="asc">By Price Increasing</option>
            <option value="desc">By Price Declining</option>
          </select>
        </div>

        <div className="flex">
          <Sidebar onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
            {isLoading ? (
              <p>Loading...</p>
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
import { useState, useCallback, useMemo } from 'react';
import { useFetchProducts } from '../services/products';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import Banner from './Banner';
import { SearchIcon } from '../assets';

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1); // State for current page
  const itemsPerPage = 10; // Items per page

  // Custom hook to fetch products with the current filters, search term, page, and items per page
  const { data, isLoading, isError } = useFetchProducts(filters, searchTerm, page, itemsPerPage);

  // Callback function to update filters when the user changes them in the sidebar
  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  // Callback function to update sort order when the user selects a different option
  const handleSortChange = useCallback((event) => {
    setSortOrder(event.target.value);
  }, []);

  // Callback function to change the page when the user navigates to a new page
  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  // Memoized filtered data based on the search term to improve performance
  const filteredData = useMemo(() => {
    return data ? data.filter((product) => {
      const searchableString = `${product.title} ${product.category}`.toLowerCase();
      return searchableString.includes(searchTerm.toLowerCase());
    }) : [];
  }, [data, searchTerm]);

  // Memoized sorted data based on the sort order selected by the user
  const sortedData = useMemo(() => {
    return filteredData.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }, [filteredData, sortOrder]);


  return (
    <div className="w-full bg-gray-100 min-h-screen mt-[120px] z-0">
      <Banner />
      <div className="max-w-[1240px] mx-auto flex flex-col py-4">
        <div className="flex justify-between items-center mb-4 px-4">
          <h2 className="text-lg font-semibold">Products</h2>
          
          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-2 py-1 border rounded"
            >
              Prev
            </button>
            <span>Page {page}</span>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-2 py-1 border rounded"
              disabled={data?.length ===0}
            >
              Next
            </button>
          </div>

          {/* Search Input */}
          <div className="hidden sm:flex items-center w-full max-w-[300px] mx-4 relative">
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

            {/* we show the error and loding operations returned from the request where we list products  */}
            {isLoading ? (
             
              <div className="text-blue-700 animate-pulse mt-20 ml-20">Yükleniyor...</div>
              
            )  : isError ? (
                <p className="text-red-700 animate-pulse mt-20 ml-20">⚠️ Bir hata oluştu!</p>
            ) : (
              sortedData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

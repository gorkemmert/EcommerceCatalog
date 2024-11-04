
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart} from '../store/cartSlice';

const ProductCard = React.memo((props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);


  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded mb-4"
        loading="lazy" // Lazy loading added here
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-500 mb-4">${product.price}</p>
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    // useCallback to avoid recreating the handleRemoveFromCart function on each render
    const handleRemoveFromCart = useCallback(() => {
        dispatch(removeFromCart(item));
    }, [dispatch, item]);
  
    return (
        <div className="border rounded-md p-4 mb-4" data-testid="cart-item">
        <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-2">{item.title}</h2>
            <span className="bg-blue-100 text-blue-500 px-2 py-1 text-xs rounded">{item.storeType}</span>
        </div>
        <div className="flex items-start mt-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mr-4" />
            <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            
            
            </div>
            <div className="text-right">
            <p className="text-xl font-semibold">{item.price.toFixed(2)} $</p>
            <button onClick={handleRemoveFromCart} className="text-red-500 text-sm mt-2">Remove</button>
            </div>
        </div>
        </div>
    );
};

export default React.memo(CartItem);
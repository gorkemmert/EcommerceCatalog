/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductCard from './ProductCard';
import { addToCart } from '../store/cartSlice';

const mockStore = configureStore([]);

describe('ProductCard Component', () => {
  let store;
  const product = {
    image: 'https://example.com/product.jpg',
    title: 'Test Product',
    price: 99.99,
  };

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  test('renders product information correctly', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    // Ürün bilgilerini doğrula
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  test('dispatches addToCart action when "Add to Cart" button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductCard product={product} />
      </Provider>
    );

    // "Add to Cart" butonuna tıklayın
    fireEvent.click(screen.getByText('Add to Cart'));

    // addToCart aksiyonunun doğru şekilde çağrıldığını doğrulayın
    expect(store.dispatch).toHaveBeenCalledWith(addToCart(product));
  });
});

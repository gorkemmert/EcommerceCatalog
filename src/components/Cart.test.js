/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import Cart from './Cart';

describe('Cart Component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: [
          { id: 1, title: 'Product 1', price: 100,  image: 'image-url-1' },
          { id: 2, title: 'Product 2', price: 200,  image: 'image-url-2' },
        ],
      },
    });
  });

  const renderWithProvider = (component) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  test('renders correct number of CartItem components', () => {
    renderWithProvider(<Cart />);
    
    // Yalnızca CartItem bileşenlerini seç
    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(2);
  });

  test('renders Summary component with correct data', () => {
    renderWithProvider(<Cart />);

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('300.00 $')).toBeInTheDocument();
  });
});


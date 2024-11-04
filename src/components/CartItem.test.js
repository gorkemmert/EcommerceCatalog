/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { removeFromCart } from '../store/cartSlice';
import CartItem from './CartItem';

describe('CartItem Component', () => {
  let store;
  const mockItem = {
    id: 1,
    title: 'Test Product',
    price: 100,
    image: 'test-image-url',
  };

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
    });
  });

  const renderWithProvider = (component) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  test('renders product information correctly', () => {
    renderWithProvider(<CartItem item={mockItem} />);

    // Ürün bilgileri
    expect(screen.getAllByText('Test Product').length).toBeGreaterThan(0); 
    expect(screen.getByText('100.00 $')).toBeInTheDocument();
  });

  test('dispatches removeFromCart action when "Remove" button is clicked', () => {
    const dispatchSpy = jest.spyOn(store, 'dispatch'); // Dispatch fonksiyonunu izliyoruz

    renderWithProvider(<CartItem item={mockItem} />);

    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    // removeFromCart aksiyonunun çağrıldığını doğrulama
    expect(dispatchSpy).toHaveBeenCalledWith(removeFromCart(mockItem));

    dispatchSpy.mockRestore();
  });
});


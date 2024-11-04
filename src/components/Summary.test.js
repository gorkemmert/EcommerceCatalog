/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Summary from './Summary';

describe('Summary Component', () => {
  const mockItems = [
    { id: 1, title: 'Product 1', price: 100 },
    { id: 2, title: 'Product 2', price: 200 },
  ];

  test('renders the summary title', () => {
    render(<Summary items={mockItems} />);
    expect(screen.getByText('Summary')).toBeInTheDocument();
  });

  test('calculates and displays the correct subtotal', () => {
    render(<Summary items={mockItems} />);
    const subtotal = mockItems.reduce((sum, item) => sum + item.price, 0);
    expect(screen.getByText(`${subtotal.toFixed(2)} $`)).toBeInTheDocument();
  });

  test('displays the correct shipping cost', () => {
    render(<Summary items={mockItems} />);
    expect(screen.getByText('39.99 $')).toBeInTheDocument();
  });

  test('calculates and displays the correct total', () => {
    render(<Summary items={mockItems} />);
    const subtotal = mockItems.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + 39.99;
    expect(screen.getByText(`${total.toFixed(2)} $`)).toBeInTheDocument();
  });

  test('renders the "Sepeti Onayla" button', () => {
    render(<Summary items={mockItems} />);
    expect(screen.getByRole('button', { name: /sepeti onayla/i })).toBeInTheDocument();
  });
});
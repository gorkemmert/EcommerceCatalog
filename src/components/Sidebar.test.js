/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar Component', () => {
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  test('renders filter options correctly', () => {
    render(<Sidebar onFilterChange={mockOnFilterChange} />);

    // Filtre başlığının varlığını kontrol edin
    expect(screen.getByText('Filters')).toBeInTheDocument();

    // Kategori seçeneğinin varlığını kontrol edin
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByText('All Categories')).toBeInTheDocument();
  });

  test('calls onFilterChange with selected filters', () => {
    render(<Sidebar onFilterChange={mockOnFilterChange} />);

    // Kategori seçimini değiştirin
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'electronics' } });

    // Fiyat aralığı inputlarına değerler girin
    fireEvent.change(screen.getByPlaceholderText('Min'), { target: { value: '10' } });
    fireEvent.change(screen.getByPlaceholderText('Max'), { target: { value: '100' } });

    // Filtreleri gönder butonuna tıklayın
    fireEvent.click(screen.getByText(/submit filters/i));

    // `onFilterChange` fonksiyonunun doğru değerlerle çağrıldığını doğrulayın
    expect(mockOnFilterChange).toHaveBeenCalledWith({
      category: 'electronics',
      minPrice: '10',
      maxPrice: '100',
    });
  });
});

/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from './Banner';

describe('Banner Component', () => {
  test('renders the banner with correct texts', () => {
    render(<Banner />);

    // Başlık ve alt başlık metinlerinin render edilip edilmediğini kontrol edin
    expect(screen.getByText('Epic Offers Await You')).toBeInTheDocument();
    expect(screen.getByText('Find Your Perfect Deal')).toBeInTheDocument();
  });

  test('renders the Shop Now button', () => {
    render(<Banner />);

    // "Shop Now" butonunun render edilip edilmediğini kontrol edin
    const button = screen.getByRole('button', { name: /shop now/i });
    expect(button).toBeInTheDocument();
  });
});

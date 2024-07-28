import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchField } from './SearchField';

describe('SearchField', () => {
  const mockOnSearch = vi.fn();

  afterEach(() => {
    localStorage.clear();
  });

  it('should save the search query to local storage when the Search button is clicked', () => {
    render(<SearchField onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('enter your request');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'test query' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('searchQuery')).toBe('test query');
  });

  it('should restore the search query from local storage on mount', () => {
    localStorage.setItem('searchQuery', 'saved query');
    render(<SearchField onSearch={mockOnSearch} />);

    const searchInput = screen.getByDisplayValue('saved query');

    expect(searchInput).toBeInTheDocument();
  });
});

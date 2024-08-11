import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchField } from './SearchField';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams({ query: 'saved query' }),
}));

describe('SearchField', () => {
  const mockOnSearch = vi.fn();

  afterEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it('should restore the search query from URL search params', () => {
    render(<SearchField onSearch={mockOnSearch} />);

    const searchInput = screen.getByDisplayValue('saved query');

    expect(searchInput).toBeInTheDocument();
  });

  it('should restore the search query from local storage if not found in URL search params', () => {
    localStorage.setItem('lastSearchQuery', 'saved query');
    render(<SearchField onSearch={mockOnSearch} />);

    const searchInput = screen.getByDisplayValue('saved query');

    expect(searchInput).toBeInTheDocument();
  });

  it('should call the onSearch callback with the search query when the Search button is clicked', () => {
    render(<SearchField onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('enter your request');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'saved query' } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith('saved query');
  });
});

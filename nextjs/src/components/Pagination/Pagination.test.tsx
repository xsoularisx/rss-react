import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from './Pagination';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('Pagination', () => {
  it('should update the URL parameter when the page changes', () => {
    const mockedRouter = {
      push: vi.fn(),
    };
    const mockedSearchParams = new URLSearchParams();
    mockedSearchParams.set('query', 'test');

    vi.mocked(useRouter).mockReturnValue(mockedRouter as never);
    vi.mocked(useSearchParams).mockReturnValue(mockedSearchParams as never);

    const onPageChange = vi.fn();

    render(
      <Pagination count={100} currentPage={1} onPageChange={onPageChange} />,
    );

    const pageNumbers = screen.getAllByRole('listitem');
    fireEvent.click(pageNumbers[1]);

    expect(onPageChange).toHaveBeenCalledWith(2);
    expect(mockedRouter.push).toHaveBeenCalledWith('?query=test&page=2');
  });
});

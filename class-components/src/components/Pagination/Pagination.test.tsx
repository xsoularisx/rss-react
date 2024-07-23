import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('should update the URL parameter when the page changes', () => {
    const history = createMemoryHistory();
    const onPageChange = vi.fn();

    render(
      <Router location={history.location} navigator={history}>
        <Pagination count={100} currentPage={1} onPageChange={onPageChange} />
      </Router>,
    );

    const pageNumbers = screen.getAllByRole('listitem');
    fireEvent.click(pageNumbers[1]);

    expect(onPageChange).toHaveBeenCalledWith(2);
    expect(history.location.search).toBe('?page=2');
  });
});

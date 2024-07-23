import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Page404 } from './Page404';

describe('Page404', () => {
  it('should render the 404 page correctly', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('page not found')).toBeInTheDocument();
    expect(screen.getByText('return main page')).toBeInTheDocument();
  });
});
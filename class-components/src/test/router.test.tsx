import { describe, it, expect } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import router from '../router';

describe('Router configuration', () => {
  it('should render the Page404 component for non-existent paths', async () => {
    const memoryRouter = createMemoryRouter(router.routes, {
      initialEntries: ['/non-existent-path'],
    });

    render(<RouterProvider router={memoryRouter} />);
    expect(
      screen.getByText(content => content.includes('page not found')),
    ).toBeInTheDocument();
  });
});

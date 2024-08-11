import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CustomPage404 from './[...slug]';

vi.mock('./Page404/Page404', () => ({
  Page404: () => <div data-testid="page404">page404</div>,
}));

describe('CustomPage404', () => {
  it('should render the Page404 component', () => {
    render(<CustomPage404 />);
    const page404Component = screen.getByTestId('page404');
    expect(page404Component).toBeInTheDocument();
  });
});

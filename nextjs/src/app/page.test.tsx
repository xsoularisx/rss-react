import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render the correct structure', () => {
    render(<Home />);

    expect(screen.getByText('restart page')).toBeInTheDocument();
  });
});

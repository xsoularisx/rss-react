import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('should render the loading text and animation', () => {
    render(<Loader />);
    const loadingText = screen.getByText('loading');
    expect(loadingText).toBeInTheDocument();
  });
});

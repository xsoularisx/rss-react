import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorButton } from './ErrorButton';

describe('ErrorButton', () => {
  it('should render the button', () => {
    render(<ErrorButton />);
    const button = screen.getByRole('button', { name: 'throw error' });
    expect(button).toBeInTheDocument();
  });
});
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorButton } from './ErrorButton';

describe('ErrorButton', () => {
  it('should render the button', () => {
    render(<ErrorButton />);
    const button = screen.getByRole('button', { name: 'throw error' });
    expect(button).toBeInTheDocument();
  });

  it('should throw an error when the button is clicked', async () => {
    render(<ErrorButton />);
    const button = screen.getByText('throw error');
    expect(() => fireEvent.click(button)).toThrowError();
  });

  it('should not render an error message when no error occurs', () => {
    render(<ErrorButton />);
    expect(() => screen.getByText('something went wrong')).toThrow();
  });
});

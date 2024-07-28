import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should display the "throw error" text', () => {
    render(<App />);
    expect(screen.getByText('throw error')).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

describe('ThemeToggle', () => {
  it('should display the correct button text based on the current theme', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => { } }}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    expect(getByText('toggle dark theme')).toBeInTheDocument();
  });

  it('should call the toggleTheme function when the button is clicked', () => {
    const mockToggleTheme = vi.fn();
    const { getByText } = render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: mockToggleTheme }}>
        <ThemeToggle />
      </ThemeContext.Provider>
    );

    fireEvent.click(getByText('toggle dark theme'));
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
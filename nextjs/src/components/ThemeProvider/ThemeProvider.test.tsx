import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeContext, ThemeProvider } from './ThemeProvider';
import React from 'react';

describe('ThemeProvider', () => {
  it('should provide the initial theme', () => {
    const TestComponent = () => {
      const { theme } = React.useContext(ThemeContext);
      return <div data-testid="theme-value">{theme}</div>;
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });

  it('should toggle the theme', () => {
    const TestComponent = () => {
      const { theme, toggleTheme } = React.useContext(ThemeContext);
      return (
        <div>
          <div data-testid="theme-value">{theme}</div>
          <button onClick={toggleTheme} data-testid="toggle-button">
            Toggle Theme
          </button>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');

    fireEvent.click(screen.getByTestId('toggle-button'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');

    fireEvent.click(screen.getByTestId('toggle-button'));
    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');
  });
});

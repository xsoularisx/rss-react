import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider';
import App from '../App';

describe('App', () => {
  it('should render the App component with the ThemeProvider, Provider, and RouterProvider', () => {
    render(
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>,
    );

    expect(
      screen.getByText(content => content.includes('throw error')),
    ).toBeInTheDocument();
  });
});

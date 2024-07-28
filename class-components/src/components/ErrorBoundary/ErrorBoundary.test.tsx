import { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ThrowingComponent = () => {
  const [error, setError] = useState(false);
  if (error) {
    throw new Error('Test error');
  }
  return <button onClick={() => setError(true)}>click to throw error</button>;
};

describe('ErrorBoundary', () => {
  it('should render the error message when an error occurs', async () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    );

    screen.getByText('click to throw error').click();

    await waitFor(() =>
      expect(screen.getByText('something went wrong.')).toBeInTheDocument(),
    );
    expect(screen.getByText('restart page')).toBeInTheDocument();
  });

  it('should render the child component when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>child component</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText('child component')).toBeInTheDocument();
  });
});

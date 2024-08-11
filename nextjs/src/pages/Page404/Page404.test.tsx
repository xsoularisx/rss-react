import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Page404 } from './Page404';
import { useRouter } from 'next/navigation';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(path => {
      expect(path).toBe('/');
    }),
  }),
}));

describe('Page404', () => {
  it('should render the 404 page correctly', () => {
    render(<Page404 />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('page not found')).toBeInTheDocument();
    expect(screen.getByText('return main page')).toBeInTheDocument();
  });

  // it('should navigate to the main page when the button is clicked', () => {
  //   const { container } = render(<Page404 />);
  //   const button = container.querySelector('.page404__button');

  //   fireEvent.click(button as HTMLButtonElement);

  //   expect(useRouter().push).toHaveBeenCalled();
  // });
});

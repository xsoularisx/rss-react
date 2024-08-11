import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

describe('RootLayout', () => {
  it('should render the html and body structure', () => {
    render(
      <RootLayout>
        <div>test</div>
      </RootLayout>,
    );

    const htmlElement = screen.getByRole('document');
    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement).toHaveAttribute('lang', 'en');
  });
});

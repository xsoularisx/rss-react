import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { Starship } from '../../interfaces/intrefaces';

describe('Card component', () => {
  const mockStarship: Starship = {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    url: 'https://example.com/starships/1',
  };

  it('should render the starship information correctly', () => {
    const onCardClickMock = vi.fn();
    render(<Card starship={mockStarship} onCardClick={onCardClickMock} />);

    expect(screen.getByText('Name: Millennium Falcon')).toBeInTheDocument();
    expect(
      screen.getByText('Model: YT-1300 light freighter'),
    ).toBeInTheDocument();
  });

  it('should render the starship information correctly', () => {
    const onCardClickMock = vi.fn();
    render(<Card starship={mockStarship} onCardClick={onCardClickMock} />);

    expect(screen.getByText('Name: Millennium Falcon')).toBeInTheDocument();
    expect(
      screen.getByText('Model: YT-1300 light freighter'),
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: '' })).toBeInTheDocument();
  });
});

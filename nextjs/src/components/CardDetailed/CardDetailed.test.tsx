import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardDetailed } from './CardDetailed';
import { Starship } from '../../interfaces/intrefaces';

describe('CardDetailed component', () => {
  const mockStarship: Starship = {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '100000',
    length: '34.37',
    max_atmosphering_speed: '1050',
    crew: '4',
    passengers: '6',
    cargo_capacity: '100000',
    consumables: '2 months',
    hyperdrive_rating: '0.5',
    MGLT: '75',
    starship_class: 'Light freighter',
  };

  it('should render the starship information correctly', () => {
    render(<CardDetailed starship={mockStarship} />);

    expect(screen.getByText('Name: Millennium Falcon')).toBeInTheDocument();
    expect(
      screen.getByText('Model: YT-1300 light freighter'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Manufacturer: Corellian Engineering Corporation'),
    ).toBeInTheDocument();
    expect(screen.getByText('Cost: 100000 credits')).toBeInTheDocument();
    expect(screen.getByText('Length: 34.37 meters')).toBeInTheDocument();
    expect(screen.getByText('Max Speed: 1050 km/h')).toBeInTheDocument();
    expect(screen.getByText('Crew: 4')).toBeInTheDocument();
    expect(screen.getByText('Passengers: 6')).toBeInTheDocument();
    expect(screen.getByText('Cargo Capacity: 100000 kg')).toBeInTheDocument();
    expect(screen.getByText('Consumables: 2 months')).toBeInTheDocument();
    expect(screen.getByText('Hyperdrive Rating: 0.5')).toBeInTheDocument();
    expect(screen.getByText('MGLT: 75')).toBeInTheDocument();
    expect(
      screen.getByText('Starship Class: Light freighter'),
    ).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { CardsField } from './CardsField';
import { MainPageProps } from '../../interfaces/intrefaces';

describe('CardsField', () => {
  const mockStarships = [
    {
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
      url: '',
    },
    {
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
      url: '',
    },
  ];

  it('should display the correct number of cards', () => {
    const props: MainPageProps = {
      starships: mockStarships,
      loading: false,
      error: null,
      searchResults: [],
    };

    render(<CardsField {...props} />);

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(2);
  });

  it('should display a message when there is no card', () => {
    const props: MainPageProps = {
      starships: [],
      loading: false,
      error: null,
      searchResults: [],
    };

    render(<CardsField {...props} />);

    const noResultsMessage = screen.getByText('no-results');
    expect(noResultsMessage).toBeInTheDocument();
  });
});

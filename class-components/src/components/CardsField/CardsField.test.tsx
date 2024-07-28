import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { CardsField } from './CardsField';
import { Store, UnknownAction } from '@reduxjs/toolkit';

const mockStore = configureStore();

describe('CardsField', () => {
  let store: Store<unknown, UnknownAction, unknown>;

  beforeEach(() => {
    store = mockStore({
      starships: [
        {
          name: 'Millennium Falcon',
          url: 'https://swapi.dev/api/starships/10/',
        },
        {
          name: 'X-wing',
          url: 'https://swapi.dev/api/starships/14/',
        },
      ],
      detailedCard: {
        data: [
          {
            name: 'Millennium Falcon',
            url: 'https://swapi.dev/api/starships/10/',
          },
        ],
      },
    });
  });

  it('renders loading state', () => {
    render(
      <Provider store={store}>
        <CardsField
          loading={true}
          error={null}
          starships={[]}
          searchResults={[]}
        />
      </Provider>,
    );
    expect(screen.getByText('loading')).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(
      <Provider store={store}>
        <CardsField
          loading={false}
          error="Error fetching data"
          starships={[]}
          searchResults={[]}
        />
      </Provider>,
    );
    expect(screen.getByText('error: Error fetching data')).toBeInTheDocument();
  });

  it('renders no results state', () => {
    render(
      <Provider store={store}>
        <CardsField
          loading={false}
          error={null}
          starships={[]}
          searchResults={[]}
        />
      </Provider>,
    );
    expect(screen.getByText('no-results')).toBeInTheDocument();
  });
});

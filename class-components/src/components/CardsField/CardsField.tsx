import { Component, ReactNode } from 'react';
import { MainPageProps } from '../../interfaces/intrefaces';
import './CardsField.scss';
import { Card } from '../Card/Card';
import Loader from '../Loader/Loader';

class CardsField extends Component<MainPageProps> {
  getLastSearchQuery(): string {
    return localStorage.getItem('lastSearchQuery') || '';
  }

  render(): ReactNode {
    const { starships, loading, error, searchResults } = this.props;
    const lastInputValue = this.getLastSearchQuery();
    const items = searchResults.length > 0 ? searchResults : starships;

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <h2 className="error">error: {error}</h2>;
    }

    if (searchResults.length === 0 && lastInputValue !== '') {
      return (
        <>
          <h1 className="title">starships</h1>
          <h2 className="no-results">no-results</h2>
        </>
      );
    }

    return (
      <>
        <h1 className="title">starships</h1>
        <ul className="field">
          {items.map(starship => (
            <Card key={starship.url} starship={starship} />
          ))}
        </ul>
      </>
    );
  }
}

export default CardsField;

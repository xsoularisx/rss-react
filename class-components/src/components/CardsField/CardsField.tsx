import './CardsField.scss';
import { MainPageProps } from '../../interfaces/intrefaces';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { useState } from 'react';
import { CardDetailed } from '../CardDetailed/CardDetailed';
import { Starship } from '../../interfaces/intrefaces';

export function CardsField({ starships, loading, error }: MainPageProps) {
  const items = starships;
  const [selectedStarship, setSelectedStarship] = useState<Starship | null>(
    null,
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="error">error: {error}</h2>;
  }

  if (items.length === 0 && starships.length === 0) {
    return (
      <>
        <h1 className="title">starships</h1>
        <h2 className="no-results">no-results</h2>
      </>
    );
  }

  async function handleCardClick(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedStarship(data);
    } catch (error) {
      console.error(error);
    }
    console.log(selectedStarship);
  }

  return (
    <div className="main">
      <h1 className="title">starships</h1>
      <div className="field__container">
        <ul className="field">
          {items.map(starship => (
            <Card
              key={starship.url}
              starship={starship}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
        {selectedStarship && <CardDetailed starship={selectedStarship} />}
      </div>
    </div>
  );
}

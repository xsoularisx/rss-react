import './CardsField.scss';
import { MainPageProps } from '../../interfaces/intrefaces';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';

export function CardsField({
  starships,
  loading,
  error,
}: MainPageProps) {
  const items = starships;

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

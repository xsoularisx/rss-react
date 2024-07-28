import './CardsField.scss';
import { MainPageProps } from '../../interfaces/intrefaces';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { CardDetailed } from '../CardDetailed/CardDetailed';
import { setDetailedCard } from '../CardDetailed/CardDetailedSlice';
import { RootState } from '../../store';

export function CardsField({ starships, loading, error }: MainPageProps) {
  const dispatch = useDispatch();
  const detailedCard = useSelector(
    (state: RootState) => state.detailedCard.data,
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2 className="error">error: {error}</h2>;
  }

  if (starships.length === 0 && starships.length === 0) {
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
      dispatch(setDetailedCard(data));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main">
      <h1 className="title">starships</h1>
      <div className="field__container">
        <ul className="field">
          {starships.map(starship => (
            <Card
              key={starship.url}
              starship={starship}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
        {detailedCard && <CardDetailed starship={detailedCard} />}
      </div>
    </div>
  );
}

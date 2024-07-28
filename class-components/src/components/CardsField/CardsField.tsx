import './CardsField.scss';
import { MainPageProps, Starship } from '../../interfaces/intrefaces';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { CardDetailed } from '../CardDetailed/CardDetailed';
import {
  setDetailedCards,
  removeDetailedCards,
} from '../CardDetailed/CardDetailedSlice';
import { RootState } from '../../store';

export function CardsField({ starships, loading, error }: MainPageProps) {
  const dispatch = useDispatch();
  const detailedCards = useSelector(
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
      if (
        detailedCards.some((card: { url: string }) => card.url === data.url)
      ) {
        dispatch(removeDetailedCards(data.url));
      } else {
        dispatch(setDetailedCards(data));
      }
    } catch (error) {
      console.error(error);
    }
  }

  const selectedCardsCount = Number(detailedCards.length);

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
        <div className="field__detailed">
          {detailedCards.map((starship: Starship) => (
            <CardDetailed key={starship.url} starship={starship} />
          ))}
        </div>
      </div>
      {selectedCardsCount > 0 && (
        <div className="footer">
          <div className="footer__content">
            <span>selected cards: {selectedCardsCount}</span>
          </div>
        </div>
      )}
    </div>
  );
}

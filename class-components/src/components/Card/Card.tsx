import { CardProps } from '../../interfaces/intrefaces';
import './Card.scss';

export function Card({ starship, onCardClick }: CardProps) {

  return (
    <li className="field__item" data-url={starship.url} onClick={() => onCardClick(starship.url)}>
      <h3>Name: {starship.name}</h3>
      <p>Model: {starship.model}</p>
    </li>
  );
}

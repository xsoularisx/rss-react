import { Starship } from '../../interfaces/intrefaces';

export function Card({ starship }: { starship: Starship }) {
  return (
    <li className="field__item">
      <h3>
        Name: <span>{starship.name}</span>
      </h3>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost: {starship.cost_in_credits} credits</p>
      <p>Length: {starship.length} meters</p>
      <p>Max Speed: {starship.max_atmosphering_speed} km/h</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo Capacity: {starship.cargo_capacity} kg</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Starship Class: {starship.starship_class}</p>
    </li>
  );
}

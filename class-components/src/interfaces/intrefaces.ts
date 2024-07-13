import { ErrorInfo } from 'react';

export interface MainPageProps {
  starships: Starship[];
  loading: boolean;
  error: string | null;
  searchResults: Starship[];
}

export interface Starship {
  url: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
}

export interface SearchFieldProps {
  onSearchUpdate: (results: Starship[]) => void;
}

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

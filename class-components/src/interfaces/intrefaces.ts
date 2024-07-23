import { ErrorInfo } from 'react';

export interface MainPageState {
  starships: Starship[];
  loading: boolean;
  error: string | null;
  count: number;
  currentPage: number;
}

export interface MainPageProps {
  starships: Starship[];
  loading: boolean;
  error: string | null;
  searchResults: Starship[];
}

export interface FetchStarshipsParams {
  query: string;
  page: number;
}

export interface FetchStarshipsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: never[];
}

export interface Starship {
  url?: string;
  name: string;
  model: string;
  manufacturer?: string;
  cost_in_credits?: string;
  length?: string;
  max_atmosphering_speed?: string;
  crew?: string;
  passengers?: string;
  cargo_capacity?: string;
  consumables?: string;
  hyperdrive_rating?: string;
  MGLT?: string;
  starship_class?: string;
}

export interface CardProps {
  starship: Starship;
  onCardClick: (url: string) => void;
}

export interface CardDetailedProps {
  starship: Starship;
}

export interface SearchFieldProps {
  onSearchUpdate: (results: Starship[], query: string) => void;
  searchQuery: string;
}

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface PaginationProps {
  count: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

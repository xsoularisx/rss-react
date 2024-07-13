import { useState, useEffect } from 'react';
import { CardsField } from '../../components/CardsField/CardsField';
import { MainPageProps, Starship } from '../../interfaces/intrefaces';
import { SearchField } from '../../components/SearchField/SearchField';
import { ErrorButton } from '../../components/ErrorButton/ErrorButton';

export function MainPage() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Starship[]>([]);

  useEffect(() => {
    fetchData();
    return () => {
      localStorage.removeItem('lastSearchQuery');
    };
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('https://swapi.dev/api/starships/');
      const data = await response.json();
      setStarships(data.results);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error as string);
    }
  }

  function updateSearchResults(results: Starship[]) {
    setSearchResults(results);
  }

  const cardsFieldProps: MainPageProps = {
    starships,
    loading,
    error,
    searchResults,
  };

  return (
    <>
      <ErrorButton />
      <SearchField onSearchUpdate={updateSearchResults} />
      <CardsField {...cardsFieldProps} />
    </>
  );
}

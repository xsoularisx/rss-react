import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CardsField } from '../../components/CardsField/CardsField';
import { MainPageProps, Starship } from '../../interfaces/intrefaces';
import { SearchField } from '../../components/SearchField/SearchField';
import { ErrorButton } from '../../components/ErrorButton/ErrorButton';
import { Pagination } from '../../components/Pagination/Pagination';

export function MainPage() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Starship[]>([]);
  const [countStarships, setCountStarships] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');
    const query =
      searchParams.get('query') ||
      localStorage.getItem('lastSearchQuery') ||
      '';
    setCurrentPage(page ? parseInt(page) : 1);
    setSearchQuery(query);
    fetchData(page ? parseInt(page) : 1, query);
    return () => {
      localStorage.removeItem('lastSearchQuery');
    };
  }, [searchParams, searchQuery, searchResults, currentPage]);

  async function fetchData(page = 1, query = '') {
    try {
      setLoading(true);
      const url = `https://swapi.dev/api/starships/?search=${query}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      setStarships(data.results);
      setCountStarships(data.count);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error as string);
    }
  }

  function updateSearchResults(results: Starship[], query: string) {
    setSearchResults(results);
    setCountStarships(results.length);
    setCurrentPage(1);
    setSearchQuery(query || '');
    localStorage.setItem('lastSearchQuery', query);
    navigate(`?query=${query}&page=1`);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    const query = searchParams.get('query') || '';
    if (query === '') {
      navigate(`?page=${page}`);
    } else {
      localStorage.setItem('lastSearchQuery', query);
      navigate(`?query=${query}&page=${page}`);
    }
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
      <SearchField
        onSearchUpdate={updateSearchResults}
        searchQuery={searchQuery}
      />
      <Pagination
        count={countStarships}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <CardsField {...cardsFieldProps} />
    </>
  );
}

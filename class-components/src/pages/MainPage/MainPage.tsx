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
    const query = searchParams.get('query') || '';
    setCurrentPage(page ? parseInt(page) : 1);
    setSearchQuery(query);
    fetchData(page ? parseInt(page) : 1, query);
    return () => {
      localStorage.removeItem('lastSearchQuery');
    };
  }, [searchParams]);

  async function fetchData(page = 1, query = '') {
    try {
      setLoading(true);
      let url;
      if (query === '') {
        url = `https://swapi.dev/api/starships/?page=${page}`;
        navigate(`?page=${page}`);
      } else {
        url = `https://swapi.dev/api/starships/?search=${query}`;
      }
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
    setSearchQuery(query);
    navigate(`?query=${query}`);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    navigate(`?page=${page}`);
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

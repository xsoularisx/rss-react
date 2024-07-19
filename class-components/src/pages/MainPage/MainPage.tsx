import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardsField } from '../../components/CardsField/CardsField';
import { SearchField } from '../../components/SearchField/SearchField';
import { ErrorButton } from '../../components/ErrorButton/ErrorButton';
import { Pagination } from '../../components/Pagination/Pagination';
import { Starship } from '../../interfaces/intrefaces';

export function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const query = searchParams.get('query') || localStorage.getItem('lastSearchQuery') || '';

  const [starships, setStarships] = useState<Starship[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://swapi.dev/api/starships/?search=${query}&page=${page}`);
        const data = await response.json();
        setStarships(data.results);
        setCount(data.count);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ query, page: newPage.toString() });
  };

  const handleSearch = (newQuery: string) => {
    localStorage.setItem('lastSearchQuery', newQuery);
    setSearchParams({ query: newQuery, page: '1' });
  };

  return (
    <>
      <ErrorButton />
      <SearchField onSearch={handleSearch} />
      <Pagination count={count} currentPage={page} onPageChange={handlePageChange} />
      <CardsField starships={starships} loading={loading} error={error} searchResults={[]} />
    </>
  );
}

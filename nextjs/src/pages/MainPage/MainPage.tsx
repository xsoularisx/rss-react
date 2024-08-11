import { useEffect, useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { CardsField } from '../../components/CardsField/CardsField';
import { ErrorButton } from '../../components/ErrorButton/ErrorButton';
import {
  fetchStarships,
  selectStarships,
  selectLoading,
  selectError,
  selectCount,
} from './MainPageSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { FetchStarshipsParams } from '../../interfaces/intrefaces';
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../components/ThemeProvider/ThemeProvider';
import { SearchField } from '../../components/SearchField/SearchField';
import { Pagination } from '../../components/Pagination/Pagination';

export function MainPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams?.get('page') || '1', 10);
  const queryParam =
    searchParams?.get('query') || localStorage.getItem('lastSearchQuery') || '';

  const dispatch =
    useDispatch<ThunkDispatch<unknown, FetchStarshipsParams, AnyAction>>();
  const starships = useSelector(selectStarships);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const count = useSelector(selectCount);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(fetchStarships({ query: queryParam, page }));
  }, [dispatch, queryParam, page]);

  const handlePageChange = (newPage: number) => {
    dispatch(fetchStarships({ query: '', page: newPage }));
  };

  const handleSearch = (newQuery: string) => {
    dispatch(fetchStarships({ query: newQuery, page: 1 }));
  };

  return (
    <div className={`${theme}`}>
      <ErrorButton />
      <ThemeToggle />
      <SearchField onSearch={handleSearch} />
      <Pagination
        count={count}
        currentPage={page}
        onPageChange={handlePageChange}
      />
      <CardsField
        starships={starships}
        loading={loading}
        error={error}
        searchResults={[]}
      />
    </div>
  );
}

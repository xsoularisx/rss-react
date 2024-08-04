import { useEffect, useContext } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardsField } from '../../components/CardsField/CardsField';
import { SearchField } from '../../components/SearchField/SearchField';
import { ErrorButton } from '../../components/ErrorButton/ErrorButton';
import { Pagination } from '../../components/Pagination/Pagination';
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

export function MainPage() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = parseInt(searchParams.get('page') || '1', 10);
  // const query =
  //   searchParams.get('query') || localStorage.getItem('lastSearchQuery') || '';

  // const dispatch =
  //   useDispatch<ThunkDispatch<unknown, FetchStarshipsParams, AnyAction>>();
  // const starships = useSelector(selectStarships);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const count = useSelector(selectCount);

  // useEffect(() => {
  //   dispatch(fetchStarships({ query, page }));
  // }, [dispatch, query, page]);

  // const handlePageChange = (newPage: number) => {
  //   setSearchParams({ query, page: newPage.toString() });
  // };

  // const handleSearch = (newQuery: string) => {
  //   localStorage.setItem('lastSearchQuery', newQuery);
  //   setSearchParams({ query: newQuery, page: '1' });
  // };

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <ErrorButton />
      <ThemeToggle />
      {/* <SearchField onSearch={handleSearch} />
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
      /> */}
    </div>
  );
}

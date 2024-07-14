import './SearchField.scss';
import { ChangeEvent, useState, useEffect } from 'react';
import { SearchFieldProps } from '../../interfaces/intrefaces';
import { Loader } from '../Loader/Loader';

export function SearchField({ onSearchUpdate }: SearchFieldProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>(getHistory());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setSearchHistory(getHistory());
  }, [inputValue]);

  function setHistory(query: string) {
    localStorage.setItem('lastSearchQuery', query);
    const history = getHistory();
    if (history.includes(query)) {
      localStorage.setItem('searchHistory', JSON.stringify(history));
      setSearchHistory(history);
      return;
    }

    const updatedHistory = [...history, query];

    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    setSearchHistory(updatedHistory);
  }

  function getHistory(): string[] {
    const searchHistory = localStorage.getItem('searchHistory');
    return searchHistory ? JSON.parse(searchHistory) : [];
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  async function handleSearch() {
    setIsLoading(true);
    try {
      let url;
      if (inputValue.trim() === '') {
        url = `https://swapi.dev/api/starships/?page=1`;
      } else {
        url = `https://swapi.dev/api/starships/?search=${inputValue.trim()}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.results);
      setIsLoading(false);
      onSearchUpdate(data.results, inputValue);
      setHistory(inputValue.trim());
      console.log(searchResults);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <>
      <h1 className="search__title">search</h1>
      <form
        className="search"
        onSubmit={e => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="search__input"
          type="text"
          placeholder="enter your request"
          value={inputValue}
          onChange={handleInputChange}
          list="search-history"
        />
        <datalist id="search-history">
          {searchHistory.map((query, index) => (
            <option key={index} value={query} />
          ))}
        </datalist>
        <button className="search__button" type="submit">
          search
        </button>
      </form>
      {isLoading ? <Loader /> : false}
    </>
  );
}

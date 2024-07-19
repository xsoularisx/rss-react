import { useState } from 'react';
import './SearchField.scss';

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

export function SearchField({ onSearch }: SearchFieldProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <>
      <h1 className="search__title">search</h1>

      <div className="search">
        <input
          className="search__input"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="enter your request"
        />
        <button className="search__button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
}

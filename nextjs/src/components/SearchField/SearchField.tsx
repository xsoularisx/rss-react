import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import './SearchField.scss';

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

export function SearchField({ onSearch }: SearchFieldProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const query = searchParams?.get('query') || localStorage.getItem('lastSearchQuery') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('lastSearchQuery', searchQuery);
    onSearch(searchQuery);
    router.push(`/?query=${searchQuery}`);
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

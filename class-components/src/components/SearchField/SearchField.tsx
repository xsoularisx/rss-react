import { ChangeEvent, Component } from 'react';
import './SearchField.scss';
import { SearchFieldProps } from '../../interfaces/intrefaces';
import Loader from '../Loader/Loader';

class SearchField extends Component<SearchFieldProps> {
  setHistory = (query: string) => {
    localStorage.setItem('lastSearchQuery', query);
    const searchHistory = this.getHistory();
    if (searchHistory.includes(query)) {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
      this.setState({ searchHistory });
      return;
    }

    const updatedHistory = [...searchHistory, query];
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    this.setState({ searchHistory: updatedHistory });
  };

  getHistory = (): string[] => {
    const searchHistory = localStorage.getItem('searchHistory');
    return searchHistory ? JSON.parse(searchHistory) : [];
  };

  state = {
    inputValue: '',
    searchResults: [],
    searchHistory: this.getHistory(),
    isLoading: false,
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSearch = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `https://swapi.dev/api/starships/?search=${this.state.inputValue.trim()}`,
      );
      const data = await response.json();
      this.setState({
        searchResults: data.results,
        isLoading: false,
      }, () => {
        this.props.onSearchUpdate(this.state.searchResults);
        this.setHistory(this.state.inputValue.trim());
      });
      console.log(data.results);
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { inputValue, searchHistory, isLoading } = this.state;
    return (
      <>
        <h1 className="search__title">search</h1>
        <form
          className="search"
          onSubmit={e => {
            e.preventDefault();
            this.handleSearch();
          }}
        >
          <input
            className="search__input"
            type="text"
            placeholder="enter your request"
            value={inputValue}
            onChange={this.handleInputChange}
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
        {isLoading ? (<Loader />) : false}
      </>
    );
  }
}

export default SearchField;

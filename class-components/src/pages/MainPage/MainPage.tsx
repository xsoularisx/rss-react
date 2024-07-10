import { Component } from 'react';
import CardsField from '../../components/CardsField/CardsField';
import { MainPageProps, Starship } from '../../interfaces/intrefaces';
import SearchField from '../../components/SearchField/SearchField';

class MainPage extends Component<{}, MainPageProps> {
  state = {
    starships: [],
    loading: true,
    error: null,
    searchResults: [],
  };

  async componentDidMount() {
    await this.fetchData();
  }

  componentWillUnmount() {
    localStorage.removeItem('lastSearchQuery');
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/starships/');
      const data = await response.json();
      this.setState({
        starships: data.results,
        loading: false,
        error: null,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error as string,
      });
    }
  };

  updateSearchResults = (results: Starship[]) => {
    this.setState({ searchResults: results });
  };

  render() {
    const { starships, loading, error, searchResults } = this.state;
    const cardsFieldProps: MainPageProps = {
      starships,
      loading,
      error,
      searchResults,
    };
    return (
      <>
        <SearchField onSearchUpdate={this.updateSearchResults} />
        <CardsField {...cardsFieldProps} />
      </>
    );
  }
}

export default MainPage;

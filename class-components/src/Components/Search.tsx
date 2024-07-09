import React from 'react';
import { FaSearch } from 'react-icons/fa';
import style from '../Styles/Search.module.css';

interface SearchState {
  search: string;
}

interface SearchProps {
  handleSearch: (query: string) => void;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(prop: SearchProps) {
    super(prop);
    this.state = {
      search: localStorage.getItem('lastSearch') || '',
    };
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('lastSearch');
    if (savedSearchTerm) {
      this.setState({ search: savedSearchTerm });
    }
  }
  handleSearch = async () => {
    this.props.handleSearch(this.state.search);
    localStorage.setItem('lastSearch', this.state.search);
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div className={style.wrapper}>
        <input type="text" value={this.state.search} onChange={this.handleInputChange} placeholder="Enter..." />
        <button onClick={this.handleSearch}>
          <FaSearch />
        </button>
      </div>
    );
  }
}

export default Search;

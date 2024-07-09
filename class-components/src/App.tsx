import React from 'react';
import './App.css';
import animal, { Animal } from './API/api.tsx';
import Search from './Components/Search.tsx';
import Card from './Components/Card.tsx';
import ErrorButton from './Components/ErrorButton.tsx';

interface Response {
  results: Animal[];
}

class App extends React.Component<object, Response> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const newState: Animal[] = await animal();
    this.setState({ results: newState });
    console.log(newState);
  }

  handleSearch = (query: string): void => {
    console.log(query);
  };

  render() {
    return (
      <div className="wrapper">
        <ErrorButton />
        <Search handleSearch={this.handleSearch} />
        <Card animals={this.state.results} />
      </div>
    );
  }
}

export default App;

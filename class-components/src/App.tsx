import React from 'react';
import './App.css';
import animal, { Animal } from './API/api.tsx';
import Search from './Components/Search.tsx';
import Card from './Components/Card.tsx';
import ErrorButton from './Components/ErrorButton.tsx';
import findApi, { Resp } from './API/FindApi.tsx';

interface Response {
  results: Animal[] | string;
}

class App extends React.Component<object, Response> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const newState: Animal[] | undefined = await animal();
    if (newState) this.setState({ results: newState });
  }

  handleSearch = async (query: string): Promise<void> => {
    const response: Resp | undefined = await findApi(query);
    if (response) this.setState({ results: [response.animal] });
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

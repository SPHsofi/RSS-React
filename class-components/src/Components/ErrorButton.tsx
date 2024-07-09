import React from 'react';
import style from '../Styles/ErrorBoundary.module.css';

interface BtnState {
  hasError: boolean;
}

class ErrorButton extends React.Component<never, BtnState> {
  constructor(props: never) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      throw new Error('Test error');
    }
  }

  throwError = () => {
    this.setState({ hasError: true });
  };

  render() {
    return (
      <button className={style.errorBtn} onClick={this.throwError}>
        Add error
      </button>
    );
  }
}

export default ErrorButton;

import React from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import style from '../Styles/ErrorBoundary.module.css';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<Props, ErrorBoundaryState> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error + errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.errorWrapp}>
          <BiErrorAlt className={style.img} />
          <h1 className={style.text}>Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component, ErrorInfo, ReactNode } from 'react';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../interfaces/intrefaces';
import './ErrorBoundary.scss';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render(): ReactNode {
    if (this.state.errorInfo) {
      return (
        <div className="boundary">
          <h1 className="boundary__title">something went wrong.</h1>
          <button
            className="boundary__button"
            onClick={() => location.reload()}
          >
            restart page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

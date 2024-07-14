import { Component, ReactNode } from 'react';
import { ErrorButtonState } from '../../interfaces/intrefaces';
import './ErrorButton.scss';

class ErrorButton extends Component<object, ErrorButtonState> {
  state = {
    hasError: false,
  };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      throw new Error();
    }
    return (
      <div className="error__container">
        <button className="error__button" onClick={() => this.handleClick()}>
          throw error
        </button>
      </div>
    );
  }
}

export default ErrorButton;

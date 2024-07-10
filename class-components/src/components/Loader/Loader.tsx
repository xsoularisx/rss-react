import { Component } from 'react';
import './Loader.scss'

class Loader extends Component {
  render() {
    return (
      <div className="loading">
        <h2 className="loading__txt">loading</h2>
        <div className="loading__animation"></div>
      </div>
    );
  }
}

export default Loader;

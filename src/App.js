import React, { Component } from 'react';

import './App.css';
import CurrencyHOC from './components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>HOC</h2>
        <CurrencyHOC/>
      </>
    );
  }
}

export default App;

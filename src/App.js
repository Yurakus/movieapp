import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

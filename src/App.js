import React, { Component } from 'react';
import UnnecessaryRenders from './examples/unnecessary-renders';
import Exercise01 from './exercises/01/';
import Exercise02 from './exercises/02/';
import Exercise03 from './exercises/03/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*
          <UnnecessaryRenders />
          <Exercise01 />
          <Exercise02 />
        */}
        <Exercise03 />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { SortContainer } from './components/SortContainer/SortContainer';
import './stylesheets/App.css';
import {NewApplicationButton} from './components/buttons/newApplicationButton';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SortContainer />
      <NewApplicationButton  />
    </div>
  );
}

export default App;

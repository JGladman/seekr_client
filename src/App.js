import React from 'react';

import { SortContainer } from './components/SortContainer/SortContainer';
import { CreateApplicationForm } from './components/CreateApplicationForm/CreateApplicationForm';
import './stylesheets/App.css';
import { NewApplicationButton } from './components/buttons/newApplicationButton';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NewApplicationButton />
    </div>
  );
}

export default App;

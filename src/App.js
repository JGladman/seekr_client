import React from 'react';

import { SortContainer } from './components/SortContainer/SortContainer';
import { CreateApplicationForm } from './components/CreateApplicationForm/CreateApplicationForm';
import './stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <SortContainer />
      <CreateApplicationForm />
    </div>
  );
}

export default App;

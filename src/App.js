import React from 'react';
import './stylesheets/App.css';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <header className='container mx-auto px-2 bg-gray-600'>
      <NavBar/>
    </header>
  );
};

export default App;
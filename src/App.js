import React from 'react';
import { Applications } from './components/Applications/Applications';
import NavBar from './components/navbar/navbar';
import './stylesheets/App.css';

function App() {
  return (
    <div>
      <header className='mx-auto px-2 bg-gray-600'>
        <NavBar/>
      </header>
      <body>
        <div>
          <Applications />
        </div>
      </body>
    </div>
  )
}

export default App;

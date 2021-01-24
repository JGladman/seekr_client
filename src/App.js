import React from 'react';
import { Applications } from './components/Applications/Applications';
import {SortContainer} from './components/SortContainer/SortContainer'
import {CreateApplicationForm} from './components/CreateApplicationForm/CreateApplicationForm'
import './stylesheets/App.css';

function App() {
  return (
    <div>
      <header>
        Insert NavBar
      </header>
      <div>
        <body className='static w-full h-full bg-red-200'>
          <div>
            <Applications />
          </div>
          <div className='items-stretch fixed bottom-60 right-0 h-96 w-96'>
            {/* <SortContainer /> */}
          </div>
          <div className='fixed bottom-24 right-0 h-96 w-96'>
            <CreateApplicationForm />
          </div>
          <div>
            <p>New Application Button</p>
          </div>
        </body>
        </div>
    </div>
  )
}

export default App;

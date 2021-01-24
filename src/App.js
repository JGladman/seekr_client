import React from 'react';
import { Applications } from './components/Applications/Applications';
import {SortContainer} from './components/SortContainer/SortContainer'
import {CreateApplicationForm} from './components/CreateApplicationForm/CreateApplicationForm'
import NavBar from './components/Navbar/navbar';
import './stylesheets/App.css';

function App() {
  return (
    <div>
      <header className='mx-auto px-2 bg-gray-600'>
        <NavBar/>
      </header>
      <div className='bg-gray=800 h-screen w-screen'>
        <body >
          <div>
            <Applications />
          </div>
          <div className='items-stretch fixed bottom-60 right-0 h-96 w-96'>
            <SortContainer />
          </div>
          <div className='fixed bottom-24 right-0 h-96 w-96'>
            {/* <CreateApplicationForm /> */}
          </div>
          <div>
            {/* <p>New Application Button</p> */}
          </div>
        </body>
        </div>
    </div>
  )
}

export default App;

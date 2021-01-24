import React from 'react';
import Title from './title';
import Searchbar from './searchbar';
import SearchBar from './searchbar';


const NavBar = (props) => (
  // wholenavbar
  <div className="flex flex-row items-center py-2">
    <div className=''>
      <p><SearchBar/></p>
{/* Just the Searchbar */}
    </div>
    <div className='w-2/5 flex-shrink'></div>
    <div className=''> 
      <Title/>
{/* Just the Title */}
    </div>
    <div className='w-3/5 flex-shrink'></div>
  </div>
);

export default NavBar; 
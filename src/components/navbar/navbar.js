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
    <div className='w-96 flex-1'></div>
    <div className='border border-gray-200'> 
      <Title/>
{/* Just the Title */}
    </div>
    <div className='w-96 flex-1'></div>
  </div>
);

export default NavBar;
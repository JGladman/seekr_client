import React from 'react';
import Title from './title';
import SearchBar from './searchBar';

const NavBar = (props) => (
  // wholenavbar
  <div className="flex flex-row items-center py-2">
    <div className="">
      {/* <p>
        <SearchBar />
      </p> */}
      {/* Just the Searchbar */}
    </div>
    <div className="w-3/5 flex-shrink"></div>
    <div className="w-72 pl-16">
      <Title />
      {/* Just the Title */}
    </div>
    <div className="w-3/5 flex-shrink"></div>
  </div>
);

export default NavBar;

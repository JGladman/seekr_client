import React from 'react';

const SearchBar = (props) => {
  return(
    <div className="bg-gray-800 rounded-md">
      <div className="relative text-gray-600 focus-within:text-gray-400 ">
        <span class="flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
        </span>
      </div>
    </div>
  );
};
export default SearchBar;
import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
    return (
      <div>
        <input
          type="text"
          placeholder="🔍 Search by name or description"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value.trim())}
        />
        <button
          onClick={() => onSearch('')}
        >
          clear
        </button>

      </div>
    );
  }
  
  export default SearchBar;
  
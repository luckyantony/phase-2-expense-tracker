function SearchBar({ searchTerm, onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by name or description"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  
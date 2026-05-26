import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const formStyle = {
    display: 'flex',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: 'var(--shadow-sm)',
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
  };

  const inputStyle = {
    flexGrow: 1,
    padding: '15px 20px',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: 'var(--color-white)',
  };

  const buttonStyle = {
    padding: '0 25px',
    backgroundColor: 'var(--color-orange)',
    color: 'var(--color-white)',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <form onSubmit={handleSearch} style={formStyle}>
      <input
        type="text"
        placeholder="Search for recipes, ingredients..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;

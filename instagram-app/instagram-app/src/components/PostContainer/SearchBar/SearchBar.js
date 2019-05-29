import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
    <div>
      <form onSubmit={props.search}>
        <input
          className="search-input"
          placeholder="Search"
          onChange={props.changeHandler}
          value={props.searchQuery}>
        </input>
      </form>
    </div>
  )
}

export default SearchBar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown';
import '../styles/FilterBar.css';

const FilterBar = () => {
  const genre = ["action", "comedy", "horror"];
  const year = [1991, 1997, 2001];

  return(
    <div>
      <div className="container">
        <Dropdown title={"GENRE"} list={genre}/>
        <Dropdown title={"YEAR"} list={year} />
        <div className="search">
          <input type="search" placeholder="Search term" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="container">
        <input type="radio" name="type" value="movies" /> Movies
        <input type="radio" name="type" value="books" /> Books
        <button>CLEAR FILTERS</button>
      </div>
    </div>
  );
}

export default FilterBar;

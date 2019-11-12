import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { setType, applyFilters, clearFilters } from '../redux/actions';
import Dropdown from './Dropdown';
import '../styles/FilterBar.css';

const FilterBar = () => {
  const genreList = useSelector(state => state.genreList);
  const yearList = useSelector(state => state.yearList);
  const type = useSelector(state => state.type);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearFilters())
  }

  const handleChange = (e) => {
    dispatch(setType(e.target.value))
    dispatch(applyFilters())
  }

  return(
    <div className="filterbar">
      <div className="container filter-row">
        <div className="container">
          <Dropdown title={"genre"} list={genreList}/>
          <Dropdown title={"year"} list={yearList} />
        </div>
        <div className="search">
          <input type="text" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="container filter-row">
        <div className="container">
          <input 
            type="radio" 
            name="type" 
            value="movie" 
            checked={type === "movie"} 
            onChange={(e) => handleChange(e)}
          /> Movies
          <input 
            type="radio" 
            name="type" 
            value="book" 
            checked={type === "book"} 
            onChange={(e) => handleChange(e)}
          /> Books
        </div>
        <button className="clear-filter" onClick={() => handleClick()}>CLEAR FILTERS</button>
      </div>
    </div>
  );
}

export default FilterBar;

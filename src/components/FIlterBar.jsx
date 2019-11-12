import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { setMediaList } from '../redux/actions';
import Dropdown from './Dropdown';
import '../styles/FilterBar.css';

const FilterBar = () => {
  const genreList = useSelector(state => state.genreList);
  const yearList = useSelector(state => state.yearList);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMediaList([]));
  }

  return(
    <div>
      <div className="container">
        <Dropdown title={"genre"} list={genreList}/>
        <Dropdown title={"year"} list={yearList} />
        <div className="search">
          <input type="search" placeholder="Search term" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="container">
        <input type="radio" name="type" value="movies" /> Movies
        <input type="radio" name="type" value="books" /> Books
        <button onClick={() => handleClick()}>CLEAR FILTERS</button>
      </div>
    </div>
  );
}

export default FilterBar;

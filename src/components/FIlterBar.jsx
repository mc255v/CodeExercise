import React from 'react';
import Dropdown from './Dropdown';

const FilterBar = () => {
  const list = ["action", "comedy", "horror"];

  return(
    <div>
      <Dropdown list={list}/>
    </div>
  );
}

export default FilterBar;

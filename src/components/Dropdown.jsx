import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import filter from '../utils/filter';
import '../styles/Dropdown.css';

const Dropdown = ({title, list}) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState(faChevronDown)

  const handleClick = () => {
    icon.iconName === "chevron-down" ? setIcon(faChevronUp) : setIcon(faChevronDown);
    setShowDropdown(!showDropdown);
  }

  return(
    <div className="dropdown">
      <button onClick={() => handleClick()}>{title} <FontAwesomeIcon icon={icon} /></button>
      {showDropdown && <ul className="dd-list">
        {list.map((item, index) => (
          <li className="dd-list-item" key={index} >
            <input type="checkbox" id={item} name={item} value={item} />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default Dropdown;

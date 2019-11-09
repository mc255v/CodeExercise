import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({list}) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const [icon, setIcon] = useState(faChevronDown)

  return(
    <div>
      <button>Genre <FontAwesomeIcon icon={icon} /></button>
      {showDropdown && <ul className="dropdown">
        {list.map((item, index) => (
          <li className="dd-list-item" key={index} >
            <input type="checkbox" name={item} value={item} />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default Dropdown;

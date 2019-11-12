import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { updateFilterList} from '../redux/actions';
import '../styles/Dropdown.css';

const Dropdown = ({title, list}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [icon, setIcon] = useState(faChevronUp);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!showDropdown) {
      setIcon(faChevronDown);
      setShowDropdown(true);
      document.addEventListener('click', closeFilter);
    }
    console.log(list)
  }

  const handleChange = (e) => {
    const update = {
      type: title.toLowerCase(), 
      key: e.target.value, 
      value: e.target.checked
    };
    dispatch(updateFilterList(update))
    console.log(update)
    console.log(list)
  }

  const closeFilter = (e) => {
    if (e.target.parentElement.className !== "dd-list-item") {
      setIcon(faChevronUp);
      setShowDropdown(false);
      document.removeEventListener('click', closeFilter);
      console.log('removed')
    } else {
      console.log('dont close')
    }
    
  }

  return(
    <div className="dropdown">
      <button id={title} onClick={() => handleClick()}>{title.toUpperCase()} <FontAwesomeIcon icon={icon} /></button>
      {showDropdown && <ul className="dd-list">
        {Object.keys(list).map((key, index) => (
          <li className="dd-list-item" key={index} >
            <input 
              type="checkbox" 
              id={key} 
              name={key} 
              value={key}
              checked={list[key]}
              onChange={e => handleChange(e)}
            />
            <label htmlFor={key}>{key.toUpperCase()}</label>
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default Dropdown;

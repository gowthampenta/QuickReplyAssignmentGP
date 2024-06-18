// src/components/Dropdown/Dropdown.jsx

import React, { useState, useEffect } from 'react';
import { Info, UserCircle } from 'phosphor-react';
import './Dropdown.scss';

const Dropdown = ({
  label,
  labelVisibility,
  status,
  labelIconVisibility,
  leftIconVisibility,
  helperText,
  required,
  text,
  type,
  activeItemIndex,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(activeItemIndex);

  useEffect(() => {
    setSelectedIndex(activeItemIndex);
  }, [activeItemIndex]);

  const handleSelect = (index) => {
    setSelectedIndex(index);
    setIsOpen(false);
    onSelect(items[index]);
  };

  const renderItems = () => {
    if (type === 'Multi') {
      return items.map((item, index) => (
        <label key={index} className="dropdownItem">
          <input
            type="checkbox"
            checked={selectedIndex === index}
            onChange={() => handleSelect(index)}
          />
          {item}
        </label>
      ));
    }

    if (type === 'SingleRadio') {
      return items.map((item, index) => (
        <label key={index} className="dropdownItem">
          <input
            type="radio"
            name="dropdownRadio"
            checked={selectedIndex === index}
            onChange={() => handleSelect(index)}
          />
          {item}
        </label>
      ));
    }

    return items.map((item, index) => (
      <div
        key={index}
        className={`dropdownItem ${selectedIndex === index ? 'active' : ''}`}
        onClick={() => handleSelect(index)}
      >
        {item}
      </div>
    ));
  };

  const dropdownStatusClass = () => {
    switch (status) {
      case 'Filled':
        return 'filled';
      case 'Disabled':
        return 'disabled';
      case 'Error':
        return 'error';
      default:
        return '';
    }
  };

  return (
    <div className="dropdownContainer">
      {labelVisibility === 'Visible' && (
        <label className="dropdownLabel">
          {labelIconVisibility === 'Visible' && <Info className="infoIcon" />}
          {label} {required === 'Yes' && '*'}
        </label>
      )}
      <div
        className={`dropdown ${dropdownStatusClass()}`}
        onClick={() => status !== 'Disabled' && setIsOpen(!isOpen)}
      >
        {leftIconVisibility === 'Visible' && <UserCircle className="leftIcon" />}
        <input
          type="text"
          value={text}
          className="dropdownInput"
          readOnly
          disabled={status === 'Disabled'}
        />
      </div>
      {isOpen && <div className="dropdownMenu">{renderItems()}</div>}
      {helperText && <div className="helperText">{helperText}</div>}
    </div>
  );
};

export default Dropdown;

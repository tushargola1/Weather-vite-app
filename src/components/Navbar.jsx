import React, { useState, useRef } from 'react';
import '../styles/navbar.css';

const Navbar = ({ onColorChange,  onEnter  }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const inputVal = useRef(null);

  const handleButtonClick = () => {
    if (isButtonClicked) {
      onColorChange('ngt');
    } else {
      onColorChange('sn');
    }

    setIsButtonClicked(!isButtonClicked);
  };
let val = true
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      const inputValue = inputVal.current.value;
      onEnter(inputValue);
      val = false
    }
  };

  return (
    <>
      <nav>
        <h1>Weather</h1>
        <div
          className="input"
          style={{
            background: isButtonClicked
              ? 'rgba( 255, 255, 255, 0.15 )'
              : 'rgba( 0, 0, 0, 0.15 )',
          }}
        >
          <button className="fa fa-search"></button>
          <input
            className="fa fa-search"
            style={{ color: isButtonClicked ? 'black' : 'white' }}
            placeholder="Search for your preferred city..."
            ref={inputVal}
            onKeyPress={handleKey}
          />
        </div>

        <button
          className={`fa-solid ${isButtonClicked ? 'fa-moon' : 'fa-sun'}`}
          onClick={handleButtonClick}
          id="toggleButton"
        ></button>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import '../styles/navbar.css'
const Navbar = ({ onColorChange }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    if (isButtonClicked) {
      onColorChange('ngt');
    } else {
      onColorChange('sn');
    }

    // Toggle the button click state
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
    <nav>
      <button className={`fa-solid ${isButtonClicked ? 'fa-moon' : 'fa-sun'}`} onClick={handleButtonClick} id='toggleButton'></button>
    
    <div className="input" style={{ background: isButtonClicked ? 'rgba( 255, 255, 255, 0.15 )' : 'rgba( 0, 0, 0, 0.15 )' }} >
    <button  className = 'fa fa-search'></button>
    <input className = 'fa fa-search' style={{ color: isButtonClicked ? 'black' : 'white' }} placeholder='Search for your preferred city...'/>
    </div>

      <div className="button">
    <button  className = 'fa fa-location'></button>
    <span  style={{ color: isButtonClicked ? 'black' : 'white' }} >Current Location</span>

      </div>
      
      
     
    </nav>
      
    </>
  );
};

export default Navbar;

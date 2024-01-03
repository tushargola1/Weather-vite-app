import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    'linear-gradient(135deg, rgba(70,71,71,1) 79%, rgba(43,42,43,1) 100%)'
  );

  const handleColorChange = (e) => {
    if(e == 'ngt'){
    setBackgroundColor('linear-gradient(135deg, rgba(70,71,71,1) 79%, rgba(43,42,43,1) 100%)');
  }
  else{
    setBackgroundColor('linear-gradient(85deg, rgba(203,204,208,1) 74%, rgba(135,139,142,1) 100%')
  }
  }

  return (
    <>
      <div style={{ background: backgroundColor, minHeight: '100vh', transition: 'background 0.3s' }}>
      
        <Navbar onColorChange={handleColorChange} />
      </div>
    </>
  );
}

export default App;

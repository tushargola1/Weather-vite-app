import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';

function App() {
  const [city , setCity] = useState('----')
  const [backgroundColor, setBackgroundColor] = useState(
    'linear-gradient(135deg, rgba(70,71,71,1) 22%, rgba(43,42,43,1) 100%)'
  );
    const [cardcolor , setCardColor] = useState('rgba( 0, 0, 0, 0.1 )')

    const [boxShadow , setBoxShadow] = useState('12px 11px 15px 2px #000000')


    const [faColor , setFaColor] = useState('white')
    const [celcius , setCelcius] = useState('rgb(202, 202, 202)')

  const handleColorChange = (e) => {
    if (e === 'ngt') {
      setBackgroundColor('linear-gradient(135deg, rgba(70,71,71,1) 22%, rgba(43,42,43,1) 100%)');
      setCardColor('rgba( 0, 0, 0, 0.1 )')
    setBoxShadow('12px 11px 15px 2px #000000')
    setFaColor('white')
    setCelcius('rgb(202, 202, 202)')
    
    } else {
      setBackgroundColor('linear-gradient(85deg, rgba(203,204,208,1) 74%, rgba(135,139,142,1) 100%)');
      setCardColor('#c7c7c7')
      setBoxShadow('-11px -11px 22px #9b9b9b, 11px 11px 22px #f3f3f')
      setFaColor('black')
      setCelcius('black')
    }
  };

  const handleClick =(e)=>{
  setCity(e)
  }


  return (
    <>
      <div style={{ background: backgroundColor, minHeight: '100vh', transition: 'background 0.3s' }}>
        <Navbar onColorChange={handleColorChange} onEnter={handleClick} />
        <Herosection city ={city} cardcolor = {cardcolor} boxShadow = {boxShadow} faColor = {faColor} celciusColor = {celcius}/>
      </div>
    </>
  );
}

export default App;
import { useState } from 'react';
import './App.css'
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Estructura from './Componentes/Estructura';

function App() {
  const [puto, setPuto] = useState(null);
  const [clicked, setClick] = useState(false);

  const click = () => {
    setClick(true);

    setTimeout(() => {
      fetchPuto();
    }, 1000);
  };

  const fetchPuto = async () => {
    try {
      const response = await fetch('/api/putos/today');
      const data = await response.json();
      setPuto(data.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
        {/* <Routes> */}
          <Estructura />


          <div className="card">
            {
              !clicked ? (
                <button onClick={click}>
                  ¿Quien es el Cowboy del día?
                </button>
              ) : (
                <div>
                  <p>El cowboy de hoy es....</p>
                  <h2>{puto}</h2>
                </div>
              )
            }
          </div>
        {/* </Routes> */}
    </>
  )
}

export default App

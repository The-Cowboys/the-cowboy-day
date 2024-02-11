import { useState } from 'react';
import './App.css'
import NavBar from './Componentes/NavBar';
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
    <NavBar />
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
    </>
  )
}

export default App

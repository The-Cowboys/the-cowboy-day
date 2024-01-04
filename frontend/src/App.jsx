import { useState } from 'react';
import './App.css'

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
      const response = await fetch('http://34.135.73.247/api/putos/today');
      const data = await response.json();
      setPuto(data.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="card">
        {
          !clicked ? (
            <button onClick={click}>
              ¿Quien es puto?
            </button>
          ) : (
            <div>
              <p>El puto de hoy es...</p>
              <h2>{puto}</h2>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App

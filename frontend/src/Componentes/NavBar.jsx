import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <h2>The Cowboys</h2>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Estadísticas</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
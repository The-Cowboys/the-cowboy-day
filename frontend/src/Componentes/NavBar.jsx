import React from "react";
import './Estilos.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <h2 className="tituloNav">The Cowboys</h2>
          <ul className="elementosNav">
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
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
            <li><Link to={"/"}>Inicio</Link></li>
            <li><Link to={"/Estadisticas"}>Estadisticas</Link></li>
            <li><Link to={"/Acerca"}>Acerca</Link></li>
            <li><Link to={"/Contacto"}>Contacto</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
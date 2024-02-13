import "./Estilos.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <h2 className="tituloNav">The Cowboys</h2>
          <img></img>
          <ul className="elementosNav">
            <li className="boton">
              <Link to={"/"}>Inicio</Link>
            </li>
            <li className="boton">
              <Link to={"/Estadisticas"}>Estadisticas</Link>
            </li>
            <li className="boton">
              <Link to={"/Acerca"}>Acerca</Link>
            </li>
            <li className="boton">
              <Link to={"/Contacto"}>Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

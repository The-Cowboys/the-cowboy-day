import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="nav container-fluid">
          <div className="d-flex align-items-center">
            <Link className="tituloNav navbar-brand" to="/">
              The Cowboys
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-crosshair"
              viewBox="0 0 16 16"
            >
              <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            </svg>
          </button>
          <div
            className="elementosNav collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Cowboy Del Dia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Acerca">
                  Acerca
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Estadisticas
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="EstadisticasElMasToto">
                      El más toto
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="EstadisticasCowboyDelDia"
                    >
                      Cowboy Del Dia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Proximamente">
                      --Próximamente--
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

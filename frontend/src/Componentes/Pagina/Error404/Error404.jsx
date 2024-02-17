import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <div className="fondoNav card mb-3">
        <img
          src="/Cowboys.png"
          className="fondoNav card-img-top"
          alt="Icono Cowboys"
        />
        <div className="fondoNav card-body">
          <h5 className="titulo card-title">Error 404</h5>
          <p className="fondoNav card-text">
            ¡Alto ahí, forastero! Parece que has encontrado un territorio
            desconocido en el vasto desierto digital. No te preocupes, nuestros
            sheriff de la red están en camino para guiarte de regreso al pueblo
            principal. Mientras tanto, ¿por qué no te relajas con un poco de
            música en nuestro salon virtual?
          </p>
          <div className="fondoNav">
            <Link to="/">
              <button type="button" className="btn btn-dark">
                Ir a la página principal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;

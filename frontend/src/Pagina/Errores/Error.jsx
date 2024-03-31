import { Link } from "react-router-dom";
import Botones from "../../Componentes/Botones.jsx";

const Error = () => {
  const button = {
    ruta: "/",
    infBoton: "Inicio",
  };

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="display-4">Error</h2>
            <p className="lead">
              Lo sentimos, la página que estás buscando no pudo ser encontrada.
            </p>
            <Link to="/">
              <img
                src="/CowboysBaliado.png"
                alt="Error"
                className="img-fluid mb-3 hoverImg"
                width="200"
                height="200"
              />
            </Link>
            <p className="errorDeErrores">Acceso Denegado por la Ley del Alcalde:</p>
            <p>
              ¡Alto ahí, forastero! Parece que has llegado a un territorio
              restringido por la ley del pueblo. No te preocupes, nuestros
              sheriff de la red están por llegar para llevarte al camino.
              Mientras tanto, ¿por qué no te relajas con un juego rápido de
              póker en nuestra taberna virtual?
            </p>
            <Botones button={button} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;

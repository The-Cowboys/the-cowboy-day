import { Link } from "react-router-dom";
import Botones from "../../Componentes/Botones.jsx";


const Error404 = () => {
  const button = {
    ruta: "/",
    infBoton: "Inicio",
  };

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="display-4">Error 404</h2>
            <p className="lead">
              Lo sentimos, la página que estás buscando no pudo ser encontrada.
            </p>
            <Link to="/">
              <img
                src="/Cowboys.png"
                alt="Error 404"
                className="img-fluid mb-3 hoverImg"
                width="200"
                height="200"
              />
            </Link>
            <p>
              Parece que has encontrado un territorio desconocido en el vasto
              desierto digital. No te preocupes, nuestros sheriff de la red
              están en camino para guiarte de regreso al pueblo principal.
              Mientras tanto, ¿por qué no te relajas con un poco de música en
              nuestro salon virtual?
            </p>
            <Botones button={button} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;

import Botones from "../../Botones.jsx";
import Tarjeta from "../InfoTonto/Tarjeta.jsx";

const Error404 = () => {
  const tarjeta = {
    persona: "Error 404",
    titulos: "¡Alto ahí, forastero!",
    listaTitulos:
      "Parece que has encontrado un territorio desconocido en el vasto desierto digital. No te preocupes, nuestros sheriff de la red están en camino para guiarte de regreso al pueblo principal. Mientras tanto, ¿por qué no te relajas con un poco de música en nuestro salon virtual?",
  };

  const button = {
    ruta: "/",
    infBoton: "Inicio",
  };

  return (
    <>
      <div>
        <Tarjeta tarjeta={tarjeta} />
        <Botones button={button} />
      </div>
    </>
  );
};

export default Error404;

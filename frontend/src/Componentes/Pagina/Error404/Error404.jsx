import TarjetaDia from "../Tarjetas/TarjetaDia";

const Error404 = () => {
  const tarjeta = {
    persona: "Error 404",
    titulos: "¡Alto ahí, forastero!",
    listaTitulos:
      "Parece que has encontrado un territorio desconocido en el vasto desierto digital. No te preocupes, nuestros sheriff de la red están en camino para guiarte de regreso al pueblo principal. Mientras tanto, ¿por qué no te relajas con un poco de música en nuestro salon virtual?",
  };

  return (
    <>
      <div>
        <TarjetaDia tarjeta={tarjeta} />
      </div>
    </>
  );
};

export default Error404;

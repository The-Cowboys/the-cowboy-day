import Tarjeta from "../Pagina/InfoTonto/Tarjeta";

const Inicio = () => {
  const tarjeta = {
    persona: "Nombre: Jorge",
    cantidad: "68",
    titulos: "Titulos",
    listaTitulos: "lol",
  };

  return (
    <>
      <section>
        {/* Tarjeta del día del mas tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <Tarjeta tarjeta={tarjeta} />

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        {/* <Tarjeta /> */}
      </section>
    </>
  );
};

export default Inicio;

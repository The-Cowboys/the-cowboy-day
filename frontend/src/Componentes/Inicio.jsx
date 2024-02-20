import TarjetaDia from "./Pagina/InfoTonto/TarjetaDia";

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
        <TarjetaDia tarjeta={tarjeta} />

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <TarjetaDia />
      </section>
    </>
  );
};

export default Inicio;

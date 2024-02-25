import Tarjeta from "./InfoTonto/Tarjeta";
import ListaParticipantes from "./InfoTonto/ListaParticipantes";

const ListaElMasTonto = () => {
  const tarjeta = {
    persona: "Nombre: Jorge",
    cantidad: "68",
    titulos: "Titulos",
    listaTitulos: "lol",
  };
  const LP = {
    persona: "Jorge",
    cantidad: "68",
  };

  return (
    <>
      <section>
        {/* Tarjeta del día */}
      <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <Tarjeta tarjeta={tarjeta} />

        {/* Lista de participantes */}
        <h3 className="tituloH3">Lista de participantes</h3>
        <ListaParticipantes LP={LP} />
      </section>
    </>
  );
};

export default ListaElMasTonto;

import Tarjeta from "../Componentes/Tarjetas/Tarjeta";
import ListaParticipantes from "./PerfilDeParticipante/ListaParticipantes";

const ListaElMasTonto = () => {
  const datos = {
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
        <Tarjeta tarjeta={datos} />

        {/* Lista de participantes */}
        <h3 className="tituloH3">Lista de participantes</h3>
        <ListaParticipantes LP={LP} />
      </section>
    </>
  );
};

export default ListaElMasTonto;

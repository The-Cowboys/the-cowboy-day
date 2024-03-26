import TarjetaTonta from "../Componentes/Tarjetas/TarjetaTonta";
import ListaParticipantes from "./PerfilDeParticipante/ListaParticipantes";

const ListaElMasTonto = () => {

  return (
    <>
      <section>
        {/* Tarjeta del día */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <TarjetaTonta />

        {/* Lista de participantes */}
        <h3 className="tituloH3">Lista de participantes</h3>
        <ListaParticipantes />
      </section>
    </>
  );
};

export default ListaElMasTonto;

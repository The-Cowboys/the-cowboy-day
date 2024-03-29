import { useNombres } from "../Hooks/obtenerNombres";
import { useObtenerTonto } from "../Hooks/useObtenerTonto";
import TarjetaTonta from "../Componentes/Tarjetas/TarjetaTonta";
import ListaParticipantes from "./PerfilDeParticipante/ListaParticipantes";
import Carga from "./Errores/Carga";

const ListaElMasTonto = () => {
  const { cargaa } = useNombres();
  const { carga } = useObtenerTonto();

  if (carga || cargaa) {
    return <Carga />;
  }
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

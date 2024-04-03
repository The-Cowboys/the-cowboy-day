import { useObtenerTonto } from "../../Hooks/useObtenerTonto";
import ListaParticipantes from "../ElMasTonto/PerfilDeParticipante/ListaParticipantes";
import Carga from "../Errores/Carga";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const ListaElMasTonto = () => {
  const { tonto, carga } = useObtenerTonto();

  if (carga) {
    return <Carga />;
  }
  return (
    <>
      <section>
        {/* Tarjeta del día del más tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <Tarjeta
          nombre={tonto.nombre}
          total={tonto.total}
          titulos={tonto.titulos}
        />

        {/* Lista de participantes */}
        <h3 className="tituloH3">Lista de participantes</h3>
        <ListaParticipantes />
      </section>
    </>
  );
};

export default ListaElMasTonto;
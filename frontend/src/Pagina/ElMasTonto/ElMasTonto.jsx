import { useObtenerTonto } from "../../Hooks/useObtenerTonto";
import ListaTontos from "./PerfilDeParticipante/ListaTontos";
import Carga from "../Errores/Carga";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const ListaElMasTonto = () => {
  const { tonto, carga, errorTonto } = useObtenerTonto();

  if (carga) {
    return <Carga />;
  }
  return (
    <>
      <section>
        {/* Tarjeta del día del más tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        {tonto && (
          <Tarjeta
            nombre={tonto.nombre}
            total={tonto.total}
            titulos={tonto.titulos}
            tipoDeMensaje="tontoDelDía"
          />
        )}
        {errorTonto && (
          // Tarjeta de error del día del más tonto
          <Tarjeta
            nombre={"¡Procesando!"}
            total={"--"}
            titulos={["----"]}
            tipoDeMensaje="errorTonto"
          />
        )}

        {/* Lista de participantes tontos */}
        <h3 className="tituloH3">Lista de participantes</h3>
        <ListaTontos />
      </section>
    </>
  );
};

export default ListaElMasTonto;

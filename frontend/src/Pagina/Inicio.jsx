import { useNombres } from "../Hooks/obtenerNombres";
import { useObtenerTonto } from "../Hooks/useObtenerTonto";
import Tarjeta from "../Componentes/Tarjeta/Tarjeta";
import Carga from "./Errores/Carga";

const Inicio = () => {
  const { cargaa } = useNombres();
  const { tonto } = useObtenerTonto();

  if (cargaa) {
    return <Carga />;
  }

  return (
    <>
      <section>
        {/* Tarjeta del día del más tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <Tarjeta
          nombre={tonto.nombre}
          titulos={tonto.titulos.join(", ")}
          titulosCantidad={tonto.titulos.length}
          total={tonto.total}
        />

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <Tarjeta
          nombre={"--Próximamente--"}
          titulos={"--Próximamente--"}
          titulosCantidad={"--Próximamente--"}
          total={"--"}
        />
      </section>
    </>
  );
};

export default Inicio;

import { useObtenerTonto } from "../Hooks/useObtenerTonto";
import Tarjeta from "../Componentes/Tarjeta/Tarjeta";

const Inicio = () => {
  const { tonto } = useObtenerTonto();

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

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <Tarjeta
          nombre={"--Próximamente--"}
          total={"--"}
          titulos={["--Próximamente--"]}
        />
      </section>
    </>
  );
};

export default Inicio;

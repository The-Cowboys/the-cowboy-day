import { useObtenerTonto } from "../Hooks/useObtenerTonto";
import Tarjeta from "../Componentes/Tarjeta/Tarjeta";
import Carga from "../Pagina/Errores/Carga";

const Inicio = () => {
  const { tonto, carga, error } = useObtenerTonto();

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
          />
        )}
        {error && (
          // Tarjeta de error del día del más tonto
          <Tarjeta
            nombre={"Procesando un tonto"}
            total={"--"}
            titulos={["----"]}
          />
        )}

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <Tarjeta
          nombre={"--Próximamente--"}
          total={"--"}
          titulos={["--Próximamente--"]}
        />
        {error && (
          // Tarjeta de error del cowboy del día
          <Tarjeta
            nombre={"Procesando un cowboy"}
            total={"--"}
            titulos={["----"]}
          />
        )}
      </section>
    </>
  );
};

export default Inicio;

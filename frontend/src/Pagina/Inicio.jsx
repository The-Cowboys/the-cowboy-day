import { useObtenerTonto } from "../Hooks/useObtenerTonto";
import { useCowboyDelDia } from "../Hooks/useCowboyDelDia";
import Tarjeta from "../Componentes/Tarjeta/Tarjeta";
import Carga from "../Pagina/Errores/Carga";

const Inicio = () => {
  const { tonto, carga, errorTonto } = useObtenerTonto();
  const { cowboy, errorCowboy } = useCowboyDelDia();

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

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        {cowboy && (
          <Tarjeta
            nombre={cowboy.name}
            total={"--"}
            titulos={["--Próximamente--"]}
            tipoDeMensaje="cowboyDelDía"
          />
        )}
        {errorCowboy && (
          // Tarjeta de error del cowboy del día
          <Tarjeta
            nombre={"¡Procesando!"}
            total={"--"}
            titulos={["----"]}
            tipoDeMensaje="errorCowboy"
          />
        )}
      </section>
    </>
  );
};

export default Inicio;

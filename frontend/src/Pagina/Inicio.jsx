import { useObtenerTonto } from "../Hooks/useObtenerTonto";
import { useCowboyDelDia } from "../Hooks/useCowboyDelDia";
import Tarjeta from "../Componentes/Tarjeta/Tarjeta";
import Carga from "../Pagina/Errores/Carga";


import { useContext } from "react";
import { PruebaContext } from "../Context/Context";



const Inicio = () => {
  const { tonto, carga, errorTonto } = useObtenerTonto();
  const { cowboy, errorCowboy } = useCowboyDelDia();


  const compartida = useContext(PruebaContext);
  console.log(compartida);


  

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
            mensaje="Tonto del día de hoy es "
          />
        )}
        {errorTonto && (
          // Tarjeta de error del día del más tonto
          <Tarjeta
            nombre={"Procesando un tonto"}
            total={"--"}
            titulos={["----"]}
          />
        )}

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        {cowboy && (
          <Tarjeta
            nombre={cowboy.name}
            total={"--"}
            titulos={["--Próximamente--"]}
            mensaje="Cowboy del día de hoy es "
          />
        )}
        {errorCowboy && (
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

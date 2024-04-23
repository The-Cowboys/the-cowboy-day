import { useCowboyDelDia } from "../../Hooks/useCowboyDelDia";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";
import ListaCowboysDelDia from "./ComponetesDelCowboyDelDia/ListaCowboysDelDia";
import Carga from "../Errores/Carga";

// como idetificar errores:
// 1) leer el puto mensaje de error
// 2) lerr el mensaje de error otra vez
// 3) enteneder el mesaje de error
// 4) traducir el mesaje de error
// 5) perdir que me expliquen el error
// 6) poner console.log(); para verificar que el valor es null
// 7) poer console.log(); en el origen del valor
// 8) poer console.log(); en las actualizasiones del valor
// 9) Usar if para comprovar si una variable es null antes de usarla

const CowboyDelDia = () => {
  const { cowboy, errorCowboy } = useCowboyDelDia();

  if (cowboy == null) {
    return <Carga />;
  }
  return (
    <>
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
          mensaje="El algoritmo está preparando un cowboy "
        />
      )}

      {/* Lista de participantes cowboy del día */}
      <h3 className="tituloH3">Lista de participantes</h3>
      <ListaCowboysDelDia />
    </>
  );
};

export default CowboyDelDia;

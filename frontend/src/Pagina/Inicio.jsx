import { useNombres } from "../Hooks/obtenerNombres";
import TarjetaCowboy from "../Componentes/Tarjetas/TarjetaCowboy";
import TarjetaTonta from "../Componentes/Tarjetas/TarjetaTonta";
import Carga from "./Errores/Carga";

const Inicio = () => {
  const { cargaa } = useNombres();
  if (cargaa) {
    return <Carga />;
  }
  return (
    <>
      <section>
        {/* Tarjeta del día del mas tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <TarjetaTonta />

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <TarjetaCowboy />
      </section>
    </>
  );
};

export default Inicio;

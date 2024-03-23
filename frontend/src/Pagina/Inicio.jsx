import Tarjeta from "../Componentes/Tarjetas/Tarjeta";
import { useObtenerTonto } from "../Hooks/useObtenerTonto";

const Inicio = () => {
  const { tonto } = useObtenerTonto();
  console.log ("32132")
  return (
    <>
      <section>
        {/* Tarjeta del día del mas tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <Tarjeta persona={tonto} />;

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        {/* <Tarjeta /> */}
      </section>
    </>
  );
};

export default Inicio;

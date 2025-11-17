import Carga from "../Errores/Carga";
import Calendario from "../../Componentes/Calendario";

const EstadisticasElMasTonto = () => {
  return (
    <>
      <section>
        <h3>--Estadisticas el mas toto en mantenimiento--</h3>
      </section>

      <section className="">
        <Calendario />
      </section>

      <Carga />
    </>
  );
};

export default EstadisticasElMasTonto;

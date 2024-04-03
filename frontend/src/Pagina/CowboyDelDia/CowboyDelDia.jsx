import CowboyDelDiaBoton from "./ComponetesDelCowboyDelDia/CowboyDelDiaBoton";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";
import { useCowboyDelDia } from "../../Hooks/useCowboyDelDia";

const CowboyDelDia = () => {
  const { cowboy } = useCowboyDelDia();

  return (
    <>
    {/* Tarjeta del cowboy del día */}
    <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <Tarjeta
          nombre={cowboy.name}
          total={"--"}
          titulos={["--Próximamente--"]}
        />
    <div>
        <CowboyDelDiaBoton />
    </div>
    </>
  );
};

export default CowboyDelDia;

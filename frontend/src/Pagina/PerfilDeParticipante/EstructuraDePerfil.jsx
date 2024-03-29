import { useObtenerParticipante } from "../../Hooks/useObtenerParticipante";
import Carga from "../Errores/Carga";
import ListaTitulos from "./ListaTitulos";
import { useParams } from "react-router-dom";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const EstructuraDePerfil = () => {
  const { id } = useParams();
  const { participante, carga } = useObtenerParticipante(id);

  if (carga) {
    return <Carga />;
  }
  return (
    <>
      <h2 className="tituloH2">{participante.nombre}</h2>
      {/* Tarjeta del participante */}
      <Tarjeta
        nombre={participante.nombre}
        titulos={participante.titulos.join(", ")}
        titulosCantidad={participante.titulos.length}
        total={participante.total}
      />
      <div className="ListaTitulos">
        <ListaTitulos idCowboy={id} />
      </div>
    </>
  );
};

export default EstructuraDePerfil;

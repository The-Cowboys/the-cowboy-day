import { useObtenerParticipante } from "../../../Hooks/useObtenerParticipante";
import { useParams } from "react-router-dom";
import Tarjeta from "../../../Componentes/Tarjeta/Tarjeta";
import ListaTitulos from "./ListaTitulos";
import Carga from "../../Errores/Carga";

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
        total={participante.total}
        titulos={participante.titulos}
      />
      {/* Lista de titulos */}
      <div className="ListaTitulos">
        <ListaTitulos idCowboy={id} />
      </div>
    </>
  );
};

export default EstructuraDePerfil;

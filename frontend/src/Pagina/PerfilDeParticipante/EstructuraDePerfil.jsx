import { useObtenerParticipante } from "../../Hooks/useObtenerParticipante";
import Carga from "../Errores/Carga";
import ListaTitulos from "./ListaTitulos";
import { useParams } from "react-router-dom";

const EstructuraDePerfil = () => {
  const { id } = useParams();
  const { participante, carga } = useObtenerParticipante(id);

  if (carga) {
    return <Carga />;
  }
  return (
    <>
      <h2 className="tituloH2">{participante.nombre}</h2>
      <div className="ListaTitulos">
        <ListaTitulos idCowboy={id} />
      </div>
    </>
  );
};

export default EstructuraDePerfil;

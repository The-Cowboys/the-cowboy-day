import TarjetaPerfil from "../../Componentes/Tarjetas/TarjetaPerfil";
import { useObtenerParticipante } from "../../Hooks/useObtenerParticipante";
import ListaTitulos from "./ListaTitulos";
import { useParams } from "react-router-dom";

const EstructuraDePerfil = () => {
  const { id } = useParams();
  const { participante } = useObtenerParticipante(id);

  return (
    <>
      <h2 className="tituloH2">{participante.nombre}</h2>
      <dir>
        <TarjetaPerfil idCowboy={id} />
      </dir>
      <div className="ListaTitulos">
        <ListaTitulos idCowboy={id} />
      </div>
    </>
  );
};

export default EstructuraDePerfil;

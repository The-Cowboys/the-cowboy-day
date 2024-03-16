import ListaTitulos from "./ListaTitulos";
import { useLocation } from "react-router-dom";

const EstructuraDePerfil = () => {
  const { state } = useLocation();

  return (
    <>
      <h2 className="tituloH2">{state?.user.name}</h2>
      <div className="ListaTitulos">
      <ListaTitulos idCowboy={state?.user.id} />
      </div>
    </>
  );
};

export default EstructuraDePerfil;

import { useNombres } from "../../API/Api";
import ListaTitulos from "./ListaTitulos";

const EstructuraDePerfil = () => {
  const { users } = useNombres();

  return (
    <div>
      {users.map((user, index) => (
        <>
          <h2 className="tituloH2" key={index}>
            {user.name}
          </h2>
          <div className="ListaTitulos">
            <ListaTitulos />
          </div>
          
        </>
      ))}
    </div>
  );
};

export default EstructuraDePerfil;

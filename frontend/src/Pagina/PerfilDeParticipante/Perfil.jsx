import { useNombres } from "../../API/Api";

const Perfil = () => {
  const { users } = useNombres();

  return (
    <>
      {users.map((user, index) => (
        <h2 className="tituloH2" key={index}>{user.name}</h2>
      ))}
    </>
  );
};

export default Perfil;

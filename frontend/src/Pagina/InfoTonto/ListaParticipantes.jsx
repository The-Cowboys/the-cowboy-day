import ListaTitulos from "./ListaTitulos";
import { useNombres } from "../../Hooks/Hooks"

const ListaParticipantes = () => {
  const { users } = useNombres();
  return (
    <div className="ListaParticipantes">
      {users.map((user, index) => (
        <ol className="list-group list-group-numbered" key={index}>
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">{user.name}</div>
              <ListaTitulos />
            </div>
            <span className="badge">88</span>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default ListaParticipantes;

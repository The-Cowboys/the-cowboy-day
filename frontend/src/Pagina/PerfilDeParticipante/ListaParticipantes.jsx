import { useNombres } from "../../Hooks/obtenerNombres";
import { Link } from "react-router-dom";

const ListaParticipantes = () => {
  const { users } = useNombres();
  return (
    <div className="ListaParticipantes">
      {users.map((user, index) => (
        <ol className="list-group list-group-numbered" key={index}>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <Link
                to={`/EstructuraDePerfil/${user.id}`}
                className="nombre fw-bold"
              >
                {user.name}
              </Link>
              <div className="fondoNav"></div>
            </div>
            <span className="badge">75</span>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default ListaParticipantes;

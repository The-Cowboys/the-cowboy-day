import { useNombres } from "../../Hooks/obtenerNombres";
import { Link } from "react-router-dom";
import Carga from "../Errores/Carga";

const ListaParticipantes = () => {
  const { users, carga } = useNombres();

  if (carga) {
    return <Carga />;
  }

  return (
    <div className="ListaParticipantes">
      <ol className="list-group list-group-numbered">
        {users.map((user, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="logros ms-2 me-auto">
              <Link
                to={`/EstructuraDePerfil/${user.id}`}
                className="nombre fw-bold"
              >
                {user.nombre}
              </Link>
              <p className="fondoNav">{user.titulos.join(", ")}</p>
            </div>
            <span className="badge">{user.total}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListaParticipantes;

import { useNombres } from "../../Hooks/obtenerNombres"
import { Link } from "react-router-dom";
import { useObtenerTonto } from "../../Hooks/useObtenerTonto";

const ListaParticipantes = () => {
  const { users } = useNombres();
  const { tonto } = useObtenerTonto();
  if (tonto)

  return (
    <div className="ListaParticipantes">
      {users.map((user, index) => (
        <ol className="list-group list-group-numbered" key={index}>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <Link to="/EstructuraDePerfil" state={{ user: user }} className="nombre fw-bold">{user.name}</Link>
              <div className="fondoNav">
              </div>
            </div>
            <span className="badge">{tonto.total}</span>
          </li>
        </ol>
      ))}
    </div>
  );
};

export default ListaParticipantes;

import { useNombres } from "../../../Hooks/obtenerNombres";
import { Link } from "react-router-dom";

const ListaCowboysDelDia = () => {
  const { users } = useNombres();

  return (
    <div className="ListaParticipantes">
      <ol className="list-group list-group-numbered">
        {users.map((index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="logros ms-2 me-auto">
              <Link to={`/CowboyDelDia`} className="nombre fw-bold">
                --Próximamente--
              </Link>
              <p className="fondoNav">--Próximamente--</p>
            </div>
            <span className="badge">--</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListaCowboysDelDia;

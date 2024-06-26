import { useNombres } from "../../../Hooks/obtenerNombres";
import { Link } from "react-router-dom";

const ListaTontos = () => {
  const { users } = useNombres();

  let mensaje = "";
  for (let i = 0; i < users.length; i++) {
    const { nombre, total, titulos } = users[i];
    mensaje += `*${nombre}* x ${total} (${titulos.join(", ")})%0A`;
  }

  return (
    <div className="ListaParticipantes">
      <div className="compartirListaWhatsapp">
        <Link
          to={`https://api.whatsapp.com/send?text= ${mensaje}`}
          target="_blank"
        >
          <button type="button" className="btn btn-dark">
            Compartir lista en whatsapp
          </button>
        </Link>
      </div>
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

export default ListaTontos;

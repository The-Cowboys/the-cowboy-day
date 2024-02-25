import { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import ListaTitulos from "./ListaTitulos";

const ListaParticipantes = () => {
  // https://thecowboys.duckdns.org/api/cowboys
  // https://reqres.in/api/users?page=2

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await Api.get("https://reqres.in/api/users?page=2");
    setUsers(resp.data.data);
  };

  return (
    <>
      {users.map((user) => (
        <ol
          className="principal list-group list-group-numbered"
          key={user.name}
        >
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">{user.last_name}</div>
              <ListaTitulos />
            </div>
            <span className="badge">88</span>
          </li>
        </ol>
      ))}
    </>
  );
};

export default ListaParticipantes;

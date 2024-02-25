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
      <ol className="principal list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="logros ms-2 me-auto">
            {users.map((user) => (
              <div className="nombre fw-bold" key={user.name}>
                {user.last_name}
              </div>
            ))}
            <ListaTitulos />
          </div>
          <span className="badge">88</span>
        </li>
      </ol>
    </>
  );
};

export default ListaParticipantes;

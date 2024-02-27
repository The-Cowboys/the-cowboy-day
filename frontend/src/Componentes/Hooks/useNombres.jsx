import { useEffect, useState } from "react";
import { Api } from "../Api/Api";

export const useNombres = () => {
  // https://thecowboys.duckdns.org/api/cowboys
  // https://reqres.in/api/users?page=2

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await Api.get("https://thecowboys.duckdns.org/api/cowboys");
    setUsers(resp.data);
  };

  return {
    users,
  };
};

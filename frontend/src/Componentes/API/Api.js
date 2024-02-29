import { useEffect, useState } from "react";
import axios from "axios";

export const useNombres = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await axios.get("https://thecowboys.duckdns.org/api/cowboys");
    setUsers(resp.data);
  };

  return {
    users,
  };
};

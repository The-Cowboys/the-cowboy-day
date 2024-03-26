import { useEffect, useState } from "react";
import { obtenerNombres } from "../API/Api";

export const useNombres = () => {
  const [users, setUsers] = useState([]);

  const mostrarUsuarios = async () => {
    const data = await obtenerNombres();
    setUsers(data);
  };

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  return {
    users,
  };
};

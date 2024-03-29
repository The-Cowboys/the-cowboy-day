// Lista participantes
import { useEffect, useState } from "react";
import { obtenerNombres } from "../API/Api";

export const useNombres = () => {
  const [users, setUsers] = useState([]);
  const [cargaa, setCargaa] = useState(true);

  const mostrarUsuarios = async () => {
    const data = await obtenerNombres();
    setUsers(data);
    setCargaa(false);
  };

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  return {
    users,
    cargaa,
  };
};

import { useEffect, useState } from "react";
import { obtenerNombres } from "../API/Api";

export const useNombres = () => {
  const [users, setUsers] = useState([]);
  const [carga, setCarga] = useState(true);

  const mostrarUsuarios = async () => {
    const data = await obtenerNombres();
    setUsers(data);
    setCarga(false);
  };

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  return {
    users,
    carga,
  };
};

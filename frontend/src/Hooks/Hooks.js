import { useEffect, useState } from "react";
import obtenerNombres from "../API/Api";

export const useNombres = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerNombres();
      setUsers(data);
    };

    fetchData();
  }, []);

  return {
    users,
  };
};

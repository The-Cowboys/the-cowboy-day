import { useEffect, useState } from "react";
import postTitulos from "../API/Api";

export const useNombres = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await postTitulos();
      setUsers(data);
    };

    fetchData();
  }, []);

  return {
    users,
  };
};

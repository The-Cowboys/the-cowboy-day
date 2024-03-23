import { useEffect, useState } from "react";
import obtenerTonto from "../API/Api";

export const useObtenerTonto = () => {
  const [tonto, setTonto] = useState([]);

  const mostrarTonto = async () => {
    const data = await obtenerTonto();
    console.log ("75", data)
    setTonto(data);
  };

  useEffect(() => {
    mostrarTonto();
  }, []);

  return {
    tonto,
  };
};
obtenerTonto
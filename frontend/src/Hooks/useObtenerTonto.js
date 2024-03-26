import { useEffect, useState } from "react";
import { obtenerTonto } from "../API/Api";

export const useObtenerTonto = () => {
  const [tonto, setTonto] = useState(null);

  const mostrarTonto = async () => {
    const data = await obtenerTonto();
    setTonto(data);
  };

  useEffect(() => {
    mostrarTonto();
  }, []);

  return {
    tonto,
  };
};

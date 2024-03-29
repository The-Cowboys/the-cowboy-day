// Tarjeta tonta
import { useEffect, useState } from "react";
import { obtenerTonto } from "../API/Api";

export const useObtenerTonto = () => {
  const [tonto, setTonto] = useState(null);
  const [carga, setCarga] = useState(true);

  const mostrarTonto = async () => {
    const data = await obtenerTonto();
    setTonto(data);
    setCarga(false);
  };

  useEffect(() => {
    mostrarTonto();
  }, []);

  return {
    tonto,
    carga,
  };
};

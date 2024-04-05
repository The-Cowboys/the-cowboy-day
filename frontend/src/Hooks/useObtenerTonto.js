// Tarjeta tonta
import { useEffect, useState } from "react";
import { obtenerTonto } from "../API/Api";

export const useObtenerTonto = () => {
  const [tonto, setTonto] = useState(null);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(false);

  const mostrarTonto = async () => {
    try {
      const data = await obtenerTonto();
      setTonto(data);
    } catch (error) {
      setError(true);
      console.log("Error al obtener datos:");
    } finally {
      setCarga(false);
    }
  };

  useEffect(() => {
    mostrarTonto();
  }, []);

  return {
    tonto,
    carga,
    error,
  };
};

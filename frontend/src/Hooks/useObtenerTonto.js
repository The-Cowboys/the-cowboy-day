// Tarjeta tonta
import { useEffect, useState } from "react";
import { obtenerTonto } from "../API/Api";

export const useObtenerTonto = () => {
  const [tonto, setTonto] = useState(null);
  const [carga, setCarga] = useState(true);
  const [errorTonto, setErrorTonto] = useState(false);

  const mostrarTonto = async () => {
    try {
      const data = await obtenerTonto();
      setTonto(data);
    } catch (error) {
      setErrorTonto(true);
      console.log("Error al obtener datos:", "Procesando un tonto");
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
    errorTonto,
  };
};

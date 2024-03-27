import { useEffect, useState } from "react";
import { obtenerTontoId } from "../API/Api";

export const useObtenerParticipante = (idCowboy) => {
  const [participante, setParticipante] = useState([]);

  const mostrarParticipante = async () => {
    const data = await obtenerTontoId(idCowboy);
    setParticipante(data);
  };
  useEffect(() => {
    mostrarParticipante();
  }, []);

  return {
    participante,
  };
};

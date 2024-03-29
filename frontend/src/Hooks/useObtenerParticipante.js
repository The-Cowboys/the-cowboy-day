import { useEffect, useState } from "react";
import { obtenerTontoId } from "../API/Api";
import { useNavigate } from "react-router-dom";

export const useObtenerParticipante = (idCowboy) => {
  const [participante, setParticipante] = useState([]);
  const navigate = useNavigate();
  const mostrarParticipante = async () => {
    try {
      const data = await obtenerTontoId(idCowboy);
      setParticipante(data);
    } catch (err) {
      navigate("/camino/equivocado/");
    }
  };
  useEffect(() => {
    mostrarParticipante();
  }, []);

  return {
    participante,
  };
};

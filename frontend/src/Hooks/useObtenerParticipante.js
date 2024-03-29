// Estructura de perfil
import { useEffect, useState } from "react";
import { obtenerTontoId } from "../API/Api";
import { useNavigate } from "react-router-dom";

export const useObtenerParticipante = (idCowboy) => {
  const [participante, setParticipante] = useState([]);
  const [carga, setCarga] = useState(true);
  const navigate = useNavigate();

  const mostrarParticipante = async () => {
    try {
      const data = await obtenerTontoId(idCowboy);
      setParticipante(data);
      setCarga(false);
    } catch (err) {
      navigate("/¡Oops!/Parece/que/tomé/el/camino/equivocado./¡Cuidado/con/los/bandidos/digitales!");
    }
  };
  useEffect(() => {
    mostrarParticipante();
  }, []);

  return {
    participante,
    carga,
  };
};

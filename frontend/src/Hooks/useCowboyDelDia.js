// Cowboy Del Día
import { useEffect, useState } from "react";
import { fetchCowboysToday } from "../API/Api";

export const useCowboyDelDia = () => {
  const [cowboy, setCowboy] = useState(null);
  const [errorCowboy, setErrorCowboy] = useState(false);

  const fetchCowboys = async () => {
    try {
      const cowboyName = await fetchCowboysToday();
      setCowboy(cowboyName);
    } catch (error) {
      setErrorCowboy(true);
      console.log("Error al obtener datos:");
    }
  };

  useEffect(() => {
    fetchCowboys();
  }, []);

  return {
    cowboy,
    errorCowboy,
  };
};

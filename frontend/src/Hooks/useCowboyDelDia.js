// Cowboy Del Día
import { useEffect, useState } from "react";
import { fetchCowboysToday } from "../API/Api";

export const useCowboyDelDia = () => {
  const [cowboy, setCowboy] = useState(null);

  const fetchCowboys = async () => {
    const cowboyName = await fetchCowboysToday();
    setCowboy(cowboyName);
  };

  useEffect(() => {
    fetchCowboys();
  }, []);

  return {
    cowboy,
  };
};

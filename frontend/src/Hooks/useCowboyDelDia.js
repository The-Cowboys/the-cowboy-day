// Cowboy Del Día
import { useEffect, useState } from "react";
import { fetchCowboysToday } from "../API/Api";

export const useCowboyDelDia = () => {
  const [cowboy, setCowboy] = useState(null);
  const [clicked, setClick] = useState(true);

  const fetchCowboys = async () => {
    const cowboyName = await fetchCowboysToday();
    setCowboy(cowboyName);
    setClick(false);
  };

  useEffect(() => {
    fetchCowboys();
  }, []);

  return {
    cowboy,
    clicked,
  };
};

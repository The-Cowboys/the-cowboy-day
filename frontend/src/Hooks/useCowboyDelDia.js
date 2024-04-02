import { useState } from "react";
import { fetchCowboysToday } from "../API/Api";

export const useCowboyDelDia = () => {
  const [cowboy, setCowboy] = useState(null);
  const [clicked, setClick] = useState(false);

  const click = () => {
    setClick(true);

    setTimeout(() => {
      fetchCowboys();
    }, 1000);
  };

  const fetchCowboys = async () => {
    const cowboyName = await fetchCowboysToday();
    setCowboy(cowboyName);
  };

  return {
    cowboy,
    clicked,
    click,
  };
};

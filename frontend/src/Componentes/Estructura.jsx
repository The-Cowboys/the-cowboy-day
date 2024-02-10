import React from "react";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import Contacto from "./Contacto";
import Inicio from "./Inicio";
import Estadisticas from "./Estadisticas";
import Acerca from "./Acerca";

const Estructura = () => {
  return (
    <>
      <NavBar />
      <Inicio />
      <Acerca />
      <Estadisticas />
      <Contacto />
    </>
  );
}

export default Estructura;
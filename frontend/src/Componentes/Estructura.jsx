import React from "react";
import { Route, Routes } from 'react-router-dom';
import Inicio from "./Pagina/Inicio";
import Estadisticas from "./Pagina/Estadisticas";
import Acerca from "./Pagina/Acerca";
import Contacto from "./Pagina/Contacto";

const Estructura = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Estadisticas" element={<Estadisticas />} />
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default Estructura;